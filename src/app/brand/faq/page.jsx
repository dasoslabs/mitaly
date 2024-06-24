"use client"

import { useState } from "react"

import BrandPageLayout from "@/components/layout/BrandPageLayout"
import SvgIcon from "@/components/common/SvgIcon"

import { menu } from "./data"

export default function FaqPage() {
  const [currentCategory, setCurrentCategory] = useState(menu[0].name)

  return (
    <BrandPageLayout>
      <div className="text-center mt-36 mb-16">
        <h2 className="font-extralight text-2xl lg:text-5xl mb-10">가맹FAQ</h2>
        <div className="relative w-[464px] m-auto">
          <input
            type="text"
            placeholder="궁금한 점을 검색해보세요."
            className="border-b border-black p-2 pr-10 w-full placeholder-[#999] outline-none"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <SvgIcon name="search" />
          </button>
        </div>
      </div>

      <div className="max-w-screen-lg m-auto">
        {/* 카테고리 탭 */}
        <ul className="flex py-5 border-b-2 border-black">
          {menu.map(({ name, text }, idx) => (
            <li key={name} className="text-[#999]">
              <button
                className={`${currentCategory === name ? "text-black font-bold" : ""}`}
                onClick={() => setCurrentCategory(name)}
              >
                {text}
              </button>
              {menu.length - 1 !== idx && (
                <span className="inline-block mx-4 text-light-gray">|</span>
              )}
            </li>
          ))}
        </ul>

        {/* 목록 */}
        <ul></ul>
      </div>
    </BrandPageLayout>
  )
}
