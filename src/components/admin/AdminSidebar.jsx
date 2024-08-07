"use server"

import { headers } from "next/headers"
import { getIsAdmin } from "@/libs/db/auth"

import MenuItem from "./MenuItem"

const menu = [
  {
    name: "공지사항",
    href: "/admin/notice",
    isOnlyAdminPage: false,
  },
  {
    name: "매장관리",
    href: "/admin/store",
    isOnlyAdminPage: false,
  },
  {
    name: "가맹문의",
    href: "/admin/franchisee",
    isOnlyAdminPage: true,
  },
  {
    name: "제휴문의",
    href: "/admin/associate",
    isOnlyAdminPage: true,
  },
  {
    name: "FAQ",
    href: "/admin/faq",
    isOnlyAdminPage: false,
  },
  {
    name: "뉴스룸",
    href: "/admin/news",
    isOnlyAdminPage: false,
  },
]

export default async function AdminSidebar() {
  const isAdmin = await getIsAdmin()
  const headersList = headers()
  const headerPathname = headersList.get("x-pathname") || ""

  const filteredMenuByRole = menu.filter(
    (item) => isAdmin || !item.isOnlyAdminPage,
  )

  return (
    <nav className="w-52 min-h-[calc(100vh-80px)] border-r border-light-gray">
      <ul>
        {filteredMenuByRole.map((item, idx) => (
          <MenuItem
            key={item.name + idx}
            isCurrent={headerPathname.includes(item.href)}
            {...item}
          />
        ))}
      </ul>
    </nav>
  )
}
