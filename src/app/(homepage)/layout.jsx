import AppHeader from "@/components/app/AppHeader"
import AppFooter from "@/components/app/AppFooter"

export default function HomepageLayout({ children }) {
  return (
    <>
      <AppHeader />
      <main>{children}</main>
      <AppFooter />
    </>
  )
}
