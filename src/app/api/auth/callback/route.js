import { NextResponse } from "next/server"
import createSupabase from "@/libs/supabase"
import { createUser } from "@/libs/db/auth"

export async function GET(request) {
  const supabase = createSupabase()
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  const next = searchParams.get("next") ?? "/admin"

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    createUser()

    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  return NextResponse.redirect(`${origin}/server/auth/error`)
}
