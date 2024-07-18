"use server"
import Link from "next/link"
import { getIsAdmin } from "@/libs/db/auth"
import { getAllPosts } from "@/libs/db/notice"
import NoticeList from "@/components/admin/notice/NoticeList"

export default async function AdminNoticePage() {
  const posts = await getAllPosts()
  const isAdmin = await getIsAdmin()

  return (
    <>
      <div className="flex justify-between items-start">
        <h2 className="font-semibold text-2xl">공지사항</h2>
        {
          isAdmin && (
            <Link
              href="/admin/notice/create"
              className="block bg-black text-white py-2 px-5"
            >
              글쓰기
            </Link>
          )
        }
      </div>
      <NoticeList list={posts} isAdmin={isAdmin} />
    </>
  )
}
