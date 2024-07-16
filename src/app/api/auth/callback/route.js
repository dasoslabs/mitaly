import { NextResponse } from "next/server"
// The client you created from the Server-Side Auth instructions
import createSupabase from "@/libs/server/supbase"

export async function GET(request) {
  const supabase = createSupabase()
  const { searchParams, origin } = new URL(request.url)
  const code = searchParams.get("code")
  // if "next" is in param, use it as the redirect URL
  const next = searchParams.get("next") ?? "/"

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code)
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`)
    }
  }

  // return the user to an error page with instructions
  return NextResponse.redirect(`${origin}/server/auth/error`)
}
