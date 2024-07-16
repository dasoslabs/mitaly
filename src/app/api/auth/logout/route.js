import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import createSupabase from "@/libs/supabase"

export async function POST(req) {
  const supabase = createSupabase()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (user) {
    await supabase.auth.signOut()
  }

  revalidatePath("/", "layout")
  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  })
}
