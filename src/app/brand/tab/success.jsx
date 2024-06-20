import Image from "next/image"

import { successCards } from "../data"

export default function SuccessTab() {
  return (
    <ul className="max-w-pc m-auto">
      {successCards.map(({ title, description, imgUrl, imgAlt }, idx) => (
        <li key={title} className="flex justify-between items-center">
          <div
            className={`${idx % 2 === 0 ? "order-1 text-left" : "order-2 text-right"}`}
          >
            <h3 className="text-5xl font-extralight mb-12 leading-[68px]">
              {title.split("\n").map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </h3>
            <div className="leading-7">
              {description.split("\n").map((sentence) => (
                <p key={sentence}>{renderTextWithBold(sentence)}</p>
              ))}
            </div>
          </div>
          <Image
            width="720"
            height="720"
            src={imgUrl}
            alt={imgAlt}
            quality={100}
            className={`${idx % 2 === 0 ? "order-2" : "order-1"}`}
          />
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
