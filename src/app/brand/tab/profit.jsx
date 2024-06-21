import Link from "next/link"
import Image from "next/image"
import SvgIcon from "@/components/common/SvgIcon"

import { profitCards } from "../data"

export default function ProfitTab() {
  return (
    <>
      <div className="mt-10 lg:mt-40 flex flex-col space-y-20 lg:space-y-32">
        <div className="max-w-pc m-auto text-center flex flex-col space-y-10 lg:space-y-20 lg:text-xl">
          <div className="flex flex-col space-y-2 lg:space-y-5">
            <div className="font-extrabold flex items-center justify-center space-x-2">
              <h4>좋은 재료를 더 좋은 가격에</h4>
              <div className="w-10 lg:w-16 h-[2px] lg:h-[3px] bg-black black"></div>
            </div>
            <h3 className="text-2xl lg:text-5xl font-extralight">
              “안정적인 식자재 원가율”
            </h3>
          </div>
          <Image
            width="1440"
            height="540"
            src="/brand/profit01.png"
            alt="메인 이미지"
            quality={100}
          />
          <div>
            <p>가맹점의 충분한 순수익이 보장될 수 있도록</p>
            <p>
              <b>30% 내외의 안정적인 식자재 원가율</b>을 유지하고 있습니다.
            </p>
          </div>
        </div>

        <div className="px-6">
          <ul className="max-w-pc lg:h-[720px] m-auto flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:justify-center lg:space-x-5">
            {profitCards.map(({ text, imgUrl, imgAlt, className }) => (
              <li
                key={text}
                className={`relative font-black text-xl lg:text-[32px] ${className}`}
              >
                <Image
                  width="464"
                  height="600"
                  src={imgUrl}
                  alt={imgAlt}
                  quality={100}
                />
                <div className="absolute left-10 top-10 lg:leading-10">
                  {text.split("\n").map((word) => (
                    <p key={word}>{word}</p>
                  ))}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-20 text-center flex flex-col space-y-6 lg:space-y-12">
            <div className="flex flex-col space-y-2 lg:space-y-5">
              <h4 className="font-extrabold">홀 X 포장 X 배달까지</h4>
              <h3 className="text-2xl lg:text-5xl font-extralight">
                “3 WAY 수익구조”
              </h3>
            </div>
            <div className="hidden lg:block">
              <p>
                하나의 매장에서 홀과 포장, 배달을 모두 운영할 수 있는 3 WAY
                시스템으로
              </p>
              <p>다양한 판매 루트를 통해 부가적인 수익 창출이 가능합니다.</p>
            </div>
            <div className="px-6 lg:hidden">
              <p>하나의 매장에서 홀과 포장, 배달을 모두 운영할 수 있는</p>
              <p>3 WAY 시스템으로 다양한 판매 루트를 통해</p>
              <p>부가적인 수익 창출이 가능합니다.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Image
            width="1920"
            height="640"
            src="/brand/profit02.png"
            alt="배너 이미지"
            quality={100}
          />
          <div className="mt-20 flex-col space-y-6 lg:space-y-12">
            <div className="flex flex-col space-y-2 lg:space-y-5">
              <h4 className="font-extrabold">매장 운영의 효율성을 극대화</h4>
              <h3 className="text-2xl lg:text-5xl font-extralight">
                “고정비 DOWN, 순수익 UP!”
              </h3>
            </div>
            <div className="hidden lg:block">
              <p>
                4년간 연구 개발한 독자 레시피로 초간단 조리시스템을
                구축하였으며,
              </p>
              <p>
                무인 주문결제가 가능한 키오스크를 활용하여 필요 인력을
                최소화했습니다.
              </p>
              <p className="mt-5">
                인건비 걱정 없는 효율적인 미태리의 운영 시스템으로 자연스럽게
                순수익 증대 효과를 누리실 수 있습니다.
              </p>
            </div>
            <div className="lg:hidden">
              <p>4년간 연구 개발한 독자 레시피로 초간단 조리시스템을</p>
              <p>구축하였으며, 무인 주문결제가 가능한 키오스크를</p>
              <p>활용하여 필요 인력을 최소화했습니다.</p>
              <p>인건비 걱정 없는 효율적인 미태리의 운영 시스템으로</p>
              <p>자연스럽게 순수익 증대 효과를 누리실 수 있습니다.</p>
            </div>
          </div>
        </div>

        <div className="py-10 px-6 lg:py-16 bg-primary text-center flex flex-col justify-center items-center">
          <h3 className="text-xl lg:text-[32px] font-bold mb-4 flex flex-col lg:flex-row lg:space-x-1">
            <p>실제 운영매장의</p>
            <p>순수익이 궁금하신가요?</p>
          </h3>
          <p className="text-sm lg:text-lg">
            하단에 버튼을 눌러서 자세한 내용을 확인해 보세요!
          </p>
          <Link
            href="#"
            className="w-full lg:w-auto mt-10 py-3 px-6 lg:py-2 lg:px-7 text-sm lg:text-base flex justify-center items-center bg-white rounded-full font-bold"
          >
            <p>지금 확인하러 가기</p>
            <SvgIcon name="arrow-right" />
          </Link>
        </div>
      </div>
    </>
  )
}
