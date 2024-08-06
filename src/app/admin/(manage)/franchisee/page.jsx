"use server"

import { getAllContactList } from "@/libs/db/franchisee"
import ContactList from "@/components/admin/franchisee/ContactList"

export default async function AdminFranchiseePage() {
  const list = await getAllContactList()

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">가맹문의</h2>
      </section>

      <ContactList list={list} />
    </>
  )
}
