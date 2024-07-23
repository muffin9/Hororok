export const apiSearchUrl = `${process.env.NEXT_PUBLIC_SERVER_API}`;

export const defaultCoords = {
  lat: 37.572594523923904,
  lng: 126.97577874563281,
};
export const currentPinImage = "/assets/Icon/current_place.svg";
export const cafePinImage = "/assets/Icon/pin.svg";
export const reboundButtonImage = "/assets/Images/location_rebound.png";
export const logoImage = "/assets/Images/logo.png";
export const filterDatas = [
  {
    category: "purpose",
    title: "방문 목적을 알려주세요",
    subTitle: "필수 선택",
    data: [
      "친목/모임",
      "데이트",
      "개인작업/노트북",
      "독서/휴식",
      "비즈니스미팅",
      "가족모임",
      "애견동반",
    ],
  },
  {
    category: "facility",
    title: "어떤 시설을 포함할까요?",
    data: [
      "콘센트",
      "실내화장실",
      "주차",
      "1인석",
      "유아의자",
      "휠체어시설",
      "테라스",
      "도서 구비",
    ],
  },
  {
    category: "atmosphere",
    title: "어떤 분위기를 찾으세요?",
    data: [
      "분위기 좋은",
      "조용한",
      "편한좌석",
      "집중이 잘되는",
      "대화하기 좋은",
      "음악이 좋은",
      "넓은",
    ],
  },
  {
    category: "menu",
    title: "찾는 메뉴가 있나요?",
    data: [
      "아메리카노",
      "라떼",
      "오트라떼",
      "아인슈페너",
      "디카페인",
      "드립커피",
      "시그니처메뉴",
      "베이커리",
      "밀크티",
      "프라푸치노",
      "차(Tea)",
      "아이스크림/빙수",
      "전통디저트",
      "비건메뉴",
    ],
  },
  {
    category: "theme",
    title: "원하는 테마가 있나요?",
    data: [
      "신상카페",
      "따뜻한 인테리어",
      "사진맛집",
      "뷰맛집",
      "개인카페",
      "주택개조",
      "웰컴키즈존",
      "케어키즈존",
    ],
  },
];

export const reviewFilterDatas = [
  {
    category: "purpose",
    title: "방문 목적을 알려주세요",
    subTitle: "필수 선택",
    data: [
      "친목/모임",
      "데이트",
      "개인작업/노트북",
      "독서/휴식",
      "비즈니스미팅",
      "가족모임",
      "애견동반",
    ],
  },
  {
    category: "facility",
    title: "어떤 시설이 좋았나요?",
    data: [
      "콘센트",
      "실내화장실",
      "주차",
      "1인석",
      "유아의자",
      "휠체어시설",
      "테라스",
      "도서 구비",
    ],
  },
  {
    category: "atmosphere",
    title: "카페의 분위기는 어땠나요?",
    data: [
      "분위기 좋은",
      "조용한",
      "편한좌석",
      "집중이 잘되는",
      "대화하기 좋은",
      "음악이 좋은",
      "넓은",
    ],
  },
  {
    category: "menu",
    title: "추천하고 싶은 메뉴를 알려주세요.",
    subTitle: "최대 3개 선택",
    data: [
      "아메리카노",
      "라떼",
      "오트라떼",
      "아인슈페너",
      "디카페인",
      "드립커피",
      "시그니처메뉴",
      "베이커리",
      "밀크티",
      "프라푸치노",
      "차(Tea)",
      "아이스크림/빙수",
      "전통디저트",
      "비건메뉴",
    ],
  },
  {
    category: "theme",
    title: "카페의 테마를 알려주세요.",
    data: [
      "신상카페",
      "따뜻한 인테리어",
      "사진맛집",
      "뷰맛집",
      "개인카페",
      "주택개조",
      "웰컴키즈존",
      "케어키즈존",
    ],
  },
];

