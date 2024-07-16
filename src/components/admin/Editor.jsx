import dynamic from "next/dynamic"
import Link from "next/link"
import { useRef } from "react"
import "react-quill/dist/quill.snow.css"

const ReactQuill = dynamic(
  async () => {
    const { default: RQ } = await import("react-quill")

    return function ReactQuillWithRef({ forwardedRef, ...props }) {
      return <RQ ref={forwardedRef} {...props} />
    }
  },
  {
    ssr: false,
  },
)

export default function Editor({ onClickCreate, cancelHref = "#" }) {
  const quillRef = useRef(false)

  return (
    <>
      <ReactQuill
        forwardedRef={quillRef}
        modules={{
          toolbar: [
            [{ header: [1, 2, 3, false] }],
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
          ],
        }}
      />
      <div className="space-x-5">
        <Link
          href={cancelHref}
          className="inline-block border border-stone-300 bg-white py-2 px-5"
        >
          취소
        </Link>
        <button
          className="bg-black border border-black text-white py-2 px-5"
          onClick={() =>
            onClickCreate(quillRef?.current?.value ?? null)
          }
        >
          발행
        </button>
      </div>
    </>
  )
}
