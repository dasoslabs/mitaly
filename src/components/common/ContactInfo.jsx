import Link from "next/link"
import SvgIcon from "./SvgIcon"

const info = [
  {
    text: "서울특별시 강남구 선릉로90길 70, 2층 (대치동)",
    svgIcon: "map",
  },
  {
    text: "1670-1255",
    svgIcon: "call-outline",
  },
  {
    text: "mitaly@naver.com",
    svgIcon: "message-outline",
  },
]

export default function ContactInfo({
  title,
  className,
  subTitle = "",
  subDescription = "",
  href = "#",
  hrefText = "자세히 보기",
}) {
  return (
    <div className={`flex flex-col space-y-16 ${className}`}>
      <div className="flex flex-col space-y-10">
        <div className="flex flex-col space-y-5">
          <h2 className="text-5xl font-extralight">{title}</h2>
          <div>
            <p>문의하실 부분이 있으시면 내용을 남겨주세요.</p>
            <p>빠른 시일 내에 연락드리겠습니다.</p>
          </div>
        </div>
        <ul className="flex flex-col space-y-4">
          {info.map(({ text, svgIcon }) => (
            <li key={text + svgIcon} className="flex items-center">
              <SvgIcon name={svgIcon} />
              <p className="ml-4">{text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-2xl bg-bg-gray flex flex-col space-y-10 p-6 max-w-[464px]">
        <div className="flex flex-col space-y-6">
          <h3 className="text-xl font-bold">
            {subTitle.split("\n").map((part) => (
              <p key={part}>{part}</p>
            ))}
          </h3>
          <div>
            {subDescription.split("\n").map((part) => (
              <p key={part}>{part}</p>
            ))}
          </div>
        </div>
        <Link href={href} className="flex items-center space-x-2">
          <p className="text-lg font-bold">{hrefText}</p>
          <SvgIcon name="arrow-triangle-right" />
        </Link>
      </div>
    </div>
  )
}
