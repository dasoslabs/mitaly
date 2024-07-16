import createSupabase from "../supabase";
import { formatTimestampToKRDate } from "../utils/time";

const TABLE_NAME = "mitaly_notice_posts"

export async function getAllPosts({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit;
  const end = start + limit - 1;

  const { data: posts, error } = await supabase
    .from(TABLE_NAME)
    .select(`
      id,
      title,
      created_at,
      author:author_id (name)
    `)
    .order('created_at', { ascending: false })
    // .range(start, end)

  return posts ? posts.map(post => ({
    id: post.id,
    title: post.title,
    content: post.content,
    created_at: formatTimestampToKRDate(post.created_at),
    author: post.author.name,
  })) : []
}
