import Link from "next/link"
import Logo from "../common/Logo"

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
    },
    {
      name: "미테리 경쟁력",
      href: "/brand",
    },
    {
      name: "커뮤니티",
      href: "/community",
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
  return (
    <header className={`fixed top-0 left-0 w-full h-24 bg-white z-50`}>
      <div className="max-w-pc h-full m-auto flex justify-between items-center">
        <h1>
          <Link href="/">
            <Logo />
          </Link>
        </h1>
        <ul className="flex space-x-12">
          {menu.self.map(({ name, href }) => (
            <li key={name}>
              <Link href={href}>{name}</Link>
            </li>
          ))}
        </ul>
        <ul className="flex space-x-4">
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
      </div>
    </header>
  )
}
