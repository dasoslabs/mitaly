import Link from "next/link"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { createPost } from "@/libs/db/notice"

import DynamicEditor from "@/components/admin/editor/DynamicEditor"

export default function AdminNoticeCreatePage() {
  const actionCreateNotice = async (data) => {
    "use server"
    const title = data.get("title")
    const content = data.get("content")
    const result = await createPost({ title, content })

    if (!result) {
      console.log("오류 발생")
      return
    }
    revalidatePath("/admin/notice")
    redirect("/admin/notice")
  }

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">새로운 공지사항</h2>
      </section>

      <section className="bg-white p-5">
        <form className="space-y-5" action={actionCreateNotice}>
          <div className="flex flex-col space-y-2">
            <label>
              제목
              <span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              required
              name="title"
            />
          </div>
          <DynamicEditor name="content" />

          <div className="flex space-x-5 justify-end">
            <Link
              href="/admin/notice"
              className="inline-block border border-stone-300 bg-white py-2 px-5"
            >
              취소
            </Link>
            <button className="bg-black border border-black text-white py-2 px-5">
              저장
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
