import { NextResponse } from "next/server"
import { createContact } from "@/libs/db/franchisee"

export async function POST(req) {
  const body = await req.json()

  try {
    const isSuccess = await createContact(body)

    if (!isSuccess) {
      return NextResponse.json(
        { success: false, message: "서버 오류가 발생했습니다." },
        { status: 500 },
      )
    }
    return NextResponse.json({ success: true }, { status: 201 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
