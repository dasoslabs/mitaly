"use client"

import Link from "next/link"

import Pagination from "@/components/common/Pagination/AllPagination"
import { useRouter } from "next/navigation"
import { deleteStore } from "@/libs/db/store"

export default function StoreList({ list = [] }) {
  return (
    <section className="bg-white p-5">
      <div className="flex justify-between items-center pb-5 font-bold text-center">
        <p className="w-2/12">ID</p>
        <p className="w-8/12">매장명</p>
        <p className="w-2/12">등록일</p>
        <p className="w-2/12">관리</p>
      </div>
      <Pagination
        items={list}
        ListItem={({ ...props }) => <StoreItem {...props} />}
      />
    </section>
  )
}

function StoreItem({ id, name, created_at }) {
  const router = useRouter()
  const handleDeleteStore = async () => {
    if (confirm("삭제하시겠습니까?")) {
      const result = await deleteStore(id)
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
        <p className="w-10/12 text-start mb-1 lg:mb-0">{name}</p>
        <p className="w-2/12 text-[#999] lg:text-black">{created_at}</p>
      </div>
      <div className="w-2/12 flex justify-center space-x-2">
        <Link href={{ pathname: "/admin/store/update", query: { id } }}>
          수정
        </Link>
        <button onClick={handleDeleteStore}>삭제</button>
      </div>
    </li>
  )
}
