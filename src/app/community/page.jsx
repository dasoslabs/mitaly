"use client"

import { useState } from "react"

import ContactTab from "./tab/contact"
import ComingSoon from "@/components/common/ComingSoon"
import { menu } from "./data"

export default function StorePage() {
  const [currentTab, setCurrentTab] = useState(menu[0].name)

  const getCurrentTabUI = () => {
    switch (currentTab) {
      case "notice":
        return <ComingSoon />
      case "news":
        return <ComingSoon />
      case "contact":
        return <ContactTab />
    }
  }

  return (
    <section className="mt-24">
      {/* 텝 메뉴 */}
      <ul className="h-14 bg-bg-gray flex justify-center items-center space-x-16">
        {menu.map(({ name, text }) => (
          <li key={name}>
            <button
              onClick={() => setCurrentTab(name)}
              className={`text-sm ${currentTab === name ? "font-bold text-black" : "font-normal text-[#999999]"}`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>

      {getCurrentTabUI()}
    </section>
  )
}
