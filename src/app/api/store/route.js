import { NextResponse } from "next/server"
import { createStore } from "@/libs/db/store"

export async function POST(req) {
  const body = await req.json()

  try {
    const store = await createStore(body)

    return NextResponse.json(store, { status: 201 })
  } catch (e) {
    return NextResponse.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}
