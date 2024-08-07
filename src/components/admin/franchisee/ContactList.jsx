"use client"

import { useRouter } from "next/navigation"

import Pagination from "@/components/common/Pagination/AllPagination"

import { deleteContact } from "@/libs/db/franchisee"

export default function ContactList({ list = [] }) {
  return (
    <section className="bg-white p-5">
      <div className="flex justify-between items-center pb-5 font-bold text-center">
        <p className="w-2/12">창업희망지역</p>
        <p className="w-3/12">이름</p>
        <p className="w-3/12">연락처</p>
        <p className="w-3/12">접수일</p>
        <p className="w-1/12">관리</p>
      </div>
      <Pagination items={list} ListItem={ContactItem} />
    </section>
  )
}

function ContactItem({ id, name, contact, region, created_at }) {
  const router = useRouter()
  const handleDeleteContact = async () => {
    if (confirm("삭제하시겠습니까?")) {
      const result = await deleteContact(id)
      if (!result) {
        window.alert("오류 발생")
        return
      }
      router.refresh()
    }
  }

  return (
    <li className="text-sm lg:text-base flex justify-between py-5 text-center border-t border-[#D9D9D9]">
      <p className="w-2/12">{region}</p>
      <p className="w-3/12">{name}</p>
      <p className="w-3/12">{contact}</p>
      <p className="w-3/12">{created_at}</p>
      <button className="w-1/12" onClick={handleDeleteContact}>
        삭제
      </button>
    </li>
  )
}
