import { NextResponse } from "next/server"
import { getNewsTotalCount } from "@/libs/db/news"

export async function GET(req) {
  try {
    const count = await getNewsTotalCount()
    return NextResponse.json(count, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
