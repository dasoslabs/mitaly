"use client"

import { useRef, useState } from "react"

import SvgIcon from "@/components/common/SvgIcon"

export default function Home() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <>
      <section>
        <div className="flex items-center justify-center h-screen">
          <div className="relative w-full h-screen">
            <video
              ref={videoRef}
              muted={isMuted}
              src="/home/banner.mp4"
              autoPlay={true}
              loop
              playsInline
              controls={false}
              width="100%"
              height="100%"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-60">
          <h2 className="text-[80px] font-extrabold">
            <p className="text-white">파스타가 생각날 땐</p>
            <p className="text-primary">맛있는 이태리, 미태리!</p>
          </h2>
        </div>
        <button
          onClick={toggleMute}
          className="absolute bottom-12 left-40 text-white flex justify-center items-center space-x-2 border border-white rounded-full py-2 px-4"
        >
          <SvgIcon name="volume" />
          <p>
            { isMuted ? "SOUND ON" : "SOUND OFF"}
          </p>
        </button>
      </section>
    </>
  )
}
