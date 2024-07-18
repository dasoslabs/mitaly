"use server"

import createSupabase from "@/libs/supabase"
import AdminLogin from "@/components/admin/auth/AdminLogin"
import AdminPendingRegister from "@/components/admin/auth/AdminPendingRegister"

export default async function AdminLayout({ children }) {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user === null) {
    return <AdminLogin />
  }

  const { data: userData } = await supabase
    .from("users")
    .select("name, is_approved")
    .eq("user_id", user?.id)
    .single()
  
  if (!userData?.is_approved) {
    return <AdminPendingRegister userName={user.user_metadata.full_name} />
  }

  return children
}
