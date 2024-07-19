"use client"

import { useEffect, useState } from "react"
import ReactPlayer from "react-player/youtube"

export default function VideoPlayer({ muted = true }) {
  const [isWindow, setIsWindow] = useState(false)

  useEffect(() => {
    setIsWindow(true)
  }, [])

  return (
    isWindow && (
      <div className="w-full h-screen overflow-hidden">
        <div className="-ml-32 lg:ml-0 w-[1800px] h-full">
          <ReactPlayer
            url="https://www.youtube-nocookie.com/embed/S8xmkLL6KVc?si=G6dYXM2bwotV_cBv"
            playing
            loop
            controls={false}
            muted={muted}
            width="100%"
            height="100vh"
          />
        </div>
      </div>
    )
  )
}
