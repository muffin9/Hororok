import Image from "next/image";

const iconUrls = {
  logo: "/assets/Icon/logo.png",
  recommend: "/assets/Icon/recommend.svg",
  login: "/assets/Icon/login.svg",
  marker: "/assets/Icon/marker.svg",
  photo: "/assets/Icon/photo.svg",
  star: "/assets/Icon/star.svg",
  starEmpty: "/assets/Icon/star_empty.svg",
  arrow_left: "/assets/Icon/arrow_left.svg",
  arrow_left_white: "/assets/Icon/arrow_left_white.svg",
  arrow_right: "/assets/Icon/arrow_right.svg",
  arrow_under: "/assets/Icon/arrow_under.svg",
  arrow_under_hover: "/assets/Icon/arrow_under_hover.svg",
  arrow_up: "/assets/Icon/arrow_up.svg",
  bookmark: "/assets/Icon/bookmark.svg",
  bookmark_white: "/assets/Icon/bookmark_white.svg",
  bookmark_check: "/assets/Icon/bookmark_check.svg",
  share: "/assets/Icon/share.svg",
  share_hover: "/assets/Icon/share_hover.svg",
  share_white: "/assets/Icon/share_white.svg",
  person: "/assets/Icon/person.svg",
  check: "/assets/Icon/ic_check.svg",
  close: "/assets/Icon/ic_close.svg",
  edit: "/assets/Icon/edit.svg",
  thumb: "/assets/Icon/icon_thumb.svg",
  calendar: "/assets/Icon/icon_calendar.svg",
  account: "/assets/Icon/icon_account.svg",
  call: "/assets/Icon/icon_call.svg",
  clock: "/assets/Icon/icon_clock.svg",
  refresh: "/assets/Icon/refresh.svg",
  filter: "/assets/Icon/ic_filtering.svg",
  camera: "/assets/Icon/ic_camera.svg",
  review: "/assets/Icon/review.svg",
  kakao: "/assets/Icon/kakao.svg",
  apple: "/assets/Icon/apple.svg",
  google: "/assets/Icon/google.svg",
  naver: "/assets/Icon/naver.svg",
  plan: "/assets/Icon/plan.svg",
  re_plan: "/assets/Icon/re-plan.svg",
  info: "/assets/Icon/ic_info.svg",
  question: "/assets/Icon/ic_question.svg",
  coffee: "/assets/Icon/ic_coffee.svg",
  map: "/assets/Icon/ic_map.svg",
  trash: "/assets/Icon/ic_trash.svg",
  defaultProfile: "/assets/Icon/default_profile.svg",
  plus: "/assets/Icon/ic_plus.svg",
  notebook: "/assets/Icon/ic_notebook.svg",
  bakery: "/assets/Icon/ic_bakery.svg",
  book: "/assets/Icon/ic_book.svg",
  heart: "/assets/Icon/ic_heart.svg",
  seat: "/assets/Icon/ic_seat.svg",
  coffee2: "/assets/Icon/ic_coffee2.svg",
  glass: "/assets/Icon/ic_glass.svg",
  setting: "/assets/Icon/ic_setting.svg",
};

export type IconType =
  | "logo"
  | "recommend"
  | "login"
  | "marker"
  | "photo"
  | "star"
  | "starEmpty"
  | "arrow_left"
  | "arrow_left_white"
  | "arrow_right"
  | "arrow_under"
  | "arrow_under_hover"
  | "arrow_up"
  | "bookmark"
  | "bookmark_white"
  | "bookmark_check"
  | "share"
  | "share_hover"
  | "share_white"
  | "person"
  | "check"
  | "close"
  | "edit"
  | "thumb"
  | "calendar"
  | "account"
  | "call"
  | "clock"
  | "refresh"
  | "filter"
  | "camera"
  | "review"
  | "kakao"
  | "naver"
  | "google"
  | "apple"
  | "plan"
  | "re_plan"
  | "info"
  | "question"
  | "coffee"
  | "map"
  | "trash"
  | "defaultProfile"
  | "plus"
  | "notebook"
  | "bakery"
  | "book"
  | "heart"
  | "seat"
  | "coffee2"
  | "glass"
  | "setting";

export interface IconProps {
  type: IconType;

  size?: "xSmall" | "small" | "medium" | "large" | "xLarge";
  alt: string;
}

const iconSize: { [key: string]: `${number}` } = {
  xSmall: "16",
  small: "24",
  medium: "32",
  large: "40",
  xLarge: "70",
};

const Icon = ({ type, size = "small", alt }: IconProps) => {
  return (
    <Image
      className="flex justify-center items-center"
      src={iconUrls[type]}
      width={iconSize[size]}
      height={iconSize[size]}
      alt={alt}
    />
  );
};

export default Icon;
