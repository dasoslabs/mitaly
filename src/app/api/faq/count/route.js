import { NextResponse } from "next/server"
import { getFaqTotalCount } from "@/libs/db/faq"

export async function GET(req) {
  try {
    const count = await getFaqTotalCount()
    return NextResponse.json(count, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
