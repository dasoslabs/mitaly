"use server"

import { getAllContactList } from "@/libs/db/franchisee"
import { getIsAdmin } from "@/libs/db/auth"
import ContactList from "@/components/admin/franchisee/ContactList"
import { redirect } from "next/navigation"

export default async function AdminFranchiseePage() {
  const isAdmin = await getIsAdmin()

  if (!isAdmin) {
    redirect("/admin")
  }

  const list = await getAllContactList()

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">가맹문의</h2>
      </section>

      <section>
        <ContactList list={list} />
      </section>
    </>
  )
}
