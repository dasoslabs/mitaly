import { NextResponse } from "next/server"
import { getAllStores } from "@/libs/db/store"

export async function GET() {
  try {
    const stores = await getAllStores()
    return NextResponse.json(stores, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
