export const apiSearchUrl = `${process.env.NEXT_PUBLIC_SERVER_API}`;

export const defaultCoords = {
  lat: 37.572594523923904,
  lng: 126.97577874563281,
};
export const currentPinImage = "/assets/Icon/current_place.svg";
export const cafePinImage = "/assets/Icon/pin.svg";
export const reboundButtonImage = "/assets/Images/location_rebound.png";
export const filterDatas = [
  {
    category: "purpose",
    title: "방문 목적을 알려주세요",
    subTitle: "필수 선택",
    data: [
      "개인작업/노트북",
      "데이트",
      "단체회식",
      "애견동반",
      "가족모임",
      "비즈니스미팅",
      "기념일",
      "친목/나들이",
    ],
  },
  {
    category: "facility",
    title: "어떤 시설을 찾으세요?",
    data: [
      "베리어프리",
      "콘셉트",
      "실내화장실",
      "주차",
      "루프탑",
      "1인석",
      "유아의자",
    ],
  },
  {
    category: "atmosphere",
    title: "어떤 분위기의 카페를 찾으세요?",
    data: [
      "분위기 좋아요",
      "집중이 잘돼요",
      "모던해요",
      "좌석이편해요",
      "대화하기 좋아요",
      "조용해요",
      "이색 분위기에요",
    ],
  },
  {
    category: "menu",
    title: "어떤 메뉴를 찾으세요?",
    data: [
      "아메리카노",
      "민트초코",
      "라떼",
      "아인슈페너",
      "음료",
      "드립커피",
      "차",
      "과일/주스",
    ],
  },
  {
    category: "theme",
    title: "어떤 테마를 찾으세요?",
    data: ["새로오픈", "감성인테리어", "사진맛집", "뷰맛집", "넓은", "복층"],
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
