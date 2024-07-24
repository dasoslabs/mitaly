import { NextResponse } from "next/server"
import { deleteContact } from "@/libs/db/associate"

export async function DELETE(req, { params }) {
  const { id } = params

  try {
    const isSuccess = await deleteContact(id)

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
