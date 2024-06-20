"use client"

import { useState } from "react"
import Image from "next/image"

import { menu } from "./data"

import ProfitTab from "./tab/profit"
import SuccessTab from "./tab/success"

export default function BrandPage() {
  const [currentTab, setCurrentTab] = useState(menu[0].name)

  const getCurrentTabUI = () => {
    switch (currentTab) {
      case "profit":
        return <ProfitTab />
      case "success":
        return <SuccessTab />
    }
  }

  return (
    <section className="mt-24">
      {/* 배너 */}
      <div className="relative">
        <Image
          width="1920"
          height="400"
          src="/brand/banner01.png"
          alt="배너 이미지"
          quality={100}
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-10">
          <h2 className="text-5xl font-extralight">미태리 경쟁력</h2>
          <p className="text-lg">
            4년 이상의 오랜 연구 개발로 완성한 체계적인 프랜차이즈 시스템
          </p>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="border-y border-light-gray">
        <ul className="max-w-pc m-auto flex justify-center items-center">
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
