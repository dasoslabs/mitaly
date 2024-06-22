"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"

import SvgIcon from "@/components/common/SvgIcon"
import Slider, { SliderCard } from "@/components/common/Slider"
import SliderFull, { SliderFullCard } from "@/components/common/SliderFull"
import ShowMoreLinkButton from "@/components/common/Button/ShowMoreLinkButton"
import ChipButton from "@/components/common/Button/ChipButton"

const tab = {
  menu: [
    { name: "original", text: "오리지널" },
    { name: "dining", text: "다이닝" },
    { name: "drink-side", text: "음료&사이드" },
  ],
  interior: [
    { name: "original", text: "오리지널" },
    { name: "dining", text: "다이닝" },
  ],
}

const data = {
  menu: {
    original: [
      {
        name: "베이컨 토마토 파스터",
        subTitle: "Bacon Tomato Pasta",
        imgUrl: "",
        imgAlt: "",
      },
      {
        name: "로제맵제 파스타",
        subTitle: "Spicy Rose pasta",
        imgUrl: "",
        imgAlt: "",
      },
      {
        name: "감바스 파스타",
        subTitle: "Gambas Pasta",
        imgUrl: "",
        imgAlt: "",
      },
      {
        name: "베이컨 크림 파스타",
        subTitle: "Bacon Cream Pasta",
        imgUrl: "",
        imgAlt: "",
      },
    ],
    dining: [],
    "drink-side": [],
  },
  interior: {
    original: [],
    dining: [],
  },
  startup: [
    {
      text: "가장 완벽한\n소자본 창업",
      imgUrl: "/home/wallet.png",
      imgAlt: "지갑 이미지",
    },
    {
      text: "365일\n매일매일이 성수기!",
      imgUrl: "/home/notice.png",
      imgAlt: "알림 이미지",
    },
    {
      text: "누구나 할 수 있는\n쉬운 창업",
      imgUrl: "/home/user.png",
      imgAlt: "사람 이미지",
    },
    {
      text: "앞으로가\n더 기대되는 창업!",
      imgUrl: "/home/analytics.png",
      imgAlt: "그래프 이미지",
    },
  ],
  review: [
    {
      imgUrl: "/home/review01.png",
      imgAlt: "리뷰 이미지",
      like: 299,
      id: "mitaly_delicious",
      text: "맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요...",
    },
    {
      imgUrl: "/home/review02.png",
      imgAlt: "리뷰 이미지",
      like: 299,
      id: "mitaly_delicious",
      text: "맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요...",
    },
    {
      imgUrl: "/home/review03.png",
      imgAlt: "리뷰 이미지",
      like: 299,
      id: "mitaly_delicious",
      text: "맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요 맛있어요...",
    },
  ],
  banner: [
    {
      title: "매장찾기",
      description: "우리 동네 미태리 매장은 어디 있을까?",
      linkText: "가까운 매장 찾기",
      href: "#",
      className: "pl-60 border-r border-light-gray",
    },
    {
      title: "제휴문의",
      description: "제휴와 관련된 문의를 남겨주세요.",
      linkText: "제휴문의 바로가기",
      href: "#",
      className: "pr-60",
    },
  ],
}

