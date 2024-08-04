"use client"

import Link from "next/link"
import { useEffect } from "react"

import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"

import useNoticeStore from "@/store/notice"

export default function NoticePage() {
  const {
    currentPage,
    setCurrentPage,
    posts,
    totalPages,
    loading,
    fetchTotalPages,
    fetchPagePosts,
  } = useNoticeStore((state) => state)

  useEffect(() => {
    fetchTotalPages()
  }, [])

  useEffect(() => {
    fetchPagePosts(currentPage)
  }, [currentPage])

  return (
    <CommunityPageLayout>
      <div className="max-w-screen-lg m-auto my-10 lg:my-36 px-6 lg:px-0">
        <h2 className="text-center font-extralight text-2xl lg:text-5xl mb-10">
          공지사항
        </h2>

        <div className="hidden lg:flex justify-between items-center py-6 border-y-2 border-black font-bold text-center">
          <p className="w-2/12">번호</p>
          <p className="w-8/12">제목</p>
          <p className="w-2/12">작성일</p>
        </div>
        <div className="lg:hidden w-full h-px bg-black" />

        {loading ? (
          <NoticeSkelton />
        ) : (
          <Pagination
            totalPages={totalPages}
            items={posts[currentPage]}
            ListItem={NoticeItem}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </CommunityPageLayout>
  )
}

function NoticeItem({ id, title, created_at }) {
  return (
    <li>
      <Link
        href={`/community/notice/${id}`}
        className="block text-sm lg:text-base flex justify-between py-4 lg:py-6 text-center border-t border-[#D9D9D9]"
      >
        <p className="w-2/12">{id}</p>
        <div className="w-10/12 flex flex-col lg:flex-row lg:justify-between">
          <p className="w-10/12 text-start mb-1 lg:mb-0">{title}</p>
          <p className="w-2/12 text-[#999] lg:text-black">{created_at}</p>
        </div>
      </Link>
    </li>
  )
}

function NoticeSkelton() {
  const { PAGE_SIZE } = useNoticeStore((state) => state)
  return (
    <ul>
      {Array(PAGE_SIZE)
        .fill(0)
        .map((_, idx) => (
          <li
            key={"notice-skelton" + idx}
            className="py-4 lg:py-6 border-t border-[#D9D9D9]"
          >
            <div className="animate-pulse flex justify-between lg:space-x-10">
              <p className="w-2/12 h-5 bg-stone-200 rounded-full" />
              <div className="w-10/12 flex flex-col lg:flex-row lg:justify-between lg:space-x-10">
                <p className="w-10/12 text-start mb-1 lg:mb-0 h-5 bg-stone-200 rounded-full" />
                <p className="w-2/12 text-[#999] lg:text-black h-5 bg-stone-200 rounded-full" />
              </div>
            </div>
          </li>
        ))}
    </ul>
  )
}
