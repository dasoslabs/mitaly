import { headers } from "next/headers"

import MenuItem from "./MenuItem"

const menu = [
  {
    name: "공지사항",
    href: "/admin/notice",
  },
  {
    name: "매장관리",
    href: "/admin/store",
  },
  {
    name: "가맹상담",
    href: "/admin/franchisee",
  },
]

export default function AdminSidebar() {
  const headersList = headers()
  const headerPathname = headersList.get("x-pathname") || ""

  return (
    <nav className="w-52 min-h-[calc(100vh-80px)]">
      <ul>
        {menu.map((item, idx) => (
          <MenuItem
            key={item.name + idx}
            isCurrent={headerPathname === item.href}
            {...item}
          />
        ))}
      </ul>
    </nav>
  )
}
