import Image from "next/image"

import { supportCards } from "../data"

export default function SupportTab() {
  return (
    <ul className="py-40 max-w-pc m-auto grid grid-cols-4 gap-6">
      {supportCards.map(({ text, imgUrl, imgAlt }, idx) => (
        <li key={text} className="mb-2">
          <Image
            width="342"
            height="240"
            src={imgUrl}
            alt={imgAlt}
            quality={100}
          />
          <h3 className="text-xl mt-6">
            <span className="font-bold mr-2">
              {(idx < 10 ? "0" : "") + (idx + 1)}.
            </span>
            <span className="font-light">{text}</span>
          </h3>
        </li>
      ))}
    </ul>
  )
}