export const timeDatas = [
  {
    id: "morning",
    title: "오전",
    timeData: [
      {
        id: 1,
        time: { hour: "09", minute: "00", second: "00", nano: "00" },
        name: "9:00",
      },
      {
        id: 2,
        time: { hour: "09", minute: "30", second: "00", nano: "00" },
        name: "9:30",
      },
      {
        id: 3,
        time: { hour: "10", minute: "00", second: "00", nano: "00" },
        name: "10:00",
      },
      {
        id: 4,
        time: { hour: "10", minute: "30", second: "00", nano: "00" },
        name: "10:30",
      },
      {
        id: 5,
        time: { hour: "11", minute: "00", second: "00", nano: "00" },
        name: "11:00",
      },
      {
        id: 6,
        time: { hour: "11", minute: "30", second: "00", nano: "00" },
        name: "11:30",
      },
      {
        id: 7,
        time: { hour: "12", minute: "00", second: "00", nano: "00" },
        name: "12:00",
      },
      {
        id: 8,
        time: { hour: "12", minute: "30", second: "00", nano: "00" },
        name: "12:30",
      },
    ],
  },
  {
    id: "afternoon",
    title: "오후",
    timeData: [
      {
        id: 9,
        time: { hour: "13", minute: "00", second: "00", nano: "00" },
        name: "13:00",
      },
      {
        id: 10,
        time: { hour: "13", minute: "30", second: "00", nano: "00" },
        name: "13:30",
      },
      {
        id: 11,
        time: { hour: "14", minute: "00", second: "00", nano: "00" },
        name: "14:00",
      },
      {
        id: 12,
        time: { hour: "14", minute: "30", second: "00", nano: "00" },
        name: "14:30",
      },
      {
        id: 13,
        time: { hour: "15", minute: "00", second: "00", nano: "00" },
        name: "15:00",
      },
      {
        id: 14,
        time: { hour: "15", minute: "30", second: "00", nano: "00" },
        name: "15:30",
      },
      {
        id: 15,
        time: { hour: "16", minute: "00", second: "00", nano: "00" },
        name: "16:00",
      },
      {
        id: 16,
        time: { hour: "16", minute: "30", second: "00", nano: "00" },
        name: "16:30",
      },
      {
        id: 17,
        time: { hour: "17", minute: "00", second: "00", nano: "00" },
        name: "17:00",
      },
      {
        id: 18,
        time: { hour: "17", minute: "30", second: "00", nano: "00" },
        name: "17:30",
      },
      {
        id: 19,
        time: { hour: "18", minute: "00", second: "00", nano: "00" },
        name: "18:00",
      },
      {
        id: 20,
        time: { hour: "18", minute: "30", second: "00", nano: "00" },
        name: "18:30",
      },
    ],
  },
  {
    id: "night",
    title: "야간",
    timeData: [
      {
        id: 21,
        time: { hour: "19", minute: "00", second: "00", nano: "00" },
        name: "19:00",
      },
      {
        id: 22,
        time: { hour: "19", minute: "30", second: "00", nano: "00" },
        name: "19:30",
      },
      {
        id: 23,
        time: { hour: "20", minute: "00", second: "00", nano: "00" },
        name: "20:00",
      },
      {
        id: 24,
        time: { hour: "20", minute: "30", second: "00", nano: "00" },
        name: "20:30",
      },
      {
        id: 25,
        time: { hour: "21", minute: "00", second: "00", nano: "00" },
        name: "21:00",
      },
      {
        id: 26,
        time: { hour: "21", minute: "30", second: "00", nano: "00" },
        name: "21:30",
      },
      {
        id: 27,
        time: { hour: "22", minute: "00", second: "00", nano: "00" },
        name: "22:00",
      },
      {
        id: 28,
        time: { hour: "22", minute: "30", second: "00", nano: "00" },
        name: "22:30",
      },
      {
        id: 29,
        time: { hour: "23", minute: "00", second: "00", nano: "00" },
        name: "23:00",
      },
      {
        id: 30,
        time: { hour: "23", minute: "30", second: "00", nano: "00" },
        name: "23:30",
      },
      {
        id: 31,
        time: { hour: "24", minute: "00", second: "00", nano: "00" },
        name: "24:00",
      },
    ],
  },
];

export const planCafeHeader = {
  similarCafes: {
    title: "딱 맞는 카페는 없지만, 비슷한 카페를 찾았어요!",
    subTitle:
      "방문 지역, 날짜, 시간은 동일해요.\n조금 더 걷거나 조건이 다를 수 있어요.",
  },
  recommendCafes: {
    title: "아쉽지만, 찾는 카페가 없어요.\n이런 카페는 어때요?",
    subTitle: "에서 별점이 높은 카페",
  },
  matchSimilarCafes: {
    title: "비슷한 카페",
    subTitle:
      "방문 지역, 날짜, 시간은 동일해요.\n조금 더 걷거나 조건이 다를 수 있어요.",
  },
};

export const combinationIcons = [
  { id: "combination_notebook", type: "notebook" },
  { id: "combination_seat", type: "seat" },
  { id: "combination_coffee2", type: "coffee2" },
  { id: "combination_heart", type: "heart" },
  { id: "combination_book", type: "book" },
  { id: "combination_bakery", type: "bakery" },
];

export const onBoardingTexts = [
  {
    step: 0,
    title: "키워드로 검색",
    description: [
      "어떤 카페를 찾고 있나요?",
      "내 취향에 맞는 카페를 키워드로 찾아보세요.",
    ],
    imageUrl: "/assets/Images/onboarding1.png",
  },
  {
    step: 1,
    title: "카페 방문 계획하기",
    description: [
      "어느 동네를 방문할 예정인가요?",
      "내 일정, 도보 거리, 취향에 맞춰 찾아줄게요.",
    ],
    imageUrl: "/assets/Images/onboarding2.png",
  },

  {
    step: 2,
    title: "리뷰로 보는 대표 키워드",
    description: [
      "카페를 설명하는 키워드를 직접 남겨보세요!",
      "나의 리뷰가 도움이 될 거예요.",
    ],
    imageUrl: "/assets/Images/onboarding3.png",
  },
];

export const sampleMenuImageUrl =
  "http://d2jel1wui0sscy.cloudfront.net/resized/menu-thumbnail/e9c91ff8-e4a1-4040-8bdd-e7b405b79679.png";
