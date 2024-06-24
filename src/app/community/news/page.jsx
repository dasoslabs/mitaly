"use client"

import { useState } from "react"

import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"

import { category, newsList } from "./data"

export default function NewsPage() {
  const [currentCategory, setCurrentCategory] = useState(category[0].name)

  return (
    <CommunityPageLayout>
      <div className="max-w-screen-lg m-auto my-36">
        <h2 className="text-center font-extralight text-2xl lg:text-5xl mb-10">뉴스룸</h2>

        <ul className="flex py-5 border-b-2 border-black">
          {category.map(({ name, text }, idx) => (
            <li key={name} className="text-[#999]">
              <button
                className={`${currentCategory === name ? "text-black font-bold" : ""}`}
                onClick={() => setCurrentCategory(name)}
              >
                {text}
              </button>
              {category.length - 1 !== idx && (
                <span className="inline-block mx-4 text-light-gray">|</span>
              )}
            </li>
          ))}
        </ul>

        <Pagination pageSize={5} items={newsList} ListItem={NewsItem} />
      </div>
    </CommunityPageLayout>
  )
}

function NewsItem({ categoryText, title, date }) {
  return (
    <li className="flex items-center space-x-6 p-6 border-t border-[#D9D9D9]">
      <div className="bg-bg-gray w-52 h-40" />
      <div>
        <p className="font-bold mb-1">{categoryText}</p>
        <p className="text-2xl font-bold mb-3">{title}</p>
        <p className="text-xs text-[#666666]">{date}</p>
      </div>
    </li>
  )
}