export default function Home() {
  const videoRef = useRef(null)
  const [isMuted, setIsMuted] = useState(true)
  const [menuTab, setMenuTab] = useState(tab.menu[0].name)
  const [interiorTab, setInteriorTab] = useState(tab.interior[0].name)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(videoRef.current.muted)
    }
  }

  return (
    <>
      {/* 배너 */}
      <section className="relative" id="main_banner">
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
        <div className="absolute top-1/2 transform -translate-y-1/2 left-6 lg:left-60">
          <div className="text-[40px] lg:text-[80px] font-extrabold">
            <h2 className="text-white flex flex-col lg:flex-row lg:space-x-1">
              <p>파스타가</p>
              <p>생각날 땐</p>
            </h2>
            <h2 className="text-primary flex flex-col lg:flex-row lg:space-x-1">
              <p>맛있는 이태리,</p>
              <p>미태리!</p>
            </h2>
          </div>
        </div>
        <button
          onClick={toggleMute}
          className="absolute bottom-20 left-6 lg:left-40 text-white flex justify-center items-center space-x-2 border border-white rounded-full py-2 px-4"
        >
          <SvgIcon name="volume" />
          <p className="text-xs lg:text-base">
            {isMuted ? "SOUND ON" : "SOUND OFF"}
          </p>
        </button>
      </section>

      {/* 소개 */}
      <section className="relative">
        <Image
          width="1920"
          height="1151"
          src="/home/background.png"
          alt="배경 사진"
          quality={100}
          className="hidden lg:block"
        />

        {/* TODO 사이즈 큰 이미지 적용 */}
        <Image
          width="1080"
          height="1800"
          src="/home/background-mobile.png"
          alt="배경 사진"
          quality={100}
          className="lg:hidden"
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col space-y-6 lg:space-y-12 items-center justify-center text-center">
          <div className="flex flex-col space-y-4 lg:space-y-8">
            <h3 className="font-extrabold lg:text-2xl">SMILE with mitaly 😄</h3>
            <h2 className="text-2xl lg:text-5xl leading-8 lg:leading-[68px]">
              <p className="font-extralight">4년 이상 연구한 맛과 가격</p>
              <div className="flex flex-col lg:flex-row lg:space-x-1 font-black">
                <p>누구나 부담 없이, 더 맛있는</p>
                <p>이태리를 즐길 수 있도록!</p>
              </div>
            </h2>
          </div>
          <div className="text-sm lg:text-xl">
            <div className="flex flex-col lg:flex-row lg:space-x-1">
              <p>미태리는 100% 이탈리아산 면과</p>
              <p>최고급 엑스트라 버진 올리브오일만을 사용합니다.</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-1">
              <p>언제, 어디서, 누구와 함께 즐겨도</p>
              <p>항상 만족스러운 한끼를 완성시켜 드리겠습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 메뉴 */}
      <section className="py-16 lg:py-40 flex flex-col justify-center items-center space-y-6 lg:space-y-12">
        <div className="flex flex-col space-y-4 lg:space-y-8 text-center">
          <h3 className="font-extrabold lg:text-2xl">ENJOY with mitaly 😎</h3>
          <h2 className="text-2xl lg:text-5xl leading-8 lg:leading-[68px]">
            <p className="font-extralight">남녀노소 좋아하는</p>
            <div className="flex flex-col lg:flex-row lg:space-x-1 font-black">
              <p>미태리만의 시그니처 메뉴를</p>
              <p>소개합니다.</p>
            </div>
          </h2>
        </div>

        <div className="w-full px-6 flex flex-col justify-center items-center space-y-10">
          <ul className="flex justify-between lg:justify-center items-center">
            {tab.menu.map(({ name, text }) => (
              <li key={name}>
                <ChipButton
                  onClick={() => setMenuTab(name)}
                  isSelected={menuTab === name}
                  className="w-full"
                >
                  {text}
                </ChipButton>
              </li>
            ))}
          </ul>

          {/* 슬라이드 */}
          <Slider className="hidden lg:block">
            {[
              ...data.menu[menuTab],
              ...data.menu[menuTab],
              ...data.menu[menuTab],
            ].map(({ name, subTitle, imgUrl, imgAlt }, idx) => (
              <SliderCard key={name + idx} className="text-center">
                <div className="bg-bg-gray w-[342px] h-64 rounded-2xl"></div>
                <p className="text-xl mt-4 mb-2">{name}</p>
                <p className="text-[#999]">{subTitle}</p>
              </SliderCard>
            ))}
          </Slider>

          <ul className="w-full grid grid-cols-2 gap-4 text-center lg:hidden">
            {[
              ...data.menu[menuTab],
              ...data.menu[menuTab],
              ...data.menu[menuTab],
              ...data.menu[menuTab],
            ]
              .slice(0, 4)
              .map(({ name, subTitle }, idx) => (
                <li key={name + idx}>
                  <div className="bg-bg-gray aspect-video rounded-2xl"></div>
                  <p className="text-sm lg:text-xl mt-4 mb-1 lg:mb-2">{name}</p>
                  <p className="text-[13px] lg:text-base text-[#999]">
                    {subTitle}
                  </p>
                </li>
              ))}
          </ul>

          <ShowMoreLinkButton href="#">메뉴 더보기</ShowMoreLinkButton>
        </div>
      </section>

      {/* 인테리어 */}
      <section className="py-16 lg:py-40 px-6 lg:px-0">
        <div className="flex flex-col justify-center items-center space-y-6 lg:sspace-y-12 text-center">
          <div className="flex flex-col space-y-4 lg:space-y-8">
            <h3 className="font-extrabold lg:text-2xl">
              HEALING with mitaly 😎
            </h3>
            <h2 className="text-2xl lg:text-5xl leading-8 lg:leading-[68px]">
              <p className="font-extralight">미태리 디자인 연구소</p>
              <p className="font-black">매일매일 또 오고 싶은 인테리어</p>
            </h2>
          </div>
          <div className="text-sm lg:text-xl">
            <div className="flex flex-col lg:flex-row lg:space-x-1">
              <p>친근하고 심플한 디자인의 오리지널 스토어, </p>
              <p>고급스럽고 화려한 디자인의 다이닝 스토어</p>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-1 ">
              <p>두 가지 종류의 인테리어로 고객들이 편안하고 만족스럽게</p>
              <p>식사를 즐길 수 있는 미태리의 공간을 소개합니다.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-10 mt-10">
          <ul className="flex justify-center items-center">
            {tab.interior.map(({ name, text }) => (
              <li key={name}>
                <ChipButton
                  onClick={() => setInteriorTab(name)}
                  isSelected={interiorTab === name}
                >
                  {text}
                </ChipButton>
              </li>
            ))}
          </ul>

          <SliderFull>
            {Array(17)
              .fill(0)
              .map((_, idx) => (
                <SliderFullCard key={"image" + idx}>
                  <Image
                    width="1440"
                    height="810"
                    src="/home/interior01.png"
                    alt="인테리어 이미지"
                  />
                </SliderFullCard>
              ))}
          </SliderFull>
        </div>
      </section>

      {/* 가맹점 문의 */}
      <section className="py-40 bg-primary">
        <div className="flex flex-col justify-center items-center space-y-12 text-center mb-12">
          <div className="flex flex-col space-y-8">
            <h3 className="font-extrabold text-2xl">START with mitaly 😎</h3>
            <h2 className="text-5xl leading-[68px]">
              <p className="font-extralight">가맹점이 살아야 본사가 산다!</p>
              <p className="font-black">미태리 가맹점 문의</p>
            </h2>
          </div>
          <div className="text-xl">
            <p>
              미태리는 4년 이상 끊임없는 연구개발을 통해 독보적인 맛과 퀄리티,
              효율적인 운영 시스템을 구축했습니다.
            </p>
            <p>탄탄한 경쟁력으로 안정적인 창업을 시작해 보세요.</p>
          </div>
          <Link
            href="#"
            className="py-2 px-5 flex justify-center items-center border border-light-gray rounded-full font-bold bg-white"
          >
            <p>가맹문의 바로가기</p>
            <SvgIcon name="arrow-right" />
          </Link>
        </div>

        <ul className="max-w-pc m-auto flex justify-between items-center space-x-6">
          {data.startup.map(({ text, imgUrl, imgAlt }) => (
            <li
              key={text}
              className="bg-white rounded-2xl py-10 px-6 flex flex-col items-center justify-between space-y-8"
            >
              <Image
                width="294"
                height="240"
                src={imgUrl}
                alt={imgAlt}
                quality={100}
              />
              <p className="flex space-x-1 text-2xl">
                {text.split("\n").map((word, idx) => (
                  <span key={word}>
                    {text.split("\n").length - 1 === idx ? (
                      <b>{word}</b>
                    ) : (
                      <span>{word}</span>
                    )}
                  </span>
                ))}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {/* 리뷰 */}
      <section className="py-40 white relative">
        <div className="flex flex-col justify-center items-center space-y-12 text-center mb-12">
          <div className="flex flex-col space-y-8">
            <h3 className="font-extrabold text-2xl">PLAY with mitaly 😎</h3>
            <h2 className="text-5xl leading-[68px]">
              <p className="font-extralight">많은 분들이 인정한 미태리</p>
              <p className="font-black">Shall We MITALY?</p>
            </h2>
          </div>
          <p className="text-xl">맛과 가격, 분위기까지 모든 게 맛집 그 자체!</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Slider>
            {[...data.review, ...data.review].map(
              ({ imgUrl, imgAlt, like, id, text }, idx) => (
                <SliderCard
                  key={text.slice(0, 3) + idx}
                  className="max-w-[464px] bg-white rounded-2xl flex flex-col justify-between border border-light-gray basis-1/3 ml-6"
                >
                  <Image
                    width="464"
                    height="320"
                    src={imgUrl}
                    alt={imgAlt}
                    quality={100}
                  />
                  <div className="p-6">
                    <div className="flex space-x-4 mb-5">
                      <SvgIcon name="heart" />
                      <SvgIcon name="chat" />
                      <SvgIcon name="send" />
                    </div>
                    <div>
                      <p className="font-bold">좋아요 {like}개</p>
                      <p>
                        <span className="font-bold mr-1">{id}</span>
                        <span>{text}</span>
                      </p>
                    </div>
                  </div>
                </SliderCard>
              ),
            )}
          </Slider>
        </div>
      </section>

      {/* 매장찾기, 제휴문의 */}
      <section>
        <ul className="flex justify-center items-center border-t border-light-gray">
          {data.banner.map(
            ({ title, description, linkText, href, className }) => (
              <li
                key={title}
                className={`w-1/2 text-xl flex flex-col justify-center items-center space-y-12 py-20 ${className}`}
              >
                <div className="flex flex-col justify-center items-center space-y-8">
                  <h3 className="font-black text-[32px]">{title}</h3>
                  <p>{description}</p>
                </div>
                <Link
                  href={href}
                  className="py-2 px-5 flex justify-center items-center border border-light-gray rounded-full font-bold bg-white"
                >
                  <p>{linkText}</p>
                  <SvgIcon name="arrow-right" />
                </Link>
              </li>
            ),
          )}
        </ul>
      </section>

      {/* 플로팅 버튼 */}
      <article className="hidden lg:block fixed right-10 bottom-10 flex flex-col space-y-6">
        <Link
          href="#"
          className="w-20 h-20 rounded-full bg-white flex flex-col justify-center items-center text-xs font-bold space-y-1 shadow-lg"
        >
          <SvgIcon name="message" />
          <p>상담하기</p>
        </Link>
        <Link
          href="#"
          className="w-20 h-20 rounded-full bg-primary flex flex-col justify-center items-center text-xs font-bold space-y-1 shadow-lg"
        >
          <SvgIcon name="call" />
          <p>가맹문의</p>
        </Link>
      </article>
    </>
  )
}
