"use server"

import Link from "next/link"
import Image from "next/image"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { getStoreDetailById, updateStore } from "@/libs/db/store"

const options = [
  { value: "wifi", name: "와이파이" },
  { value: "takeout", name: "포장" },
  { value: "delivery", name: "배달" },
  { value: "event", name: "이벤트" },
  { value: "parking", name: "주차" },
]

export default async function AdminStoreUpdatePage({ searchParams }) {
  const { id } = searchParams
  const {
    region,
    name,
    address,
    address_detail,
    contact,
    business_hours,
    break_time,
    holidays,
    options: defaultOptions,
    image_url,
  } = await getStoreDetailById(id)

  const actionUpdateStore = async (data) => {
    "use server"
    const region = data.get("region")
    const name = data.get("name")
    const address = data.get("address")
    const address_detail = data.get("address_detail")
    const contact = data.get("contact")
    const business_hours = data.get("business_hours")
    const break_time = data.get("break_time") ?? null
    const holidays = data.get("holidays") ?? null
    const options = data.getAll("options")
    const image_file =
      data.get("image_file").name === "undefined"
        ? null
        : data.get("image_file")

    const result = await updateStore({
      id,
      data: {
        region,
        name,
        address,
        address_detail,
        contact,
        business_hours,
        break_time,
        holidays,
        options,
        image_file,
      },
    })
    if (!result) {
      console.log("오류 발생")
      return
    }
    revalidatePath("/admin/store")
    redirect("/admin/store")
  }

  return (
    <>
      <section>
        <h2 className="font-semibold text-2xl">매장 정보 수정</h2>
      </section>

      <section className="bg-white p-5">
        <form className="space-y-5" action={actionUpdateStore}>
          <div className="flex flex-col space-y-2">
            <label>
              지역
              <span className="text-error ml-1">*</span>
            </label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              required
              type="text"
              name="region"
              defaultValue={region}
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
              name="name"
              defaultValue={name}
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
              name="address"
              defaultValue={address}
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
              name="address_detail"
              defaultValue={address_detail}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>연락처</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              name="contact"
              defaultValue={contact}
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
              name="business_hours"
              defaultValue={business_hours}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>휴식 시간</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              name="break_time"
              defaultValue={break_time}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label>휴무일</label>
            <input
              className="border border-stone-300 p-2 outline-none focus:border-black"
              type="text"
              name="holidays"
              defaultValue={holidays}
            />
          </div>

          <div className="flex flex-col space-y-2">
            <p>옵션</p>
            <div className="flex space-x-5">
              {options.map(({ name, value }) => (
                <label key={value} className="space-x-1">
                  <input
                    type="checkbox"
                    name="options"
                    value={value}
                    defaultChecked={defaultOptions.includes(value)}
                  />
                  <span>{name}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            <label>매장 사진</label>
            {image_url && (
              <div className="relative w-80 h-52">
                <Image
                  src={image_url}
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
              name="image_file"
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
              저장
            </button>
          </div>
        </form>
      </section>
    </>
  )
}
