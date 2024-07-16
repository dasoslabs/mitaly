"use server"

import AdminLogin from "@/components/admin/Login"
import createSupabase from "@/libs/supabase"

export default async function AdminLayout({ children }) {
  const supabase  = createSupabase()
  const { data: { user } } = await supabase.auth.getUser()

  return (
    user 
    ? children
    : (
      <AdminLogin>
        로그인이 필요합니다.
      </AdminLogin>
    )
  )
}
