import Image from "next/image"

import { successCards } from "../data"

export default function SuccessTab() {
  return (
    <ul className="max-w-pc m-auto">
      {successCards.map(({ title, description, imgUrl, imgAlt }, idx) => (
        <li
          key={title}
          className="flex flex-col lg:flex-row justify-between items-center"
        >
          <div
            className={`lg:w-1/2 order-2 p-8 ${idx % 2 === 0 ? "lg:order-1 text-left" : "lg:order-2 text-right"}`}
          >
            <h3 className="text-xl lg:text-5xl font-extralight mb-4 lg:mb-12 leading-8 lg:leading-[68px]">
              {title.split("\n").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h3>
            <div className="text-sm lg:text-base leading-7">
              {description.split("\n").map((sentence) => (
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
      ))}
    </ul>
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
