"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { menu } from "@/app/brand/data"

export default function BrandPageLayout({ children }) {
  const pathname = usePathname()

  return (
    <>
      <div className="border-y border-light-gray">
        <ul className="max-w-pc m-auto flex justify-center items-center text-xs lg:text-base">
          {menu.map(({ href, text }, idx) => (
            <li key={href} className="w-full">
              <Link
                href={href}
                className={`block text-center w-full h-full py-3 border-l border-light-gray ${pathname === href ? "text-black bg-primary font-bold" : "text-[#999] bg-white font-normal"} ${menu.length - 1 === idx && "border-r"}`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {children}
    </>
  )
}
