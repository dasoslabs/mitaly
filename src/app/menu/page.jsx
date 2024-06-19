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
    <section className="mt-24 py-20 bg-white flex flex-col items-center justify-between space-y-6 text-center">
      <h2 className="font-extralight text-5xl">미태리 메뉴</h2>
      <p className="font-extralight">
        유명 호텔 셰프, 패밀리레스토랑 셰프 출신의 전문가들과 함께 개발한 메뉴를
        소개합니다.
      </p>

      <div className="max-w-pc w-full m-auto">
        <ul className="flex justify-center items-center">
          {menu.map(({ name, text }) => (
            <li key={name} className="w-full">
              <button
                onClick={() => setMenuTab(name)}
                className={`w-full h-full py-3 font-bold border-b-2 ${menuTab === name ? "text-primary border-primary" : "text-light-gray border-white"}`}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>

        <ul className="grid grid-cols-4 gap-6 mt-10">
          {[
            ...food[menuTab],
            ...food[menuTab],
            ...food[menuTab],
            ...food[menuTab],
          ].map(({ name, subTitle }, idx) => (
            <li key={name + idx}>
              <div className="bg-bg-gray h-64 rounded-2xl"></div>
              <p className="text-xl mt-4 mb-2">{name}</p>
              <p className="text-[#999]">{subTitle}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
