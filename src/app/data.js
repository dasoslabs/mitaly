export const tab = {
  menu: [
    { name: "original", text: "오리지널" },
    { name: "dining", text: "다이닝" },
    { name: "drink-side", text: "음료&사이드" },
  ],
  interior: [
    { name: "original", text: "오리지널", imgAmount: 11 },
    { name: "dining", text: "다이닝", imgAmount: 8 },
  ],
}

export const data = {
  menu: {
    original: [
      {
        name: "시그니처 큐브 스테이크",
        subTitle: "Signature Cube Steak",
        imgUrl: "/menu/steak/1.png",
      },
      {
        name: "로제 맵제 파스타",
        subTitle: "Spicy Rosé Pasta",
        imgUrl: "/menu/pasta/14.png",
      },
      {
        name: "감바스 파스타",
        subTitle: "Gambas Pasta",
        imgUrl: "/menu/pasta/1.png",
      },
      {
        name: "미태리 갈릭 포테이토 피자",
        subTitle: "Mitaly Garlic Potato Pizza",
        imgUrl: "/menu/pizza/4.png",
      },
      {
        name: "해물 짬뽕 파스타",
        subTitle: "Seafood Jjamppong Pasta",
        imgUrl: "/menu/pasta/9.png",
      },
      {
        name: "킹소시지 김치볶음밥",
        subTitle: "King Sausage Kimchi Fried Rice",
        imgUrl: "/menu/rice/3.png",
      },
    ],
    dining: [
      {
        name: "블랙페퍼 목살 스테이크",
        subTitle: "Black Pepper Pork Steak",
        imgUrl: "/menu/steak/3.png",
      },
      {
        name: "쉬림프 바질 크림 파스타",
        subTitle: "Shrimp Basil Cream Pasta",
        imgUrl: "/menu/pasta/18.png",
      },
      {
        name: "스테이크 크림 리조또",
        subTitle: "Steak Cream Risotto",
        imgUrl: "/menu/rice/5.png",
      },
      {
        name: "쉬림프 로제 리조또",
        subTitle: "Shrimp Rosé Risotto",
        imgUrl: "/menu/rice/6.png",
      },
      {
        name: "비프 바질 크림 파스타",
        subTitle: "Beef Basil Cream Pasta",
        imgUrl: "/menu/pasta/19.png",
      },
      {
        name: "치킨텐더 샐러드",
        subTitle: "Chicken Tender Salad",
        imgUrl: "/menu/side/2.png",
      },
    ],
    "drink-side": [
      {
        name: "미태리 가든 샐러드",
        subTitle: "Mitaly Garden Salad",
        imgUrl: "/menu/side/1.png",
      },
      {
        name: "양념감자",
        subTitle: "Seasoned Potatoes",
        imgUrl: "/menu/side/7.png",
      },
      {
        name: "멘보샤",
        subTitle: "Menbosha",
        imgUrl: "/menu/side/8.png",
      },
      {
        name: "치킨 윙&봉",
        subTitle: "Chicken Wing and Stick",
        imgUrl: "/menu/side/9.png",
      },
      {
        name: "샹그리아 하이볼",
        subTitle: "Sangria Highball",
        imgUrl: "/menu/drink/6.png",
      },
      {
        name: "샴페인 하이볼",
        subTitle: "Champagne Highball",
        imgUrl: "/menu/drink/7.png",
      },
    ],
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
      like: 299,
      id: "mitaly_delicious",
      text: "파스타 땡길 땐 묻지도 따지지도 않고 가는 미태리 파스타!\n가격도 너무너무 착한데 메뉴도 푸짐해요!\n파스타, 피자, 리조또 등등 없는게 없는 미태리 꾸욱 추천~👍",
      hashtag: ["미태리파스타", "파스타맛집", "외식맛집"],
    },
    {
      like: 458,
      id: "pretty_pasta_place",
      text: "외관부터 취향 저격인 예쁜 파스타집💛\n가격도 넘 착하고 맛은 말해뭐해~~\n인테리어도, 플레이팅도 넘 예뻐서 모임이나 데이트 코스로도 강추합니다!!",
      hashtag: ["데이트맛집", "분위기맛집", "미태리파스타"],
    },
    {
      like: 524,
      id: "revisit_pasta_spot",
      text: "재방문 의사 100% 진짜 #파스타맛집 찾았어요!! #미태리\n\n#감바스파스타 이렇게 맛있는곳 첨봄🤤 분위기까지 감성 뿜뿜이라 인생샷 남기기에도 좋아요👍👍",
      hashtag: ["파스타맛집", "미태리", "감바스파스타"],
    },
    {
      like: 387,
      id: "family_dining",
      text: "부모님 모시고 방문했는데 #해물짬뽕파스타에 반하셔서\n국물까지 깔끔하게 클리어!🥰\n부모님 모시고 외식하기에도 부담없는 곳이라 너무 좋아요!",
      hashtag: ["가족외식", "미태리파스타"],
    },
    {
      like: 671,
      id: "gourmet_pasta",
      text: "맛있는 파스타와 고급스러운 인테리어로\n눈과 입이 모두 즐거운 곳, #미태리파스타 🍝",
      hashtag: ["맛집추천", "파스타맛집", "핫플추천"],
    },
    {
      like: 732,
      id: "value_for_money",
      text: "요즘같은 고물가 시기에 좋은 재료 듬뿍 들어간 진짜 가성비 파스타!\n미태리파스타! 너 내 맛집이 되라! 🍝🍝",
      hashtag: ["가성비맛집", "가성비파스타", "파스타맛집"],
    },
    {
      like: 456,
      id: "great_value_set_menu",
      text: "원래도 가성비가 좋아서 종종 가는데 세트메뉴 가성비는 더 좋아요!\n웨이팅한 보람이 있는 #파스타맛집 미태리💘",
      hashtag: ["파스타맛집", "미태리"],
    },
    {
      like: 523,
      id: "weekly_visit",
      text: "파스타먹으러 주에 한번씩 꼭 방문하는 곳!\n최고급 엑스트라 버진 올리브 오일만 사용해서 진짜 이태리의 맛이 느껴져요ㅎ\n여기에 가성비까지 갖췄는데 안 갈 이유가 없잖아요~👏👏",
      hashtag: ["맛집추천", "파스타맛집", "감바스파스타", "찐맛템"],
    },
    {
      like: 694,
      id: "family_favorite",
      text: "아이가 파스타 먹고싶대서 방문했는데 맛있다고 다음에 또 오자네요~~\n빵까지 찍어먹을 수 있는 빠네가 울아들 최애 메뉴ㅋㅋ😊\n엄빠도, 아이도 모두 행복한 미태리파스타 가족외식으로 강추에요!",
      hashtag: ["아들취향저격", "가족외식추천", "가성비굿"],
    },
    {
      like: 812,
      id: "star_approved",
      text: "스타도 반한 파스타 맛집! 🍝미태리파스타🍝\n직접 시켜먹었는데 스타뿐만 아니라 저까지 반했습니다ㅎㅎ\n매콤 꾸덕한 로제 파스타에 고소한 우삼겹이 듬뿍 올라가서 완전 든든해요!",
      hashtag: ["로제맵제파스타", "미태리파스타"],
    },
  ],
  banner: [
    {
      title: "매장찾기",
      description: "우리 동네 미태리 매장은 어디 있을까?",
      linkText: "가까운 매장 찾기",
      href: "/store/location",
      className:
        "lg:pl-60 border-b lg:border-b-0 lg:border-r border-light-gray",
    },
    {
      title: "제휴문의",
      description: "제휴와 관련된 문의를 남겨주세요.",
      linkText: "제휴문의 바로가기",
      href: "/community/contact",
      className: "lg:pr-60",
    },
  ],
}
