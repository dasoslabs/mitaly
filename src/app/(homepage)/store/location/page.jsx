"use client"

import { useEffect, useRef, useState } from "react"
import StorePageLayout from "@/components/layout/StorePageLayout"

import axiosInstance from "@/libs/axios"
import SvgIcon from "@/components/common/SvgIcon"
import KakaoMap from "@/components/common/Map/KakaoMap"
import { regions } from "./data"

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
            {storeList.map(
              ({ name, address, address_detail, business_hours }, idx) => (
                <li
                  key={name + idx}
                  className="flex flex-col justify-center space-y-3 p-6 border-t border-light-gray"
                >
                  <div className="flex justify-between items-center">
                    <p className="font-bold">{name}</p>
                    <SvgIcon name="map" />
                  </div>
                  <p>
                    {address}, {address_detail}
                  </p>
                  <p className="text-[#999]">{business_hours}</p>
                </li>
              ),
            )}
          </ul>
        </section>

        <section className="w-8/12 h-[calc(100vh-152px)] hidden lg:block">
          {/* <KakaoMap list={storeList} /> */}
        </section>
      </div>
    </StorePageLayout>
  )
}
