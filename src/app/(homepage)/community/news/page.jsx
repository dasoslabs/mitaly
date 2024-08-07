"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

import CommunityPageLayout from "@/components/layout/CommunityPageLayout"
import Pagination from "@/components/common/Pagination"

import useNewsStore from "@/store/news"

export default function NewsPage() {
  const [currentCategoryTab, setCurrentCategoryTab] = useState(0)

  const {
    categories,
    currentPage,
    setCurrentPage,
    newsList,
    totalPages,
    loading,
    fetchCategories,
    fetchTotalPages,
    fetchPagePosts,
  } = useNewsStore((state) => state)

  useEffect(() => {
    fetchCategories()
    fetchTotalPages()
  }, [])

  useEffect(() => {
    fetchPagePosts(currentPage)
  }, [currentPage])

  return (
    <CommunityPageLayout>
      <div className="max-w-screen-lg m-auto my-10 lg:my-36">
        <h2 className="text-center font-extralight text-2xl lg:text-5xl mb-10">
          뉴스룸
        </h2>

        {/* 카테고리 탭 */}
        {loading ? (
          <div className="py-4 lg:py-5 border-b-2 border-black">
            <div className="w-1/2 lg:w-1/3 h-5 bg-stone-200 rounded-full animate-pulse" />
          </div>
        ) : (
          <ul className="flex py-4 lg:py-5 border-b-2 border-black">
            {categories.map(({ id, name }, idx) => (
              <li key={id} className="text-[#999]">
                <button
                  className={`${currentCategoryTab === id ? "text-black font-bold" : ""}`}
                  onClick={() => setCurrentCategoryTab(id)}
                >
                  {name}
                </button>
                {categories.length - 1 !== idx && (
                  <span className="inline-block mx-3 lg:mx-4 text-light-gray">
                    |
                  </span>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* 목록 */}
        {loading ? (
          <NewsSkelton />
        ) : (
          <Pagination
            totalPages={totalPages}
            items={
              currentCategoryTab === 0
                ? newsList[currentPage]
                : newsList[currentPage].filter(
                    ({ category_id }) => category_id === currentCategoryTab,
                  )
            }
            ListItem={NewsItem}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </CommunityPageLayout>
  )
}

function NewsItem({
  id,
  category_name,
  title,
  thumbnail_name,
  thumbnail_url,
  created_at,
}) {
  return (
    <li>
      <Link
        href={`/community/news/${id}`}
        className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 px-6 pb-6 lg:p-6 lg:border-t border-[#D9D9D9]"
      >
        <div className="relative aspect-video lg:w-52 lg:h-40">
          <Image
            src={thumbnail_url}
            alt={thumbnail_name}
            fill
            className="object-cover"
            sizes=""
          />
        </div>
        <div>
          <p className="font-bold mt-4 lg:mt-0 mb-1 text-xs lg:text-base">
            {category_name}
          </p>
          <p className="lg:text-2xl font-bold mb-1 lg:mb-3">{title}</p>
          <p className="text-xs text-[#666666]">{created_at}</p>
        </div>
      </Link>
    </li>
  )
}

function NewsSkelton() {
  const { PAGE_SIZE } = useNewsStore((state) => state)

  return (
    <ul>
      {Array(PAGE_SIZE)
        .fill(0)
        .map((_, idx) => (
          <li
            key={"news-skelton" + idx}
            className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 px-6 pb-6 lg:p-6 lg:border-t border-[#D9D9D9] animate-pulse"
          >
            <div className="flex items-center justify-center lg:w-52 lg:h-40 bg-stone-300 rounded shrink-0">
              <svg
                className="w-10 h-10 text-stone-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
            <div className="w-full">
              <p className="mt-4 lg:mt-0 mb-1 h-5 bg-stone-200 rounded-full w-1/4" />
              <p className="mb-1 lg:mb-3 h-5 bg-stone-200 rounded-full w-10/12" />
              <p className="h-5 bg-stone-200 rounded-full w-1/3" />
            </div>
          </li>
        ))}
    </ul>
  )
}
