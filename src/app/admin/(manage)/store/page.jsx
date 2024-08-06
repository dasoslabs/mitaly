"use server"

import Link from "next/link"
import { getAllStoresForAdmin } from "@/libs/db/store"
import StoreList from "@/components/admin/store/StoreList"

export default async function AdminStorePage() {
  const stores = await getAllStoresForAdmin()

  return (
    <>
      <section>
        <div className="flex justify-between items-start">
          <h2 className="font-semibold text-2xl">매장관리</h2>
          <Link
            href="/admin/store/create"
            className="block bg-black text-white py-2 px-5"
          >
            신규 등록
          </Link>
        </div>
      </section>

      <StoreList list={stores} />
    </>
  )
}
