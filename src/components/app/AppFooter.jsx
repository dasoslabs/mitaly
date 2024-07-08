import Link from "next/link"
import Logo from "../common/Logo"
import SvgIcon from "../common/SvgIcon"

const data = [
  {
    title: "주소",
    text: "서울특별시 강남구 선릉로90길 70, 2층 (대치동)",
  },
  {
    title: "대표이사",
    text: "박성수",
  },
  {
    title: "사업자등록번호",
    text: "220-88-95768",
  },
  {
    title: "TEL",
    text: "1670-1255",
  },
  {
    title: "FAX",
    text: "02-564-7997",
  },
  {
    title: "E-MAIL",
    text: "mitaly@naver.com",
  },
]

export default function AppFooter() {
  return (
    <footer className="border-t border-light-gray">
      <div className="max-w-pc m-auto py-10 px-6 lg:py-12">
        <div className="lg:flex lg:justify-between lg:items-center">
          <div className="hidden lg:block">
            <Logo />
          </div>

          {/* 모바일 로고, SNS 아이콘 */}
          <div className="lg:hidden flex justify-between items-center mb-6">
            <Logo size="sm" />
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/mitalyoffice/" target="_blank">
                <SvgIcon name="facebook" size={24} />
              </Link>
              <Link href="https://www.instagram.com/mitaly_delicious/" target="_blank">
                <SvgIcon name="instagram" size={24} />
              </Link>
            </div>
          </div>
          <div className="text-[13px] lg:text-base lg:w-2/4 flex flex-col space-y-3">
            <h3 className="font-bold">(주)트루팜</h3>
            <ul className="flex flex-wrap">
              {data.map(({ title, text }, idx) => (
                <li key={title} className="mb-3">
                  <b className="mr-1">{title}</b>
                  <span>{text}</span>
                  {(idx + 1) % 3 !== 0 && (
                    <span className="px-2 text-[#D9D9D9]">|</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex justify-center items-center space-x-1 self-start">
            <Link href="https://www.facebook.com/mitalyoffice/" target="_blank">
              <SvgIcon name="facebook" />
            </Link>
            <Link href="https://www.instagram.com/mitaly_delicious/" target="_blank">
              <SvgIcon name="instagram" />
            </Link>
          </div>
        </div>
        <div className="w-full h-px bg-light-gray my-8"></div>
        <div className="lg:flex lg:justify-between lg:items-center text-[13px] lg:text-base">
          <ul className="flex lg:justify-start space-x-4">
            {["개인정보처리방침", "서비스 이용약관", "영상정보처리방침"].map(
              (text) => (
                <li key={text}>
                  <Link href="#">{text}</Link>
                </li>
              ),
            )}
          </ul>
          <p className="font-bold mt-6">
            ⓒ copyright 2023 Truefarm co., itd all rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
