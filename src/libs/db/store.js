import createSupabase from "../supabase"
import { formatTimestampToKRDate } from "../utils/time"

const TABLE_NAME = "mitaly_stores"

export async function getAllStores({ page = 1, limit = 10 } = {}) {
  const supabase = createSupabase()
  const start = (page - 1) * limit
  const end = start + limit - 1

  const { data: stores, error } = await supabase
    .from(TABLE_NAME)
    .select(
      `
      id,
      name,
      created_at,
      author:author_id (name)
    `,
    )
    .order("created_at", { ascending: false })
  // .range(start, end)

  return stores
    ? stores.map((store) => ({
        id: store.id,
        name: store.name,
        created_at: formatTimestampToKRDate(store.created_at),
        author: store.author.name,
      }))
    : []
}

export async function createStore({
  region = "",
  name = "",
  address = "",
  address_detail = "",
  contact = "",
  business_hours = "",
  break_time = null,
  holidays = null,
  options = [],
  image_file = "",
} = {}) {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: userData } = await supabase
    .from("users")
    .select("id, nickname")
    .eq("user_id", user?.id)
    .single()

  const { data: store, error } = await supabase
    .from(TABLE_NAME)
    .insert([
      {
        region,
        name,
        address,
        address_detail,
        contact,
        business_hours,
        break_time,
        holidays,
        options,
        author_id: userData?.id,
      },
    ])
    .select()
    .single()

  return store
}

export async function deleteStore(id) {
  const supabase = createSupabase()

  await supabase.from(TABLE_NAME).delete().eq("id", id)

  return true
}
