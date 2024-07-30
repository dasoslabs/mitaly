import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="mt-content-mobile lg:mt-content-pc relative">
      <div className="relative flex justify-end">
        <div className="flex flex-col space-y-6 absolute p-6 -bottom-20 lg:bottom-20 left-0 lg:left-32 z-20">
          <h2 className="font-extrabold text-primary lg:text-2xl">
            About MITALY
          </h2>
          <div className="font-extralight text-2xl lg:text-[64px]">
            <p className="lg:mb-10">맛 미(味) + 이태리</p>
            <p>
              = 맛있는 이태리, <span className="font-bold">미태리!</span>
            </p>
          </div>
        </div>
        <Image
          width="1192"
          height="800"
          src="/about/img01.webp"
          alt="음식 이미지"
          quality={100}
          className="w-2/3"
        />
      </div>

      <div className="relative lg:h-[720px] flex flex-col lg:flex-row lg:items-center lg:space-x-32 mt-20">
        <Image
          width="582"
          height="720"
          src="/about/img02.webp"
          alt="음식 이미지"
          quality={100}
        />
        <div className="flex flex-col space-y-2 lg:space-y-10 self-end lg:self-auto p-6 lg:p-0">
          <h2 className="font-bold text-[22px] lg:text-[40px] flex flex-col lg:flex-row lg:space-x-1">
            <p>파스타는 왜</p>
            <p>비싸야 할까요?</p>
          </h2>
          {/* PC */}
          <div className="text-2xl leading-9 hidden lg:block">
            <p>
              미태리는 누구나 부담 없이 즐길 수 있는 이태리 정통 파스타를 위해
            </p>
            <p>유명 호텔 셰프, 패밀리레스토랑 셰프 출신의 전문가들과 함께</p>
            <p className="font-bold">4년 이상, 연구개발에 매진했습니다.</p>
          </div>

          {/* 모바일 */}
          <div className="text-sm lg:hidden">
            <p>미태리는 누구나 부담 없이 즐길 수 있는</p>
            <p>이태리 정통 파스타를 위해 유명 호텔 셰프,</p>
            <p> 패밀리레스토랑 셰프 출신의 전문가들과</p>
            <p>함께 4년 이상, 연구개발에 매진했습니다.</p>
          </div>
        </div>
      </div>

      <div className="relative mb-10 lg:mb-0 lg:-mt-5 w-full lg:h-[800px] flex flex-col lg:flex-row justify-end items-center space-x-20 overflow-hidden w-full">
        {/* PC */}
        <div className="flex flex-col space-y-5 text-2xl leading-9 hidden lg:block">
          <div>
            <p>기존 파스타의 고급스러운 맛, 깊은 풍미는 그대로 유지하면서</p>
            <p>
              가격 거품을 없앤{" "}
              <span className="font-semibold">
                갓(GOD)성비 파스타 원조, 미태리입니다.
              </span>
            </p>
          </div>
          <div>
            <p>100% 이탈리아산 면, 100% 이탈리아산 엑스트라 버진 올리브유 등</p>
            <p>
              <span className="font-semibold">
                최고급 식재료를 사용한 프리미엄 이태리 정통 파스타를
              </span>
            </p>
            <p>
              <span className="font-semibold">
                미태리에서 매일매일, 부담 없이 즐겨보세요.
              </span>
            </p>
          </div>
        </div>

        <Image
          width="826"
          height="551"
          src="/about/img03.webp"
          alt="음식 이미지"
          quality={100}
        />

        {/* 모바일 */}
        <div className="flex flex-col space-y-5 text-sm leading-5 lg:hidden w-full mt-6">
          <div>
            <p>기존 파스타의 고급스러운 맛, 깊은 풍미는 그대로 유지하면서</p>
            <p>
              가격 거품을 없앤{" "}
              <span className="font-semibold">
                갓(GOD)성비 파스타 원조, 미태리입니다.
              </span>
            </p>
          </div>
          <div>
            <p>100% 이탈리아산 면, 100% 이탈리아산 엑스트라 버진 올리브유 등</p>
            <p>
              <span className="font-semibold">
                최고급 식재료를 사용한 프리미엄 이태리 정통 파스타를
              </span>
            </p>
            <p>
              <span className="font-semibold">
                미태리에서 매일매일, 부담 없이 즐겨보세요.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
