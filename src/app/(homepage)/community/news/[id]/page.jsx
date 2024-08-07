"use server"

import Link from "next/link"
import { getNewsDetailById } from "@/libs/db/news"
import HtmlParser from "@/components/common/HtmlParser"
import Image from "next/image"

export default async function NoticeDetailPage({ params }) {
  const { id } = params
  const news = await getNewsDetailById(id)

  return (
    <section className="space-y-6 lg:space-y-12 max-w-screen-lg m-auto py-10 lg:py-36">
      <div className="px-6 lg:px-0">
        <div className="space-y-4 pb-6 border-b border-[#D9D9D9] ">
          <h2 className="font-extralight text-2xl lg:text-[40px]">
            {news.title}
          </h2>
          <div className="flex items-center space-x-3">
            <p className="font-bold text-[13px] lg:text-base">
              {news.category_name}
            </p>
            <p className="text-[#D9D9D9]">|</p>
            <p className="lg:text-[#666666] text-[13px] lg:text-base">
              {news.created_at}
            </p>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full lg:h-[520px]">
        <Image
          src={news.thumbnail_url}
          alt={news.thumbnail_name}
          fill
          className="object-cover"
        />
      </div>

      <div className="px-6 lg:px-0">
        <HtmlParser>{news.content}</HtmlParser>
      </div>

      <div className="px-6 lg:px-0">
        <Link
          href="./"
          className="inline-block w-full lg:w-auto bg-white border border-black py-3 px-6 lg:py-1 lg:px-4 rounded-full border border-light-gray text-sm lg:text-base font-bold lg:font-normal text-center"
        >
          목록으로 돌아가기
        </Link>
      </div>
    </section>
  )
}
