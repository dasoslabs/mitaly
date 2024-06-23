export default function BrandLayout({ children }) {
  return (
    <section className="mt-16 lg:mt-24">
      {/* 배너 */}
      <div className="relative">
        <div className="w-full h-[174px] lg:h-[400px] bg-[url('/brand/banner.png')] bg-cover bg-center" />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center space-y-4 lg:space-y-10">
          <h2 className="text-2xl lg:text-5xl font-extralight">
            미태리 경쟁력
          </h2>
          <div className="text-center text-sm lg:text-lg flex flex-col lg:flex-row lg:space-x-1">
            <p>4년 이상의 오랜 연구 개발로 완성한</p>
            <p>체계적인 프랜차이즈 시스템</p>
          </div>
        </div>
      </div>

      {children}
    </section>
  )
}
