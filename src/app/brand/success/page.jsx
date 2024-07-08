import Image from "next/image"

import BrandPageLayout from "@/components/layout/BrandPageLayout"

import { successCards } from "../data"

export default function SuccessPage() {
  return (
    <BrandPageLayout>
      <ul className="max-w-pc m-auto">
        {successCards.map(
          ({ title, description, imgUrl, imgAlt, descriptionMobile }, idx) => (
            <li
              key={title}
              className="flex flex-col lg:flex-row justify-between items-center"
            >
              <div
                className={`lg:w-1/2 order-2 p-8 ${idx % 2 === 0 ? "lg:order-1 text-left" : "lg:order-2 text-right"}`}
              >
                <h3 className="text-2xl lg:text-5xl font-extralight mb-4 lg:mb-12 leading-8 lg:leading-[68px]">
                  {title.split("\n").map((word) => (
                    <span key={word} className="block">
                      {word}
                    </span>
                  ))}
                </h3>

                {/* PC 설명 */}
                <div className="hidden lg:block leading-7">
                  {description.split("\n").map((sentence) => (
                    <p key={sentence}>{renderTextWithBold(sentence)}</p>
                  ))}
                </div>

                {/* 모바일 설명 */}
                <div className="text-sm lg:hidden leading-7">
                  {descriptionMobile.split("\n").map((sentence) => (
                    <p key={sentence}>{renderTextWithBold(sentence)}</p>
                  ))}
                </div>
              </div>
              <div
                className={`lg:w-1/2 order-1 ${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}
              >
                <Image
                  width="720"
                  height="720"
                  src={imgUrl}
                  alt={imgAlt}
                  quality={100}
                />
              </div>
            </li>
          ),
        )}
      </ul>
    </BrandPageLayout>
  )
}

function renderTextWithBold(text) {
  const parts = text.split(/\\b(.*?)\\b/g)

  return parts.map((part, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{part}</strong>
    } else {
      return part
    }
  })
}
