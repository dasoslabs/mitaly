"use server"
import Link from "next/link"
import { getAllPosts } from "@/libs/db/notice"
import NoticeList from "@/components/admin/notice/NoticeList"

export default async function AdminNoticePage() {
  const posts = await getAllPosts()

  return (
    <div className="bg-admin-bg w-full border-r border-light-gray p-5 space-y-5">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-2xl">공지사항</h2>
        <Link
          href="/admin/notice/create"
          className="block bg-black text-white py-2 px-5"
        >
          글쓰기
        </Link>
      </div>
      <NoticeList list={posts} />
    </div>
  )
}
