"use server"

import Link from "next/link"
import { getPostDetailById } from "@/libs/db/notice"
import HtmlParser from "@/components/common/HtmlParser"

export default async function NoticeDetailPage({ params }) {
  const { id } = params
  const post = await getPostDetailById(id)

  return (
    <section className="space-y-6 lg:space-y-12 max-w-screen-lg m-auto py-10 px-6 lg:px-0 lg:py-36">
      <div className="space-y-4 pb-6 border-b border-[#D9D9D9]">
        <h2 className="font-extralight text-2xl lg:text-[40px]">
          {post.title}
        </h2>
        <p className="lg:text-[#666666] text-[13px] lg:text-base">
          {post.created_at}
        </p>
      </div>
      <div>
        <HtmlParser>{post.content}</HtmlParser>
      </div>
      <Link
        href="./"
        className="inline-block w-full lg:w-auto bg-white border border-black py-3 px-6 lg:py-1 lg:px-4 rounded-full border border-light-gray text-sm lg:text-base font-bold lg:font-normal text-center"
      >
        목록으로 돌아가기
      </Link>
    </section>
  )
}
