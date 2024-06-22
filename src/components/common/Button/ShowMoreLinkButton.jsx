import Link from "next/link"
import SvgIcon from "../SvgIcon"

export default function ShowMoreLinkButton({
  children,
  href = "#",
  className = "",
  ...props
}) {
  return (
    <Link
      href={href}
      className={`w-full lg:w-auto mt-10 py-3 px-6 lg:py-2 lg:px-7 text-sm border border-light-gray lg:text-base flex justify-center items-center bg-white rounded-full font-bold ${className}`}
      {...props}
    >
      <p>{children}</p>
      <SvgIcon name="arrow-right" />
    </Link>
  )
}
