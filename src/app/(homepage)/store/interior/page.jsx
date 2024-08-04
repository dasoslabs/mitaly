"use client"

import { useState } from "react"

import Image from "next/image"

import SliderFull, {
  SliderFullCard,
} from "@/components/common/Slider/SliderFull"
import ChipButton from "@/components/common/Button/ChipButton"

import { interior } from "../data"
import StorePageLayout from "@/components/layout/StorePageLayout"

export default function InteriorPage() {
  const [currentInterior, setCurrentInterior] = useState(interior[0].name)
  const currentInteriorInfo = interior.find(
    ({ name }) => name === currentInterior,
  )

  return (
    <StorePageLayout>
      <div className="max-w-pc m-auto flex flex-col lg:flex-row justify-between items-center lg:mt-20 lg:mb-10">
        <h2 className="text-2xl lg:text-5xl font-extralight py-10 px-6">
          미태리 인테리어
        </h2>
        <ul className="flex mb-6 lg:mb-0 w-full text-center lg:w-auto">
          {interior.map(({ name, text }) => (
            <li key={name} className="w-1/2 lg:w-auto">
              <ChipButton
                onClick={() => setCurrentInterior(name)}
                isSelected={currentInterior === name}
              >
                {text}
              </ChipButton>
            </li>
          ))}
        </ul>
      </div>
      <SliderFull width="w-full">
        {Array(currentInteriorInfo.imgAmount)
          .fill(0)
          .map((_, idx) => (
            <SliderFullCard key={currentInteriorInfo.name + "image" + idx}>
              <Image
                width="1920"
                height="1080"
                src={`/store/${currentInteriorInfo.name}/${idx + 1}.webp`}
                alt={`${currentInteriorInfo.name} image`}
              />
            </SliderFullCard>
          ))}
      </SliderFull>
    </StorePageLayout>
  )
}
