"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import axiosInstance from "@/libs/axios"
import Pagination from "@/components/common/Pagination/AllPagination"
import Modal from "@/components/common/Modal"

export default function ContactList({ list = [], isAdmin = false }) {
  return (
    <section className="bg-white p-5">
      <div className="flex justify-between items-center pb-5 font-bold text-center">
        <p className="w-2/12">문의유형</p>
        <p className="w-1/12">이름</p>
        <p className="w-2/12">연락처</p>
        <p className="w-4/12">제목</p>
        <p className="w-2/12">접수일</p>
        <p className="w-1/12">관리</p>
      </div>
      <Pagination items={list} ListItem={ContactItem} />
    </section>
  )
}

function ContactItem({ id, name, contact, type, title, content, created_at }) {
  const router = useRouter()

  const handleDeleteContact = async (e) => {
    e.stopPropagation()

    if (confirm("삭제하시겠습니까?")) {
      const {
        data: { success, message },
      } = await axiosInstance.delete(`/api/associate/${id}`)
      if (!success) {
        window.alert(message)
        return
      }
      router.refresh()
    }
  }

  const [modalOpen, setModalOpen] = useState(false)
  const closeModal = (e) => {
    e.stopPropagation()
    setModalOpen(false)
  }

  return (
    <li onClick={() => setModalOpen(true)}>
      <div className="cursor-pointer text-sm lg:text-base flex justify-between py-5 text-center border-t border-[#D9D9D9]">
        <p className="w-2/12">{type}</p>
        <p className="w-1/12">{name}</p>
        <p className="w-2/12">{contact}</p>
        <p className="w-4/12">{title}</p>
        <p className="w-2/12">{created_at}</p>
        <button className="w-1/12" onClick={handleDeleteContact}>
          삭제
        </button>
      </div>

      <Modal open={modalOpen} className="text-start rounded-lg">
        <div className="border-b border-stone-200 py-5">
          <h3 className="font-semibold text-xl px-5 text-stone-500">
            <span className="text-black">{name}</span>님의 제휴문의
          </h3>
        </div>

        <div className="space-y-5 p-5">
          <div className="flex">
            <p className="w-28 flex-none font-semibold">문의유형</p>
            <p>{type}</p>
          </div>

          <div className="flex">
            <p className="w-28 flex-none font-semibold">연락처</p>
            <p>{contact}</p>
          </div>

          <div className="flex">
            <p className="w-28 flex-none font-semibold">접수일</p>
            <p>{created_at}</p>
          </div>

          <div className="flex">
            <p className="w-28 flex-none font-semibold">제목</p>
            <p>{title}</p>
          </div>

          <div className="flex">
            <p className="w-28 flex-none font-semibold">내용</p>
            <p>{content}</p>
          </div>
        </div>

        <div className="border-t border-stone-200 py-3 text-end">
          <button
            onClick={closeModal}
            className="bg-black text-white py-2 px-5 mr-5"
          >
            닫기
          </button>
        </div>
      </Modal>
    </li>
  )
}
