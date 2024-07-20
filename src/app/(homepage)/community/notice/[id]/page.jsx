"use server"

import Link from "next/link"
import { headers } from "next/headers"
import { getPostDetailById } from "@/libs/db/notice"
import HtmlParser from "@/components/common/HtmlParser"

export default async function NoticeDetailPage() {
  const headersList = headers()
  const headerPathname = headersList.get("x-pathname") || ""
  const id = headerPathname.split("/community/notice/")[1]
  // const post = await getPostDetailById(id)
  console.log(id)

  return null

  // return (
  //   <section className="space-y-12 max-w-screen-lg m-auto my-10 lg:my-36">
  //     <div className="space-y-4 pb-6 border-b border-[#D9D9D9]">
  //       <h2 className="font-extralight text-2xl lg:text-[40px]">
  //         {post.title}
  //       </h2>
  //       <p className="text-[#666666]">{post.created_at}</p>
  //     </div>
  //     <div>
  //       <HtmlParser>{post.content}</HtmlParser>
  //     </div>
  //     <Link
  //       href="./"
  //       className="inline-block bg-white border border-black py-1 px-4 rounded-full border border-light-gray"
  //     >
  //       목록으로 돌아가기
  //     </Link>
  //   </section>
  // )
}
