import { redirect } from "next/navigation"
import { menu } from "./data"

export default function StorePage() {
  return redirect(menu[0].href)
}
