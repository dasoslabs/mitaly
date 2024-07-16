"use client"

import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"

const mockData = Array(100)
  .fill(0)
  .map((_, idx) => ({
    idx: idx + 1,
    title: "미태리에 새로운 소식을 알려드립니다.",
    createdAt: "2024.01.01",
  }))
  .reverse()

export default function NoticePage() {
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

        <Pagination items={mockData} ListItem={NoticeItem} />
      </div>
    </CommunityPageLayout>
  )
}

function NoticeItem({ idx, title, createdAt }) {
  return (
    <li className="text-sm lg:text-base flex justify-between py-4 lg:py-6 text-center border-t border-[#D9D9D9]">
      <p className="w-2/12">{idx}</p>
      <div className="w-10/12 flex flex-col lg:flex-row lg:justify-between">
        <p className="w-10/12 text-start mb-1 lg:mb-0">{title}</p>
        <p className="w-2/12 text-[#999] lg:text-black">{createdAt}</p>
      </div>
    </li>
  )
}
