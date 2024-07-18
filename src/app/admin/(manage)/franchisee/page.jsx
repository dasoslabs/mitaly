"use server"

// import { getAllStores } from "@/libs/db/store"
import StoreList from "@/components/admin/store/StoreList"

export default async function AdminFranchiseePage() {
  // const stores = await getAllStores()

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">가맹문의</h2>
      </section>

      <section>
        {/* <StoreList list={stores} /> */}
      </section>
    </>
  )
}
