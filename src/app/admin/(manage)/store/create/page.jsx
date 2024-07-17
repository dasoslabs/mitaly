"use client"

import { useReducer } from "react"
import { useRouter } from "next/navigation"

import { initialState, reducer } from "./reducer"
import axiosInstance from "@/libs/axios"
import Link from "next/link"

const options = [
  { value: "wifi", name: "와이파이" },
  { value: "takeout", name: "테이크아웃" },
  { value: "delivery", name: "배달" },
  { value: "event", name: "이벤트" },
  { value: "parking", name: "주차" },
]

export default function AdminNoticeCreatePage() {
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleCreatePost = async (content = "") => {
    if (!title) {
      return
    }

    try {
      const { data: post } = await axiosInstance.post("/api/store", {
        title,
        content,
      })

      router.replace("/admin/store")
      router.refresh("/admin/store")
    } catch (e) {
      console.log("---catch---")
      console.log(e)
    }
  }

  return (
    <>
      <h2 className="font-semibold text-2xl">매장 신규 등록</h2>

      <section className="bg-white p-5">
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col space-y-2">
            <label>
              매장명
              <span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              주소<span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: "SET_ADDRESS", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              상세 주소<span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.addressDetail}
              onChange={(e) =>
                dispatch({
                  type: "SET_ADDRESS_DETAIL",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              연락처<span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.contact}
              onChange={(e) =>
                dispatch({ type: "SET_CONTACT", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              영업 시간<span className="text-red ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.businessHours}
              onChange={(e) =>
                dispatch({
                  type: "SET_BUSINESS_HOURS",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>휴식 시간</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.breakTime}
              onChange={(e) =>
                dispatch({ type: "SET_BREAK_TIME", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>휴무일</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              value={state.holidays}
              onChange={(e) =>
                dispatch({ type: "SET_HOLIDAYS", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>옵션</label>
            {options.map(({ name, value }) => (
              <label key={value}>
                <input
                  type="checkbox"
                  checked={state.options.includes(value)}
                  onChange={() =>
                    dispatch({ type: "TOGGLE_OPTION", payload: value })
                  }
                />
                {name}
              </label>
            ))}
          </div>

          <div className="flex flex-col space-y-2">
            <label>이미지 파일</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="file"
              onChange={(e) =>
                dispatch({ type: "SET_IMAGE_FILE", payload: e.target.files[0] })
              }
            />
          </div>

          <div className="flex space-x-5 justify-end">
            <Link
              href="/admin/store"
              className="inline-block border border-stone-300 bg-white py-2 px-5"
            >
              취소
            </Link>
            <button
              className="bg-black border border-black text-white py-2 px-5"
              // onClick={() => onClickCreate(quillRef?.current?.value ?? null)}
            >
              발행
            </button>
          </div>
        </form>
      </section>
    </>
  )
}