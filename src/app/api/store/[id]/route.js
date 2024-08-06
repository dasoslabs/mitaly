import { NextResponse } from "next/server"
import { getStoreDetailById } from "@/libs/db/store"

export async function GET(req, { params }) {
  const { id } = params

  try {
    const store = await getStoreDetailById(id)
    return NextResponse.json(store, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
