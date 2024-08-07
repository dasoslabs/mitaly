"use server"

import Link from "next/link"
import NewsList from "@/components/admin/news/NewsList"
import { getAllNewsForAdmin } from "@/libs/db/news"

export default async function AdminNewsPage() {
  const news = await getAllNewsForAdmin()
  return (
    <>
      <section className="flex justify-between items-start">
        <h2 className="font-semibold text-2xl">뉴스룸</h2>
        <Link
          href="/admin/news/create"
          className="block bg-black text-white py-2 px-5"
        >
          만들기
        </Link>
      </section>

      <NewsList list={news} />
    </>
  )
}
