import createSupabase from "../supabase"

const TABLE_NAME = "users"

export async function createUser() {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const { data: userData } = await supabase
    .from("users")
    .select("id, nickname")
    .eq("user_id", user?.id)
    .single()

  // 신규가입
  if (userData === null) {
    await supabase
      .from(TABLE_NAME)
      .insert([{ user_id: user?.id, name: user?.user_metadata.full_name, is_admin: false, is_approved: false }])
      .select()
      .single()
  }
}
