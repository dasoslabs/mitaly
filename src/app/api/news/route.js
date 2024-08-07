import { NextResponse } from "next/server"
import { getAllNewsWithPagination } from "@/libs/db/news"

export async function GET(req) {
  const page = req.nextUrl.searchParams.get("page")
  const limit = req.nextUrl.searchParams.get("limit")

  try {
    const faqList = await getAllNewsWithPagination({ page, limit })
    return NextResponse.json(faqList, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
