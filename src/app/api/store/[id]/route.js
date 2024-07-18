import { NextResponse } from "next/server"
import { getStoreDetailById, updateStore, deleteStore } from "@/libs/db/store"

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

export async function PUT(req, { params }) {
  const { id } = params
  const formData = await req.formData()

  try {
    const isSuccess = await updateStore({ id, formData })

    if (!isSuccess) {
      return NextResponse.json(
        { success: false, message: "서버 오류가 발생했습니다." },
        { status: 500 },
      )
    }
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (e) {
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다." },
      { status: 500 },
    )
  }
}

export async function DELETE(req, { params }) {
  const { id } = params

  try {
    const isSuccess = await deleteStore(id)

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
