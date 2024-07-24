"use server"

import { getAllContactList } from "@/libs/db/associate"
import { getIsAdmin } from "@/libs/db/auth"
import ContactList from "@/components/admin/associate/ContactList"
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
        <h2 className="font-semibold text-2xl">제휴문의</h2>
      </section>

      <section>
        <ContactList list={list} />
      </section>
    </>
  )
}
