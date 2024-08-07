"use server"

import createSupabase from "../supabase"

const TABLE_NAME = "mitaly_news"
const CATEGORY_TABLE_NAME = "mitaly_news_categories"
const STORAGE_NAME = "mitaly"

export async function getCategories() {
  const supabase = createSupabase()

  const { data } = await supabase
    .from(CATEGORY_TABLE_NAME)
    .select("id, name")
    .order("id", { ascending: true })

  return data
}

export async function getAllNews() {
  const supabase = createSupabase()

  const { data: newsList } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      title,
      category:category_id (name)
    `,
    )
    .order("created_at", { ascending: false })

  return newsList
    ? newsList.map((news) => ({
        id: news.id,
        title: news.title,
        category_name: news.category.name,
      }))
    : []
}

export async function createNews(data) {
  const supabase = createSupabase()
  const { image_file, files: fileData } = data

  // 이미지 파일 처리
  let thumbnail_url = null
  let thumbnail_name = null
  if (image_file) {
    thumbnail_name = image_file.name?.replace(/\s+/g, "_")
    await supabase.storage
      .from(STORAGE_NAME)
      .upload(`news/images/${thumbnail_name}`, image_file)

    const {
      data: { signedUrl },
    } = await supabase.storage
      .from(STORAGE_NAME)
      .createSignedUrl(
        `news/images/${thumbnail_name}`,
        100 * 365 * 24 * 60 * 60,
      )
    thumbnail_url = signedUrl
  }
  delete data.image_file

  // 첨부파일 처리
  let files = null
  if (fileData) {
    files = []

    fileData.forEach(async (file) => {
      const name = file.name?.replace(/\s+/g, "_")
      await supabase.storage
        .from(STORAGE_NAME)
        .upload(`news/files/${name}`, file)

      const {
        data: { signedUrl },
      } = await supabase.storage
        .from(STORAGE_NAME)
        .createSignedUrl(`news/files/${name}`, 100 * 365 * 24 * 60 * 60)

      files.push({
        name,
        url: signedUrl,
      })
    })
  }
  delete data.files

  const { error } = await supabase.from(TABLE_NAME).insert([
    {
      thumbnail_url,
      thumbnail_name,
      files,
      ...data,
    },
  ])

  if (error) {
    return false
  }

  return true
}

export async function deleteNews(id) {
  const supabase = createSupabase()

  const { data: news } = await supabase
    .from(TABLE_NAME)
    .select("thumbnail_name, files")
    .eq("id", id)
    .single()

  if (news?.thumbnail_name) {
    await supabase.storage
      .from(STORAGE_NAME)
      .remove([`news/images/${news.thumbnail_name}`])
  }

  if (news?.files) {
    news.files.forEach(async ({ name }) => {
      await supabase.storage.from(STORAGE_NAME).remove([`news/files/${name}`])
    })
  }

  const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id)

  if (error) {
    return false
  }

  return true
}
