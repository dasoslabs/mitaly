"use client"

import { useState } from "react"
import Image from "next/image"
import { menu, foodList } from "./data"

export default function MenuPage() {
  const [currentMenu, setCurrentMenu] = useState(menu[0].name)
  const filteredFoodList =
    currentMenu === "all"
      ? foodList
      : foodList.filter((item) => item.foodType === currentMenu)

  return (
    <section className="mt-16 lg:mt-24 py-10 lg:py-20 bg-white flex flex-col items-center justify-between space-y-6 text-center">
      <h2 className="font-extralight text-2xl lg:text-5xl">미태리 메뉴</h2>
      <div className="font-normal lg:font-extralight text-sm lg:text-base flex flex-col lg:flex-row lg:space-x-1">
        <p>유명 호텔 셰프, 패밀리레스토랑 셰프 출신의</p>
        <p>전문가들과 함께 개발한 메뉴를 소개합니다.</p>
      </div>

      <div className="max-w-pc w-full m-auto">

        {/* 메뉴 탭 */}
        <ul className="pl-6 lg:pl-0 flex lg:justify-center lg:items-center overflow-x-auto lg:overflow-x-hidden scrollbar-hide">
          {menu.map(({ name, text }) => (
            <li
              key={name}
              className="w-2/12 flex-shrink-0 lg:flex-shrink lg:w-full"
            >
              <button
                onClick={() => setCurrentMenu(name)}
                className={`w-full py-3 font-bold border-b-2 text-sm lg:text-base ${currentMenu === name ? "text-primary border-primary" : "text-[#666666] lg:text-light-gray border-white font-normal lg:font-bold"}`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>

        {/* 메뉴 아이템 */}
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-10 px-6 lg:px-0">
          {filteredFoodList.map(({ name, subTitle, imgUrl }, idx) => (
            <li key={name + idx}>
              <div className="relative bg-bg-gray aspect-video rounded-2xl">
                <Image
                  fill
                  src={imgUrl}
                  alt={`${name} 이미지`}
                  sizes="100%"
                  className="w-full h-auto"
                />
              </div>

              <p className="text-sm lg:text-xl mt-4 mb-1 lg:mb-2">{name}</p>
              <p className="text-[13px] lg:text-base text-[#999]">{subTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
