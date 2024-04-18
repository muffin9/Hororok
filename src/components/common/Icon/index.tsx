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
  share: "/assets/Icon/share.svg",
  share_white: "/assets/Icon/share_white.svg",
  person: "/assets/Icon/person.svg",
  check: "/assets/Icon/ic_check.svg",
  close: "/assets/Icon/ic_close.svg",
  heart: "/assets/Icon/ic_herat.svg",
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
  re_plan: "/assets/Icon/re-plan.svg",
  info: "/assets/Icon/ic_info.svg",
  defaultCup: "/assets/Icon/default_cup.svg",
};

interface IconProps {
  type:
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
    | "share"
    | "share_white"
    | "person"
    | "check"
    | "close"
    | "heart"
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
    | "re_plan"
    | "info"
    | "defaultCup";

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
