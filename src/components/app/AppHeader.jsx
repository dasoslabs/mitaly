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
      name: "미테리 메뉴",
      href: "/menu",
    },
    {
      name: "매장안내",
      href: "/store",
      children: [
        { query: "interior", name: "인테리어" },
        { query: "location", name: "매장찾기" },
      ],
    },
    {
      name: "미테리 경쟁력",
      href: "/brand",
      children: [
        { query: "profit", name: "수익구조" },
        { query: "success", name: "성공경쟁력" },
        { query: "support", name: "본사지원" },
        { query: "faq", name: "가맹FAQ" },
        { query: "contact", name: "가맹상담" },
      ],
    },
    {
      name: "커뮤니티",
      href: "/community",
      children: [
        { query: "notice", name: "공지사항" },
        { query: "news", name: "뉴스룸" },
        { query: "contact", name: "제휴문의" },
      ],
    },
  ],
  blank: [
    {
      name: "창업페이지",
      href: "/startup",
    },
    {
      name: "점주 공간",
      href: "/member",
    },
  ],
}

export default function AppHeader() {
  const pathname = usePathname()
  const [headerStyle, setHeaderStyle] = useState(
    pathname === "/" ? "bg-opacity-0 text-white" : "bg-opacity-100 text-black",
  )
  const [logoColor, setLogoColor] = useState(
    pathname === "/" ? "white" : "black",
  )

  const handleScroll = () => {
    const section = document.getElementById("main_banner")
    if (section) {
      const sectionHeight = section.offsetHeight
      if (sectionHeight - 60 < window.scrollY) {
        setHeaderStyle("bg-opacity-100 text-black")
        setLogoColor("black")
      } else {
        setHeaderStyle("bg-opacity-0 text-white")
        setLogoColor("white")
      }
    }
  }

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
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

  useEffect(() => {
    const section = document.getElementById("main_banner")
    if (section) {
      window.addEventListener("scroll", handleScroll)
      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full px-6 h-16 lg:h-24 z-50 transition-all duration-300 bg-white ${headerStyle}`}
      >
        <div className="max-w-pc h-full m-auto flex justify-between items-center">
          <h1>
            <Link href="/" className="hidden lg:block">
              <Logo color={logoColor} />
            </Link>
            <Link href="/" className="lg:hidden">
              <Logo color={logoColor} size="sm" />
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
                  className="py-1 px-4 flex justify-center items-center border border-light-gray rounded-full"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>

          {/* 모바일 햄버거 메뉴 아이콘 */}
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
            <SvgIcon name="menu" color={logoColor} />
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <nav className="w-full h-full bg-white fixed top-0 left-0 lg:hidden z-50 overflow-y-auto">
          {/* 모바일 메뉴 헤더 */}
          <div className="flex justify-between items-center w-full px-6 h-16">
            <Logo color={logoColor} size="sm" />
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <SvgIcon name="close" />
            </button>
          </div>

          {/* 메뉴 */}
          <ul className="pt-10 px-6 flex flex-col space-y-6">
            {menu.self.map(({ name, href, children }) =>
              children ? (
                <li key={name}>
                  <Dropdown href={href} text={name} items={children} />
                </li>
              ) : (
                <li key={name} className="font-bold">
                  <Link href={href}>{name}</Link>
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
                <Link href={href} className="font-extralight">
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
