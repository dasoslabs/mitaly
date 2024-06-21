import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
// import Autoplay from 'embla-carousel-autoplay'

export default function SliderFull({ children, width = "max-w-pc" }) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", loop: true } /** [Autoplay()] */,
  )
  const [selectedIndex, setSelectedIndex] = useState(0)

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop

    resetOrStop()
  }, [])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    onSelect()
  }, [emblaApi, onSelect])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <div className="relative">
      <div className={`overflow-hidden m-auto ${width}`} ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
      <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 flex justify-between items-center bg-white bg-opacity-85 rounded-full p-1 w-[130px] lg:w-[228px]">
        <PrevButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          className="w-6 h-6 lg:w-12 lg:h-12 bg-white rounded-full flex justify-center items-center"
        />
        <div className="flex justify-between items-center text-[#999] space-x-4 text-sm lg:text-base">
          <p className="text-black font-bold">{selectedIndex + 1}</p>
          <p>/</p>
          <p>{children?.length}</p>
        </div>
        <NextButton
          onClick={onNextButtonClick}
          disabled={nextBtnDisabled}
          className="w-6 h-6 lg:w-12 lg:h-12 bg-white rounded-full flex justify-center items-center"
        />
      </div>
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
        className="w-4 lg:w-7"
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
        className="w-4 lg:w-7"
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

export function SliderFullCard({ children, className, ...props }) {
  return (
    <div
      className={`min-w-0 flex-grow-0 flex-shrink-0 basis-full ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
