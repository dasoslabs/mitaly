"use server"

import Link from "next/link"
import { getAllFaq } from "@/libs/db/faq"
import FaqList from "@/components/admin/faq/FaqList"

export default async function AdminFaqPage() {
  const faqList = await getAllFaq()

  return (
    <>
      <section className="flex justify-between items-start">
        <h2 className="font-semibold text-2xl">FAQ</h2>
        <Link
          href="/admin/faq/create"
          className="block bg-black text-white py-2 px-5"
        >
          만들기
        </Link>
      </section>

      <FaqList list={faqList} />
    </>
  )
}
