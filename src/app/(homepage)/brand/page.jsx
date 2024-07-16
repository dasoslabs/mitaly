import { redirect } from "next/navigation"
import { menu } from "./data"

export default function BrandPage() {
  return redirect(menu[0].href)
}
