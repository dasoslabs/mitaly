"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Logo from "../common/Logo"
import SvgIcon from "../common/SvgIcon"
import Dropdown from "../common/Dropdown"

const menu = {
  self: [
    {
      name: "브랜드소개",
      href: "/about",
    },
    {
      name: "미태리 메뉴",
      href: "/menu",
    },
    {
      name: "매장안내",
      href: "/store",
      children: [
        { childHref: "interior", name: "인테리어" },
        { childHref: "location", name: "매장찾기" },
      ],
    },
    {
      name: "미태리 경쟁력",
      href: "/brand",
      children: [
        { childHref: "profit", name: "수익구조" },
        { childHref: "success", name: "성공경쟁력" },
        { childHref: "support", name: "본사지원" },
        { childHref: "faq", name: "가맹FAQ" },
        { childHref: "contact", name: "가맹상담" },
      ],
    },
    {
      name: "커뮤니티",
      href: "/community",
      children: [
        { childHref: "notice", name: "공지사항" },
        { childHref: "news", name: "뉴스룸" },
        { childHref: "contact", name: "제휴문의" },
      ],
    },
  ],
  blank: [
    {
      name: "창업페이지",
      href: "http://mitaly.co.kr/",
    },
    {
      name: "점주 공간",
      href: "https://mitalyshop.com/intro/member.html?returnUrl=%2Findex.html",
    },
  ],
}

export default function AppHeader() {
  const pathname = usePathname()
  const [headerStyle, setHeaderStyle] = useState(
    pathname === "/" ? "bg-opacity-0 text-white" : "bg-opacity-100 text-black",
  )
  const [headerColor, setHeaderColor] = useState(
    pathname === "/" ? "white" : "black",
  )

  const handleScroll = () => {
    const section = document.getElementById("main_video")
    if (section) {
      const sectionHeight = section.offsetHeight
      if (sectionHeight - 60 < window.scrollY) {
        setHeaderStyle("bg-opacity-100 text-black")
        setHeaderColor("black")
      } else {
        setHeaderStyle("bg-opacity-0 text-white")
        setHeaderColor("white")
      }
    }
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // 모바일 메뉴 열렸을 때, body 스크롤 제거
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isMobileMenuOpen])

  // 메인페이지에 헤더 스크롤 이벤트 적용
  useEffect(() => {
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll)
    } else {
      window.removeEventListener("scroll", handleScroll)
    }

    setHeaderStyle(
      pathname === "/"
        ? "bg-opacity-0 text-white"
        : "bg-opacity-100 text-black",
    )
    setHeaderColor(pathname === "/" ? "white" : "black")

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full px-6 h-header-mobile lg:h-header-pc z-50 transition-all duration-300 bg-white ${headerStyle}`}
      >
        <div className="max-w-pc h-full m-auto flex justify-between items-center">
          <h1>
            <Link href="/" className="hidden lg:block">
              <Logo color={headerColor} />
              <span className="sr-only">미태리 로고</span>
            </Link>
            <Link href="/" className="lg:hidden">
              <Logo color={headerColor} size="sm" />
              <span className="sr-only">미태리 로고</span>
            </Link>
          </h1>

          <nav className="list-none hidden lg:flex space-x-12">
            {menu.self.map(({ name, href }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </nav>

          <ul className="hidden lg:flex space-x-4">
            {menu.blank.map(({ name, href }) => (
              <li key={name}>
                <Link
                  href={href}
                  target="blank"
                  className="py-1 px-4 flex justify-center items-center border border-light-gray rounded-full"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 모바일 햄버거 메뉴 아이콘 */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <SvgIcon name="menu" color={headerColor} />
            <span className="sr-only">메뉴 버튼</span>
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="w-full h-full bg-white fixed top-0 left-0 lg:hidden z-50 overflow-y-auto">
          {/* 모바일 메뉴 헤더 */}
          <div className="flex justify-between items-center w-full px-6 h-16">
            <Logo color="black" size="sm" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <SvgIcon name="close" />
            </button>
          </div>

          {/* 메뉴 */}
          <ul className="pt-10 px-6 flex flex-col space-y-6">
            {menu.self.map(({ name, href, children }) =>
              children ? (
                <li key={name}>
                  <Dropdown
                    href={href}
                    text={name}
                    items={children}
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                </li>
              ) : (
                <li key={name} className="font-bold">
                  <Link href={href} onClick={() => setIsMobileMenuOpen(false)}>
                    {name}
                  </Link>
                </li>
              ),
            )}
          </ul>

          {/* 구분선 */}
          <div className="w-full px-6 h-px my-8">
            <div className="w-full h-full bg-[#D9D9D9]"></div>
          </div>

          <ul className="px-6 flex flex-col space-y-6 pb-10">
            {menu.blank.map(({ name, href }) => (
              <li key={name}>
                <Link href={href} target="blank" className="font-extralight">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  )
}
