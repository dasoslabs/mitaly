"use server"

import Link from "next/link"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getCategories, getFaqDetailById, updateFaq } from "@/libs/db/faq"

export default async function AdminNoticeUpdatePage({ searchParams }) {
  const { id } = searchParams
  const categories = await getCategories()
  const faqDetail = await getFaqDetailById(id)

  const handleUpdateFaq = async (data) => {
    "use server"
    const question = data.get("question")
    const answer = data.get("answer")
    const category_id = data.get("category")

    const result = await updateFaq({ id, category_id, question, answer })
    if (!result) {
      console.log("오류 발생")
      return
    }
    revalidatePath("/admin/faq")
    redirect("/admin/faq")
  }

  return (
    <>
      <h2 className="font-semibold text-2xl">FAQ 수정</h2>

      <section className="bg-white p-5">
        <form className="space-y-5" action={handleUpdateFaq}>
          <div>
            <p>
              분류
              <span className="text-error ml-1">*</span>
            </p>
            {categories.map(({ id, name }) => (
              <label key={"category" + id} className="mr-5">
                <input
                  type="radio"
                  name="category"
                  value={id}
                  className="mr-1"
                  required
                  defaultChecked={id === faqDetail.category_id}
                />
                {name}
              </label>
            ))}
          </div>
          <div className="flex flex-col space-y-2">
            <label>
              질문
              <span className="text-error ml-1">*</span>
            </label>
            <input
              name="question"
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              required
              defaultValue={faqDetail.question}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>
              답변
              <span className="text-error ml-1">*</span>
            </label>
            <input
              name="answer"
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              required
              defaultValue={faqDetail.answer}
            />
          </div>

          <div className="flex space-x-5 justify-end">
            <Link
              href="/admin/faq"
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
