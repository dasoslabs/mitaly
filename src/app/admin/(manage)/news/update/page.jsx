import Link from "next/link"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getCategories, getNewsDetailById, updateNews } from "@/libs/db/news"

import DynamicEditor from "@/components/admin/editor/DynamicEditor"
import Image from "next/image"

export default async function AdminNoticeCreatePage({ searchParams }) {
  const { id } = searchParams

  const categories = await getCategories()
  const newsDetail = await getNewsDetailById(id)

  const actionCreateNotice = async (data) => {
    "use server"
    const category_id = data.get("category")
    const title = data.get("title")
    const content = data.get("content")
    const image_file =
      data.get("image_file").name === "undefined"
        ? null
        : data.get("image_file")
    const files =
      data.getAll("files")[0].name === "undefined" ? null : data.getAll("files")

    const result = await updateNews({
      id,
      data: {
        category_id,
        title,
        content,
        image_file,
        files,
      },
    })

    if (!result) {
      console.log("오류 발생")
      return
    }
    revalidatePath("/admin/news")
    redirect("/admin/news")
  }

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">뉴스 수정</h2>
      </section>

      <section className="bg-white p-5">
        <form className="space-y-5" action={actionCreateNotice}>
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
                  defaultChecked={id === newsDetail.category_id}
                />
                {name}
              </label>
            ))}
          </div>
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
              defaultValue={newsDetail.title}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>이미지</label>
            {newsDetail.thumbnail_url && (
              <div className="relative w-80 h-52">
                <Image
                  src={newsDetail.thumbnail_url}
                  alt={newsDetail.thumbnail_name}
                  fill
                  className="object-fit"
                />
              </div>
            )}
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="file"
              name="image_file"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label>첨부파일</label>
            {newsDetail.files && (
              <ul>
                {newsDetail.files?.map(({ name }) => (
                  <li key={"첨부파일" + idx}>{name}</li>
                ))}
              </ul>
            )}
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              multiple
              type="file"
              name="files"
            />
          </div>
          <DynamicEditor name="content" defaultValue={newsDetail.content} />

          <div className="flex space-x-5 justify-end">
            <Link
              href="/admin/news"
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
