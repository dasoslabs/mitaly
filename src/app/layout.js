import localFont from "next/font/local"
import "./globals.css"

const pretendard = localFont({
  src: "../assets/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})

export const metadata = {
  title: "미테리",
  description: "미테리 홈페이지",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${pretendard.className} font-pretendard`}>
        {children}
      </body>
    </html>
  )
}
