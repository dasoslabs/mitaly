"use server"

import createSupabase from "@/libs/supabase"
import { redirect } from "next/navigation"

export const loginWithGoogle = async () => {
  const supabase = createSupabase()

  const { data } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.DOMAIN}/api/auth/callback`,
    },
  })

  if (data.url) {
    redirect(data.url)
  }
}
