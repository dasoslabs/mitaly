import localFont from "next/font/local"
import "./globals.css"

import AppHeader from "@/components/app/AppHeader"
import AppFooter from "@/components/app/AppFooter"

const pretendard = localFont({
  src: "../assets/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata = {
  title: "미태리(Mitaly) - 파스타, 스파게티 전문점",
  description:
    "365일 줄서는 파스타 맛집! 5년 연속 소비자만족지수 1위! 가장 빠른 성공 창업 미태리에서 시작하세요! 업종변경/소자본/초보창업 강력 추천",
  author: "미태리",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
  openGraph: {
    title: "미태리(Mitaly) - 파스타, 스파게티 전문점",
    site_name: "미태리(Mitaly) - 파스타, 스파게티 전문점",
    url: "https://mitaly.co.kr",
    description:
      "365일 줄서는 파스타 맛집! 5년 연속 소비자만족지수 1위! 가장 빠른 성공 창업 미태리에서 시작하세요! 업종변경/소자본/초보창업 강력 추천",
    type: "website",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} font-pretendard`}>
        <AppHeader />
        <main>{children}</main>
        <AppFooter />
      </body>
    </html>
  )
}
