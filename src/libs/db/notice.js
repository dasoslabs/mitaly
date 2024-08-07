"use server"

import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_notice_posts"

export async function getPostTotalCount() {
  const supabase = createSupabase()
  const { count } = await supabase
    .from(TABLE_NAME)
    .select("*", { count: "exact", head: true })
  return count
}

export async function getAllPostsWithPagination({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()

  const start = (parseInt(page) - 1) * parseInt(limit)
  const end = start + parseInt(limit) - 1

  const { data: posts, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      title,
      created_at
    `,
    )
    .order("created_at", { ascending: false })
    .range(start, end)

  return posts
    ? posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        created_at: formatTimestampToKRDate(post.created_at),
      }))
    : []
}

export async function getAllPosts() {
  const supabase = createSupabase()

  const { data: posts, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      title,
      created_at,
      author:author_id (name)
    `,
    )
    .order("created_at", { ascending: false })
  // .range(start, end)

  return posts
    ? posts.map((post) => ({
        id: post.id,
        title: post.title,
        content: post.content,
        created_at: formatTimestampToKRDate(post.created_at),
        author: post.author.name,
      }))
    : []
}

export async function getPostDetailById(id) {
  const supabase = createSupabase()

  const { data: post, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      title,
      content,
      created_at,
      author:author_id (is_admin)
    `,
    )
    .eq("id", id)
    .single()

  return {
    id: post.id,
    title: post.title,
    content: post.content,
    isAdmin: post.author?.is_admin ?? false,
    created_at: formatTimestampToKRDate(post.created_at),
  }
}

export async function createPost({ title, content }) {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userData } = await supabase
    .from("users")
    .select("id, name")
    .eq("user_id", user?.id)
    .single()

  const { error } = await supabase
    .from(TABLE_NAME)
    .insert([{ title, content, author_id: userData?.id }])

  if (error) {
    return false
  }

  return true
}

export async function updatePost({ id, title, content }) {
  const supabase = createSupabase()

  const { error } = await supabase
    .from(TABLE_NAME)
    .update({ title, content })
    .eq("id", id)

  if (error) {
    console.log(error)
    return false
  }

  return true
}

export async function deletePost(id) {
  const supabase = createSupabase()

  await supabase.from(TABLE_NAME).delete().eq("id", id)

  return true
}
