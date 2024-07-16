import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_notice_posts"

export async function getAllPosts({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit
  const end = start + limit - 1

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

export const getPostDetailById = async (id) => {
  const supabase = createSupabase()

  const { data: post, error } = await supabase
    .from(TABLE_NAME)
    .select(`
      id,
      title,
      content,
      author:author_id (is_admin)
    `)
    .eq('id', id)
    .single()

  return {
    id: post.id,
    title: post.title,
    content: post.content,
    isAdmin: post.author.is_admin,
  }
}

export async function createPost({ title, content }) {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userData } = await supabase
    .from("users")
    .select("id, nickname")
    .eq("user_id", user?.id)
    .single()

  const { data: post } = await supabase
    .from(TABLE_NAME)
    .insert([{ title, content, author_id: userData?.id }])
    .select()
    .single()

  return post
}

export async function deletePost(id) {
  const supabase = createSupabase()

  await supabase.from(TABLE_NAME).delete().eq("id", id)

  return true
}
