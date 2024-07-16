"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function MenuItem({ href, name, isCurrent }) {
  const router = useRouter()

  return (
    <li>
      <button onClick={() => router.refresh(href)}>
        <Link
          href={href}
          className={`block p-5 pl-0 ${isCurrent ? "font-bold text-primary" : ""}`}
        >
          {name}
        </Link>
      </button>
    </li>
  )
}
