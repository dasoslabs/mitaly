"use client"

import { useEffect, useRef } from "react"

export default function KakaoMap({
  lat = 37.5642135,
  lng = 127.0016985,
  level = 9,
  list = [],
}) {
  const mapRef = useRef(null) // 지도 인스턴스
  const markersRef = useRef([]) // 마커

  useEffect(() => {
    const initializeMap = () => {
      const mapContainer = document.getElementById("kakaomap")
      const mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level,
      }

      mapRef.current = new kakao.maps.Map(mapContainer, mapOption)
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
  }, [lat, lng, level])

  useEffect(() => {
    if (!mapRef.current) return
    if (!list || list.length < 0) return

    // 마커, 설명 초기화
    markersRef.current.forEach(({ marker, infowindow }) => {
      marker.setMap(null)
      infowindow.close()
    })
    markersRef.current = []

    const map = mapRef.current
    const geocoder = new kakao.maps.services.Geocoder()
    const bounds = new kakao.maps.LatLngBounds()

    const searchAddress = (address, name) => {
      return new Promise((resolve, reject) => {
        geocoder.addressSearch(address, (result, status) => {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
            const marker = new kakao.maps.Marker({
              map,
              position: coords,
            })
            const infowindow = new kakao.maps.InfoWindow({
              content: `<div style="width:200px;text-align:center;padding:6px 0">${name}</div>`,
            })
            infowindow.open(map, marker)
            bounds.extend(coords)

            markersRef.current.push({ marker, infowindow })
            resolve() // 완료
          } else {
            reject(status) // 실패
          }
        })
      })
    }
    Promise.all(
      list.map(({ name, address }) => searchAddress(address, name)),
    ).then(() => {
      map.setBounds(bounds)
    })
  }, [list])

  return <div id="kakaomap" className="w-full h-full" />
}
