import { NextResponse } from "next/server"
import { getPostDetailById } from "@/libs/db/notice"

export async function GET(req, { params }) {
  const { id } = params

  try {
    const post = await getPostDetailById(id)
    return NextResponse.json(post, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
