"use server"

import { getAllContactList } from "@/libs/db/associate"
import ContactList from "@/components/admin/associate/ContactList"

export default async function AdminFranchiseePage() {
  const list = await getAllContactList()

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">제휴문의</h2>
      </section>

      <ContactList list={list} />
    </>
  )
}
