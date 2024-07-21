"use client"

import { useEffect } from "react"

export default function KakaoMap({
  lat = 37.5642135,
  lng = 127.0016985,
  level = 8,
  list = [],
}) {
  useEffect(() => {
    const initializeMap = () => {
      const mapContainer = document.getElementById("kakaomap")
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level,
      }

      const map = new kakao.maps.Map(mapContainer, mapOption)

      list.forEach(({ name, address }) => {
        const geocoder = new kakao.maps.services.Geocoder()
        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            })

            const infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:200px;text-align:center;padding:6px 0">${name}</div>`,
            })
            infowindow.open(map, marker)
          }
        })
      })
    }

    if (window.kakao && window.kakao.maps) {
      initializeMap()
    } else {
      const script = document.createElement("script")
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY}&libraries=services&autoload=false`
      script.onload = () => {
        kakao.maps.load(initializeMap)
      }
      document.head.appendChild(script)
    }
  }, [])

  return <div id="kakaomap" className="w-full h-full" />
}
