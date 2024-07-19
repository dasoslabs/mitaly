"use client"

import { useEffect, useState } from "react"
import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"
import axiosInstance from "@/libs/axios"

export default function NoticePage() {
  const [page, setPage] = useState(1)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axiosInstance.get(`/api/notice?page=${page}&limit=${10}`)
        setPosts(data)
      } catch (e) {
        console.log("--Axios error--")
        console.log(e)
      }
    }

    fetchAllPosts()
  }, [page])

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

        <Pagination items={posts} ListItem={NoticeItem} />
      </div>
    </CommunityPageLayout>
  )
}

function NoticeItem({ id, title, created_at }) {
  return (
    <li className="text-sm lg:text-base flex justify-between py-4 lg:py-6 text-center border-t border-[#D9D9D9]">
      <p className="w-2/12">{id}</p>
      <div className="w-10/12 flex flex-col lg:flex-row lg:justify-between">
        <p className="w-10/12 text-start mb-1 lg:mb-0">{title}</p>
        <p className="w-2/12 text-[#999] lg:text-black">{created_at}</p>
      </div>
    </li>
  )
}
