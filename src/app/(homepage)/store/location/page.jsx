"use client"

import { useEffect, useRef, useState } from "react"
import StorePageLayout from "@/components/layout/StorePageLayout"

import axiosInstance from "@/libs/axios"
import SvgIcon from "@/components/common/SvgIcon"
import KakaoMap from "@/components/common/Map/KakaoMap"
import { regions } from "./data"
import Modal from "@/components/common/Modal"

const OPTIONS = [
  {
    name: "와이파이",
    option: "wifi",
  },
  {
    name: "포장",
    option: "takeout",
  },
  {
    name: "배달",
    option: "delivery",
  },
  {
    name: "이벤트",
    option: "event",
  },
  {
    name: "주차",
    option: "parking",
  },
]

export default function LocationPage() {
  const storeRef = useRef()
  const [storeList, setStoreList] = useState([])
  const [currentProvince, setCurrentProvince] = useState("all")
  const [currentCity, setCurrentCity] = useState("all")

  // 전체 매장 조회
  useEffect(() => {
    const fetchAllStore = async () => {
      try {
        const { data } = await axiosInstance.get("/api/store")
        setStoreList(data)
        storeRef.current = data
      } catch (e) {
        console.log("--Axios error--")
        console.log(e)
      }
    }

    fetchAllStore()
  }, [])

  const handleSearchStore = () => {
    if (currentProvince === "all") {
      setStoreList(storeRef.current)
      return
    }

    const filteredProvince = storeRef.current.filter(({ address }) =>
      address?.includes(currentProvince),
    )

    if (currentCity === "all") {
      setStoreList(filteredProvince)
      return
    }

    const filteredCity = filteredProvince.filter(({ address }) =>
      address?.includes(currentCity),
    )
    setStoreList(filteredCity)
  }

  return (
    <StorePageLayout>
      <div className="flex justify-between">
        <section className="w-full lg:w-4/12 lg:h-[calc(100vh-152px)] overflow-y-auto">
          <div className="p-6 pt-10 lg:p-10 lg:pt-12">
            <h2 className="font-extralight text-2xl lg:text-5xl text-center lg:text-left">
              매장찾기
            </h2>
            <div className="flex justify-center space-x-4 text-sm lg:text-xl my-10">
              <select
                className="w-1/2 p-2 border-b-2"
                value={currentProvince}
                onChange={(e) => setCurrentProvince(e.target.value)}
              >
                <option value="all">전체</option>
                {regions.map(({ value, name }) => (
                  <option key={value} value={name}>
                    {name}
                  </option>
                ))}
              </select>
              <select
                className="w-1/2 p-2 border-b-2"
                value={currentCity}
                onChange={(e) => setCurrentCity(e.target.value)}
              >
                <option value="all">전체</option>
                {regions
                  .find(
                    ({ name: regionName }) => currentProvince === regionName,
                  )
                  ?.city.map(({ value, name }) => (
                    <option key={value} value={name}>
                      {name}
                    </option>
                  ))}
              </select>
            </div>
            <button
              className="w-full rounded-lg bg-black text-white lg:text-lg py-4 px-20"
              onClick={handleSearchStore}
            >
              매장검색
            </button>
          </div>

          {/* 매장 목록 */}
          <ul className="lg:max-h-[976px] text-sm lg:text-base">
            {storeList.map((store, idx) => (
              <StoreItem key={store.name + idx} {...store} />
            ))}
          </ul>
        </section>

        <section className="w-8/12 h-[calc(100vh-152px)] hidden lg:block">
          <KakaoMap list={storeList} />
        </section>
      </div>
    </StorePageLayout>
  )
}

