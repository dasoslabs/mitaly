"use server"

import Link from "next/link"
import { getAllStores } from "@/libs/db/store"
import StoreList from "@/components/admin/store/StoreList"

export default async function AdminStorePage() {
  const stores = await getAllStores()

  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-2xl">매장관리</h2>
          <Link
            href="/admin/store/create"
            className="block bg-black text-white py-2 px-5"
          >
            신규 등록
          </Link>
        </div>
      </section>

      <section>
        <StoreList list={stores} />
      </section>
    </>
  )
}
