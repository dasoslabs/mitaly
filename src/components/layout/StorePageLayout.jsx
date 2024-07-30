"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { menu } from "@/app/(homepage)/store/data"

export default function StorePageLayout({ children }) {
  const pathname = usePathname()

  return (
    <>
      <ul className="h-14 bg-bg-gray flex justify-center items-center space-x-16">
        {menu.map(({ href, text }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm ${pathname === href ? "font-bold text-black" : "font-normal text-grey"}`}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
      {children}
    </>
  )
}
