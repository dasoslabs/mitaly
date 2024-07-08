import { useEffect } from "react"

export default function VideoPlayer() {
  useEffect(() => {
    const tag = document.createElement("script")
    tag.src = "https://www.youtube.com/iframe_api"
    const firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    window.onYouTubeIframeAPIReady = () => {
      new window.YT.Player("player", {
        height: "100%",
        width: "100%",
        videoId: "S8xmkLL6KVc",
        playerVars: {
          autoplay: 1,
          controls: 0,
          autoMuted: 1,
        },
        events: {
          onReady: onPlayerReady,
        },
      })
    }

    const onPlayerReady = (event) => {
      event.target.playVideo()
    }

    return () => {
      delete window.onYouTubeIframeAPIReady
    }
  }, [])

  return <div id="player" />
}
