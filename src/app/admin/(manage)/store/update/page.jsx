"use client"

import { useEffect, useReducer, useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"

import { initialState, reducer } from "./reducer"
import axiosInstance from "@/libs/axios"
import Link from "next/link"
import Image from "next/image"

const options = [
  { value: "wifi", name: "와이파이" },
  { value: "takeout", name: "포장" },
  { value: "delivery", name: "배달" },
  { value: "event", name: "이벤트" },
  { value: "parking", name: "주차" },
]

export default function AdminStoreUpdatePage() {
  const id = useSearchParams().get("id")
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, initialState)
  const [imageUrl, setImageUrl] = useState("")

  const handleSubmitUpdateStore = async (e) => {
    e.preventDefault()

    try {
      const form = new FormData()
      for (let key in state) {
        if (state[key]) {
          if (key === "options") {
            state[key].forEach((option) => {
              form.append(key, option)
            })
          } else {
            form.append(key, state[key])
          }
        }
      }

      const {
        data: { success, message },
      } = await axiosInstance.put(`/api/store/${id}`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })

      if (!success) {
        window.alert(message)
        return
      }

      router.replace("/admin/store")
      router.refresh("/admin/store")
    } catch (e) {
      console.log("---catch---")
      console.log(e)
    }
  }

  useEffect(() => {
    const fetchPostDetail = async (id) => {
      if (!id) {
        window.alert("게시글을 읽어올 수 없습니다.")
        return
      }

      try {
        const { data: store } = await axiosInstance.get(`/api/store/${id}`)
        const newState = {
          region: store.region,
          name: store.name,
          address: store.address,
          address_detail: store.address_detail,
          contact: store.contact ?? "",
          business_hours: store.business_hours ?? "",
          break_time: store.break_time ?? "",
          holidays: store.holidays ?? "",
          options: store.options ?? [],
        }

        dispatch({ type: "SET_STATE", payload: newState })

        if (store.image_url) {
          setImageUrl(store.image_url)
        }
      } catch (e) {
        console.log(e)
      }
    }

    fetchPostDetail(id)
  }, [id])

  return (
    <>
      <h2 className="font-semibold text-2xl">매장 정보 수정</h2>

      <section className="bg-white p-5">
        <form className="space-y-5" onSubmit={handleSubmitUpdateStore}>
          <div className="flex flex-col space-y-2">
            <label>
              지역
              <span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              value={state.region}
              onChange={(e) =>
                dispatch({ type: "SET_REGION", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              매장명
              <span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              주소<span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              value={state.address}
              onChange={(e) =>
                dispatch({ type: "SET_ADDRESS", payload: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>
              상세 주소<span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              value={state.address_detail}
              onChange={(e) =>
                dispatch({
                  type: "SET_ADDRESS_DETAIL",
                  payload: e.target.value,
                })
              }
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>연락처</label>
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
              영업 시간<span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              value={state.business_hours}
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
            <p>옵션</p>
            <div className="flex space-x-5">
              {options.map(({ name, value }) => (
                <label key={value} className="space-x-1">
                  <input
                    type="checkbox"
                    checked={state.options.includes(value)}
                    onChange={() =>
                      dispatch({ type: "TOGGLE_OPTION", payload: value })
                    }
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>매장 사진</label>
            {imageUrl && (
              <div className="relative w-80 h-52">
                <Image
                  src={imageUrl}
                  alt="매장 사진"
                  fill
                  className="object-fit"
                  sizes=""
                />
              </div>
            )}
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
            <button className="bg-black border border-black text-white py-2 px-5">
              발행
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
