import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
// import Autoplay from 'embla-carousel-autoplay'

export default function Slider({ children, className = "" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true } /** [Autoplay()] */,
  )

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden max-w-pc m-auto" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <PrevButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
        className="absolute -left-16 top-1/2 transform -translate-y-1/2"
      />
      <NextButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        className="absolute -right-16 top-1/2 transform -translate-y-1/2"
      />
    </div>
  )
}

const usePrevNextButtons = (emblaApi, onButtonClick) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    if (onButtonClick) onButtonClick(emblaApi)
  }, [emblaApi, onButtonClick])

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("reInit", onSelect).on("select", onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

function PrevButton({ children, ...props }) {
  return (
    <button type="button" {...props}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M26 6L12 20L26 34" stroke="black" strokeWidth="3" />
      </svg>
      {children}
    </button>
  )
}

function NextButton({ children, ...restProps }) {
  return (
    <button type="button" {...restProps}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14 6L28 20L14 34" stroke="black" strokeWidth="3" />
      </svg>
      {children}
    </button>
  )
}

export function SliderCard({ children, className, ...props }) {
  return (
    <div
      className={`min-w-0 flex-grow-0 flex-shrink-0 basis-1/4 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
