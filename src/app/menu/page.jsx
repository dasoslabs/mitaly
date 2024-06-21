"use client"

import { useState } from "react"

const food = {
  pasta: [
    {
      name: "베이컨 토마토 파스터",
      subTitle: "Bacon Tomato Pasta",
      imgUrl: "",
      imgAlt: "",
    },
    {
      name: "로제맵제 파스타",
      subTitle: "Spicy Rose pasta",
      imgUrl: "",
      imgAlt: "",
    },
    {
      name: "감바스 파스타",
      subTitle: "Gambas Pasta",
      imgUrl: "",
      imgAlt: "",
    },
    {
      name: "베이컨 크림 파스타",
      subTitle: "Bacon Cream Pasta",
      imgUrl: "",
      imgAlt: "",
    },
  ],
  pizza: [],
  steak: [],
  rice: [],
  side: [],
  drink: [],
}

food.all = [
  ...food.pasta,
  ...food.pizza,
  ...food.steak,
  ...food.rice,
  ...food.side,
  ...food.drink,
]

const menu = [
  {
    name: "all",
    text: "전체메뉴",
  },
  {
    name: "pasta",
    text: "파스타",
  },
  {
    name: "pizza",
    text: "피자",
  },
  {
    name: "steak",
    text: "스테이크",
  },
  {
    name: "rice",
    text: "라이스",
  },
  {
    name: "side",
    text: "사이드",
  },
  {
    name: "drink",
    text: "드링크",
  },
]

export default function MenuPage() {
  const [menuTab, setMenuTab] = useState(menu[0].name)

  return (
    <section className="mt-16 lg:mt-24 py-10 lg:py-20 bg-white flex flex-col items-center justify-between space-y-6 text-center">
      <h2 className="font-extralight text-xl lg:text-5xl">미태리 메뉴</h2>
      <div className="font-normal lg:font-extralight text-sm lg:text-base flex flex-col lg:flex-row lg:space-x-1">
        <p>유명 호텔 셰프, 패밀리레스토랑 셰프 출신의</p>
        <p>전문가들과 함께 개발한 메뉴를 소개합니다.</p>
      </div>

      <div className="max-w-pc w-full m-auto">
        <ul className="pl-6 lg:pl-0 flex lg:justify-center lg:items-center overflow-x-auto lg:overflow-x-hidden scrollbar-hide">
          {menu.map(({ name, text }) => (
            <li key={name} className="w-2/12 flex-shrink-0 lg:flex-shrink lg:w-full">
              <button
                onClick={() => setMenuTab(name)}
                className={`w-full py-3 font-bold border-b-2 text-sm lg:text-base ${menuTab === name ? "text-primary border-primary" : "text-[#666666] lg:text-light-gray border-white font-normal lg:font-bold"}`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 lg:mt-10 px-6 lg:px-0">
          {[
            ...food[menuTab],
            ...food[menuTab],
            ...food[menuTab],
            ...food[menuTab],
          ].map(({ name, subTitle }, idx) => (
            <li key={name + idx}>
              <div className="bg-bg-gray aspect-video rounded-2xl"></div>
              <p className="text-sm lg:text-xl mt-4 mb-1 lg:mb-2">{name}</p>
              <p className="text-[13px] lg:text-base text-[#999]">{subTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
