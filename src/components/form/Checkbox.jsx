"use client"

import { useState } from "react"
import SvgIcon from "../common/SvgIcon"

export default function Checkbox({ children }) {
  const [checked, setChecked] = useState(false)

  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center border mr-2 ${
          checked ? "border-black bg-black" : "border-light-gray"
        }`}
      >
        <SvgIcon name="check" color={checked ? "#fff" : "#E6E6E6"} />
      </div>
      {children}
    </label>
  )
}
