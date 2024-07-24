import { NextResponse } from "next/server"
import updateSession from "./libs/supabase/middleware"

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return updateSession(request)
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
