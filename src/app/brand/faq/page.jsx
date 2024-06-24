"use client"

import { useState } from "react"

import BrandPageLayout from "@/components/layout/BrandPageLayout"
import SvgIcon from "@/components/common/SvgIcon"
import Pagination from "@/components/common/Pagination"

import { category, faqList } from "./data"

export default function FaqPage() {
  const [currentCategory, setCurrentCategory] = useState(category[0].name)

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

      <div className="max-w-screen-lg m-auto px-6 mb-36">
        {/* 카테고리 탭 */}
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

        {/* 목록 */}
        <Pagination items={faqList} ListItem={Dropdown} />
      </div>
    </BrandPageLayout>
  )
}

function Dropdown({ categoryText, question, answer = "" }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`relative py-6 border-t border-light-gray ${isOpen ? "pb-0" : ""}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center"
      >
        <h4 className="flex w-full justify-between items-center">
          <p className="font-bg w-2/12 font-bold">{categoryText}</p>
          <p className={`text-start w-10/12 ${isOpen ? "font-bold" : ""}`}>{question}</p>
        </h4>
        <div>
          <SvgIcon name={isOpen ? "minus" : "plus"} />
        </div>
      </button>

      {isOpen && (
        <div className="flex w-full justify-between mt-6 py-6 bg-bg-gray">
          <p className="w-2/12 text-center font-bold">답변</p>
          <div className="w-10/12">
            {
              answer.split("\n").map((sentence) => (
                <p key={sentence}>{sentence}</p>
              ))
            }
          </div>
        </div>
      )}
    </div>
  )
}
