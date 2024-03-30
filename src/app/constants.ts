export const apiSearchUrl = `${process.env.NEXT_PUBLIC_SERVER_API}`;

export const defaultCoords = {
  lat: 37.572594523923904,
  lng: 126.97577874563281,
};
export const pinImage = "/assets/Images/current_place.png";
export const filterDatas = [
  {
    id: "purpose",
    title: "방문 목적을 알려주세요",
    subTitle: "필수 선택",
    data: [
      { id: "개인작업/노트북", name: "개인작업/노트북" },
      { id: "데이트", name: "데이트" },
      { id: "애견동반", name: "애견동반" },
      { id: "기념일", name: "기념일" },
      { id: "회식", name: "회식" },
      { id: "비즈니스미팅", name: "비즈니스미팅" },
    ],
  },
  {
    id: "facility",
    title: "어떤 시설을 찾으세요?",
    data: [
      { id: "베리어프리", name: "베리어프리" },
      { id: "실내화장실", name: "실내화장실" },
      { id: "루프탑", name: "루프탑" },
      { id: "1인석", name: "1인석" },
      { id: "콘센트", name: "콘센트" },
      { id: "주차", name: "주차" },
      { id: "유아의자", name: "유아의자" },
      { id: "WIFI", name: "WIFI" },
    ],
  },
  {
    id: "atmosphere",
    title: "어떤 분위기의 카페를 찾으세요?",
    data: [
      { id: "분위기 좋아요", name: "분위기 좋아요" },
      { id: "집중이 잘돼요", name: "집중이 잘돼요" },
      { id: "모던해요", name: "모던해요" },
      { id: "좌석이편해요", name: "좌석이편해요" },
      { id: "대화하기 좋아요", name: "대화하기 좋아요" },
      { id: "조용해요", name: "조용해요" },
      { id: "이색 분위기에요", name: "이색 분위기에요" },
    ],
  },
  {
    id: "menu",
    title: "어떤 메뉴를 찾으세요?",
    data: [
      { id: "아메리카노", name: "아메리카노" },
      { id: "민트초코", name: "민트초코" },
      { id: "라떼", name: "라떼" },
      { id: "아인슈페너", name: "아인슈페너" },
      { id: "음료", name: "음료" },
      { id: "드립커피", name: "드립커피" },
      { id: "차", name: "차" },
      { id: "과일/주스", name: "과일/주스" },
    ],
  },
  {
    id: "theme",
    title: "어떤 테마를 찾으세요?",
    data: [
      { id: "새로오픈", name: "새로오픈" },
      { id: "감성인테리어", name: "감성인테리어" },
      { id: "사진맛집", name: "사진맛집" },
      { id: "뷰맛집", name: "뷰맛집" },
      { id: "넓은", name: "넓은" },
      { id: "복층", name: "복층" },
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
        time: { hour: 9, minute: 0, second: 0, nano: 0 },
        name: "9:00",
      },
      {
        id: 2,
        time: { hour: 9, minute: 30, second: 0, nano: 0 },
        name: "9:30",
      },
      {
        id: 3,
        time: { hour: 10, minute: 0, second: 0, nano: 0 },
        name: "10:00",
      },
      {
        id: 4,
        time: { hour: 10, minute: 30, second: 0, nano: 0 },
        name: "10:30",
      },
      {
        id: 5,
        time: { hour: 11, minute: 0, second: 0, nano: 0 },
        name: "11:00",
      },
      {
        id: 6,
        time: { hour: 11, minute: 30, second: 0, nano: 0 },
        name: "11:30",
      },
      {
        id: 7,
        time: { hour: 12, minute: 0, second: 0, nano: 0 },
        name: "12:00",
      },
      {
        id: 8,
        time: { hour: 12, minute: 30, second: 0, nano: 0 },
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
        time: { hour: 13, minute: 0, second: 0, nano: 0 },
        name: "13:00",
      },
      {
        id: 10,
        time: { hour: 13, minute: 30, second: 0, nano: 0 },
        name: "13:30",
      },
      {
        id: 11,
        time: { hour: 14, minute: 0, second: 0, nano: 0 },
        name: "14:00",
      },
      {
        id: 12,
        time: { hour: 14, minute: 30, second: 0, nano: 0 },
        name: "14:30",
      },
      {
        id: 13,
        time: { hour: 15, minute: 0, second: 0, nano: 0 },
        name: "15:00",
      },
      {
        id: 14,
        time: { hour: 15, minute: 30, second: 0, nano: 0 },
        name: "15:30",
      },
      {
        id: 15,
        time: { hour: 16, minute: 0, second: 0, nano: 0 },
        name: "16:00",
      },
      {
        id: 16,
        time: { hour: 16, minute: 30, second: 0, nano: 0 },
        name: "16:30",
      },
      {
        id: 17,
        time: { hour: 17, minute: 0, second: 0, nano: 0 },
        name: "17:00",
      },
      {
        id: 18,
        time: { hour: 17, minute: 30, second: 0, nano: 0 },
        name: "17:30",
      },
      {
        id: 19,
        time: { hour: 18, minute: 0, second: 0, nano: 0 },
        name: "18:00",
      },
      {
        id: 20,
        time: { hour: 18, minute: 30, second: 0, nano: 0 },
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
        time: { hour: 19, minute: 0, second: 0, nano: 0 },
        name: "19:00",
      },
      {
        id: 22,
        time: { hour: 19, minute: 30, second: 0, nano: 0 },
        name: "19:30",
      },
      {
        id: 23,
        time: { hour: 20, minute: 0, second: 0, nano: 0 },
        name: "20:00",
      },
      {
        id: 24,
        time: { hour: 20, minute: 30, second: 0, nano: 0 },
        name: "20:30",
      },
      {
        id: 25,
        time: { hour: 21, minute: 0, second: 0, nano: 0 },
        name: "21:00",
      },
      {
        id: 26,
        time: { hour: 21, minute: 30, second: 0, nano: 0 },
        name: "21:30",
      },
      {
        id: 27,
        time: { hour: 22, minute: 0, second: 0, nano: 0 },
        name: "22:00",
      },
      {
        id: 28,
        time: { hour: 22, minute: 30, second: 0, nano: 0 },
        name: "22:30",
      },
      {
        id: 29,
        time: { hour: 23, minute: 0, second: 0, nano: 0 },
        name: "23:00",
      },
      {
        id: 30,
        time: { hour: 23, minute: 30, second: 0, nano: 0 },
        name: "23:30",
      },
      {
        id: 31,
        time: { hour: 24, minute: 0, second: 0, nano: 0 },
        name: "24:00",
      },
    ],
  },
];