function StoreItem({ id, name, address, address_detail, business_hours }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [storeDetail, setStoreDetail] = useState()
  const closeModal = (e) => {
    e.stopPropagation()
    setModalOpen(false)
  }

  useEffect(() => {
    if (modalOpen === true) {
      const fetchStoreDetail = async () => {
        setLoading(true)
        try {
          const { data } = await axiosInstance.get(`/api/store/${id}`)
          setStoreDetail(data)
        } catch (e) {
          console.log("--Axios error--")
          console.log(e)
        } finally {
          setLoading(false)
        }
      }
      fetchStoreDetail()
    }
  }, [modalOpen])

  return (
    <li onClick={() => setModalOpen(true)}>
      <div className="cursor-pointer flex flex-col justify-center space-y-3 p-6 border-t border-light-gray">
        <div className="flex justify-between items-center">
          <p className="font-bold">{name}</p>
          <SvgIcon name="map" />
        </div>
        <p>
          {address}, {address_detail}
        </p>
        <p className="text-[#999]">{business_hours}</p>
      </div>

      <Modal open={modalOpen} className="text-start rounded-lg">
        <div className="border-b border-stone-200 py-5">
          <h3 className="font-semibold lg:text-xl px-5 text-stone-500">
            <span className="text-black">매장정보</span>
          </h3>
        </div>

        <ul className="text-xs lg:text-base">
          <li className="border-b border-stone-200">
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-5 px-5">
                지역
              </p>
              {loading ? (
                <p className="animate-pulse w-1/4 lg:w-40 h-3 lg:h-4 bg-stone-200 rounded-full" />
              ) : (
                <p>{storeDetail?.region}</p>
              )}
            </div>
          </li>
          <li className="border-b border-stone-200">
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-5 px-5">
                매장명
              </p>
              {loading ? (
                <p className="animate-pulse w-1/2 lg:w-80 h-3 lg:h-4 bg-stone-200 rounded-full" />
              ) : (
                <p>{storeDetail?.name}</p>
              )}
            </div>
          </li>
          <li className="border-b border-stone-200">
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-5 px-5">
                주소
              </p>
              {loading ? (
                <p className="animate-pulse w-1/2 lg:w-80 h-3 lg:h-4 bg-stone-200 rounded-full" />
              ) : (
                <p>
                  {storeDetail?.address}, {storeDetail?.address_detail}
                </p>
              )}
            </div>
          </li>
          <li className="border-b border-stone-200">
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-5 px-5">
                전화
              </p>
              {loading ? (
                <p className="animate-pulse w-1/3 lg:w-40 h-3 lg:h-4 bg-stone-200 rounded-full" />
              ) : (
                <p>{storeDetail?.contact}</p>
              )}
            </div>
          </li>
          <li className="border-b border-stone-200">
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-10 px-5">
                영업시간
              </p>
              <div className="flex flex-col space-y-2">
                {loading ? (
                  <p className="animate-pulse w-1/2 lg:w-40 h-3 lg:h-4 bg-stone-200 rounded-full" />
                ) : (
                  <p>{storeDetail?.business_hours}</p>
                )}
                <div className="flex items-center space-x-2">
                  <div className="uppercase bg-primary text-white shrink-0 rounded-full w-24 lg:w-32 text-center">
                    Break Time
                  </div>
                  {loading ? (
                    <p className="animate-pulse w-14 lg:w-40 h-3 lg:h-4 bg-stone-200 rounded-full" />
                  ) : (
                    <p>{storeDetail?.break_time ?? "없음"}</p>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  <div className="uppercase bg-primary text-white shrink-0 rounded-full w-24 lg:w-32 text-center">
                    휴일
                  </div>
                  {loading ? (
                    <p className="animate-pulse w-14 lg:w-40 h-3 lg:h-4 bg-stone-200 rounded-full" />
                  ) : (
                    <p>{storeDetail?.holidays ?? "없음"}</p>
                  )}
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="flex items-center space-x-5">
              <p className="w-24 shrink-0 lg:w-40 bg-amber-50 text-center font-semibold py-8 px-5">
                옵션
              </p>
              <ul className="flex flex-wrap gap-3 lg:gap-5">
                {OPTIONS.map(({ name, option }, idx) => (
                  <li
                    key={storeDetail?.name + option + idx}
                    className="flex flex-col items-center space-y-1"
                  >
                    <div
                      className={`p-2 lg:p-3 rounded-full ${storeDetail?.options.includes(option) ? "bg-primary" : "bg-stone-300"}`}
                    >
                      <SvgIcon name={option} />
                    </div>
                    <p className="text-[10px] lg:text-sm">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="border-t border-stone-200 py-3 text-end">
          <button
            onClick={closeModal}
            className="bg-black text-white py-2 px-5 mr-5 text-xs lg:text-base"
          >
            닫기
          </button>
        </div>
      </Modal>
    </li>
  )
}
