"use client"

import { useEffect, useRef } from "react"

export default function VideoPlayer({ muted = true }) {
  const playerRef = useRef(null)

  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: "S8xmkLL6KVc",
        playerVars: {
          autoplay: 1,
          controls: 0,
          mute: muted ? 1 : 0,
          loop: 1,
          fs: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
        },
      })
    }

    const onPlayerReady = (event) => {
      event.target.playVideo()
    }

    const onPlayerStateChange = (event) => {
      if (event.data === window.YT.PlayerState.ENDED) {
        event.target.playVideo()
      }
    }

    return () => {
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  useEffect(() => {
    if (playerRef.current) {
      if (muted) {
        playerRef.current.mute()
      } else {
        playerRef.current.unMute()
      }
    }
  }, [muted])

  return <div id="player" />
}
