import { NextResponse } from "next/server"
import { getAllPostsWithPagination, createPost } from "@/libs/db/notice"

export async function GET(req) {
  const page = req.nextUrl.searchParams.get("page")
  const limit = req.nextUrl.searchParams.get("limit")

  try {
    const post = await getAllPostsWithPagination({ page, limit })
    return NextResponse.json(post, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
