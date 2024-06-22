"use client"

import { useState } from "react"
import Image from "next/image"

import { menu } from "./data"

import ProfitTab from "./tab/profit"
import SuccessTab from "./tab/success"
import SupportTab from "./tab/support"
import ComingSoon from "@/components/common/ComingSoon"
import ContactTab from "./tab/contact"

export default function BrandPage() {
  const [currentTab, setCurrentTab] = useState(menu[0].name)

  const getCurrentTabUI = () => {
    switch (currentTab) {
      case "profit":
        return <ProfitTab />
      case "success":
        return <SuccessTab />
      case "support":
        return <SupportTab />
      case "faq":
        return <ComingSoon />
      case "contact":
        return <ContactTab />
    }
  }

  return (
    <section className="mt-16 lg:mt-24">
      {/* 배너 */}
      <div className="relative">
        <div className="w-full h-[174px] lg:h-[400px] bg-[url('/brand/banner.png')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-4 lg:space-y-10">
          <h2 className="text-2xl lg:text-5xl font-extralight">
            미태리 경쟁력
          </h2>
          <div className="text-center text-sm lg:text-lg flex flex-col lg:flex-row lg:space-x-1">
            <p>4년 이상의 오랜 연구 개발로 완성한</p>
            <p>체계적인 프랜차이즈 시스템</p>
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="border-y border-light-gray">
        <ul className="max-w-pc m-auto flex justify-center items-center text-xs lg:text-base">
          {menu.map(({ name, text }, idx) => (
            <li key={name} className="w-full">
              <button
                onClick={() => setCurrentTab(name)}
                className={`w-full h-full py-3 border-l border-light-gray ${currentTab === name ? "text-black bg-primary font-bold" : "text-[#999] bg-white font-normal"} ${menu.length - 1 === idx && "border-r"}`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 메인 */}
      {getCurrentTabUI()}
    </section>
  )
}
