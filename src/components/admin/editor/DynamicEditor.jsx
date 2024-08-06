"use client"

import { useState } from "react"
import dynamic from "next/dynamic"
import "react-quill/dist/quill.snow.css"

const DynamicQuill = dynamic(() => import("react-quill"), { ssr: false })

export default function DynamicEditor(props) {
  const [editor, setEditor] = useState("")

  return (
    <>
      <DynamicQuill
        value={editor}
        onChange={setEditor}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
      <input type="hidden" value={editor} {...props} />
    </>
  )
}
