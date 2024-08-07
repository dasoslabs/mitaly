export default function ComingSoon() {
  return (
    <div className="text-[#999] text-center py-40 lg:py-80 flex flex-col justify-center items-center space-y-5">
      <div className="border border-2 lg:border-4 border-primary rounded-full w-10 h-10 lg:w-20 lg:h-20 flex justify-center items-center text-2xl lg:text-5xl text-primary">
        !
      </div>
      <h2 className="text-xl lg:text-5xl font-extralight text-black">
        “현재 페이지는 서비스 준비중입니다.”
      </h2>
      <div className="text-sm lg:text-base">
        <p>보다 나은 서비스 제공을 위하여 페이지 준비중에 있습니다.</p>
        <p>빠른 시일내에 준비하여 찾아뵙겠습니다.</p>
      </div>
    </div>
  )
}
