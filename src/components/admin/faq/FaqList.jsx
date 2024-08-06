"use client"

import Link from "next/link"

import Pagination from "@/components/common/Pagination/AllPagination"
import { useRouter } from "next/navigation"
import { deleteFaq } from "@/libs/db/faq"

export default function FaqList({ list = [] }) {
  return (
    <section className="bg-white p-5">
      <div className="flex justify-between items-center pb-5 font-bold text-center">
        <p className="w-2/12">ID</p>
        <p className="w-8/12">질문</p>
        <p className="w-2/12">분류</p>
        <p className="w-2/12">관리</p>
      </div>
      <Pagination
        items={list}
        ListItem={({ ...props }) => <FaqItem {...props} />}
      />
    </section>
  )
}

function FaqItem({ id, question, category_name }) {
  const router = useRouter()
  const handleDeleteNotice = async () => {
    if (confirm("삭제하시겠습니까?")) {
      const result = await deleteFaq(id)
      if (!result) {
        window.alert("오류 발생")
        return
      }
      router.refresh()
    }
  }

  return (
    <li className="text-sm lg:text-base flex justify-between py-5 text-center border-t border-[#D9D9D9]">
      <p className="w-2/12">{id}</p>
      <div className="w-8/12 flex flex-row  justify-between">
        <p className="w-10/12 text-start mb-1 lg:mb-0">{question}</p>
        <p className="w-2/12 text-[#999] lg:text-black">{category_name}</p>
      </div>
      <div className="w-2/12 flex justify-center space-x-2">
        <Link href={{ pathname: "/admin/faq/update", query: { id } }}>
          수정
        </Link>
        <button onClick={handleDeleteNotice}>삭제</button>
      </div>
    </li>
  )
}
