import { NextResponse } from "next/server"
import { createPost } from "@/libs/db/notice"

export async function POST(req) {
  const { title, content = null } = await req.json()
  try {
    const post = await createPost({ title, content })

    return NextResponse.json(post, { status: 201 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
