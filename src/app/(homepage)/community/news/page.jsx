"use client"

import { useState } from "react"

import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"

import { category, newsList } from "./data"

export default function NewsPage() {
  const [currentCategoryTab, setCurrentCategoryTab] = useState(category[0].name)

  return (
    <CommunityPageLayout>
      <div className="max-w-screen-lg m-auto my-10 lg:my-36">
        <h2 className="text-center font-extralight text-2xl lg:text-5xl mb-10">
          뉴스룸
        </h2>

        <ul className="hidden lg:flex py-4 lg:py-5 border-b-2 border-black">
          {category.map(({ name, text }, idx) => (
            <li key={name} className="text-[#999]">
              <button
                className={`${currentCategoryTab === name ? "text-black font-bold" : ""}`}
                onClick={() => setCurrentCategoryTab(name)}
              >
                {text}
              </button>
              {category.length - 1 !== idx && (
                <span className="inline-block mx-3 lg:mx-4 text-light-gray">
                  |
                </span>
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
    <li className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 px-6 pb-6 lg:p-6 lg:border-t border-[#D9D9D9]">
      <div className="bg-bg-gray aspect-video lg:w-52 lg:h-40" />
      <div>
        <p className="font-bold mt-4 lg:mt-0 mb-1 text-xs lg:text-base">
          {categoryText}
        </p>
        <p className="lg:text-2xl font-bold mb-1 lg:mb-3">{title}</p>
        <p className="text-xs text-[#666666]">{date}</p>
      </div>
    </li>
  )
}
