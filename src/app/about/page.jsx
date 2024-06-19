import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="mt-24 relative">
      <div className="relative h-[800px]">
        <div className="max-w-pc w-full flex flex-col space-y-6 absolute left-1/2 transform -translate-x-1/2 bottom-20 z-20">
          <h2 className="font-extrabold text-primary text-2xl">About MITALY</h2>
          <div className="font-extralight text-[64px]">
            <p>맛 미(味) + 이태리</p>
            <p>= 맛있는 이태리, <span className="font-bold">미태리!</span></p>
          </div>
        </div>
        <Image
          width="1192"
          height="800"
          src="/about/img01.png"
          alt="음식 이미지"
          quality={100}
          className="absolute top-0 right-0 z-10"
        />
      </div>

      <div className="relative h-[720px] flex items-center space-x-32 mt-20">
        <Image
          width="582"
          height="720"
          src="/about/img02.png"
          alt="음식 이미지"
          quality={100}
        />
        <div className="flex flex-col space-y-10">
          <h2 className="font-bold text-[40px]">파스타는 왜 비싸야 할까요?</h2>
          <div className="text-2xl leading-9">
            <p>미태리는 누구나 부담 없이 즐길 수 있는 이태리 정통 파스타를 위해</p>
            <p>유명 호텔 셰프, 패밀리레스토랑 셰프 출신의 전문가들과 함께</p>
            <p className="font-bold">4년 이상, 연구개발에 매진했습니다.</p>
          </div>
        </div>
      </div>

      <div className="relative -mt-5 w-full h-[800px] flex justify-end items-center space-x-20">
        <div className="flex flex-col space-y-5 text-2xl leading-9">
          <div>
            <p>기존 파스타의 고급스러운 맛, 깊은 풍미는 그대로 유지하면서</p>
            <p>가격 거품을 없앤 <span className="font-semibold">갓(GOD)성비 파스타 원조, 미태리입니다.</span></p>
          </div>
          <div>
            <p>100% 이탈리아산 면, 100% 이탈리아산 엑스트라 버진 올리브유 등</p>
            <p><span className="font-semibold">최고급 식재료를 사용한 프리미엄 이태리 정통 파스타를</span></p>
            <p><span className="font-semibold">미태리에서 매일매일, 부담 없이 즐겨보세요.</span></p>
          </div>
        </div>
        <Image
          width="826"
          height="551"
          src="/about/img03.png"
          alt="음식 이미지"
          quality={100}
        />
      </div>
    </section>
  )
}