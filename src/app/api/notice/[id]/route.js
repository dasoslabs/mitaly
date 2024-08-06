import { NextResponse } from "next/server"
import { getPostDetailById, updatePost, deletePost } from "@/libs/db/notice"

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

export async function PUT(req, { params }) {
  const { id } = params
  const { title, content = null } = await req.json()

  try {
    const isSuccess = await updatePost({ id, title, content })

    if (!isSuccess) {
      return NextResponse.json(
        { success: false, message: "서버 오류가 발생했습니다." },
        { status: 500 },
      )
    }
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
