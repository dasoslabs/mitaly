"use client"

import { useState } from "react"
import Link from "next/link"
import SvgIcon from "./SvgIcon"

export default function Dropdown({ text, items, href, onClick }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative font-bold">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center"
      >
        <p>{text}</p>
        <div>
          <SvgIcon name={isOpen ? "minus" : "plus"} />
        </div>
      </button>

      {isOpen && (
        <ul className="">
          {items?.map(({ name, childHref }, idx) => (
            <li key={`${name}-${idx}`} className="font-normal text-sm mt-4">
              <Link onClick={onClick} href={`${href}/${childHref}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
