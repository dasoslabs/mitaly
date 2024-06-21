"use client"

import { useState } from "react"
import Image from "next/image"

import ComingSoon from "@/components/common/ComingSoon"
import SliderFull, { SliderFullCard } from "@/components/common/SliderFull"
import { menu, interior } from "./data"

export default function StorePage() {
  const [currentTab, setCurrentTab] = useState(menu[0].name)
  const [interiorTab, setInteriorTab] = useState(interior[0].name)
  const getCurrentTabUI = () => {
    switch (currentTab) {
      case "interior":
        return (
          <>
            <div className="max-w-pc m-auto flex flex-col lg:flex-row justify-between items-center lg:mt-20 lg:mb-10">
              <h2 className="text-xl lg:text-5xl font-extralight py-10 px-6">
                미태리 인테리어
              </h2>
              <ul className="flex mb-6 lg:mb-0 w-full text-center lg:w-auto">
                {interior.map(({ name, text }) => (
                  <li key={name} className="w-1/2 lg:w-auto">
                    <button
                      onClick={() => setInteriorTab(name)}
                      className={`text-sm lg:text-base py-2 px-6 font-bold rounded-full ${interiorTab === name ? "bg-primary text-black" : "bg-white text-[#999]"}`}
                    >
                      {text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <SliderFull width="w-full">
              {Array(17)
                .fill(0)
                .map((_, idx) => (
                  <SliderFullCard key={"image" + idx}>
                    <Image
                      width="1920"
                      height="1080"
                      src="/store/interior01.png"
                      alt="인테리어 이미지"
                    />
                  </SliderFullCard>
                ))}
            </SliderFull>
          </>
        )
      case "location":
        return (
          <ComingSoon />
          // <div className="flex justify-center">
          //   <div className="w-[560px]">
          //     <h2 className="text-5xl font-extralight">매장찾기</h2>
          //   </div>
          //   <div className="w-full">지도</div>
          // </div>
        )
    }
  }

  return (
    <section className="mt-16 lg:mt-24">
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
