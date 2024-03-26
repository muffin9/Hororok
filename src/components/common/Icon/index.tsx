import Image from "next/image";

const iconUrls = {
  logo: "/assets/Icon/logo.png",
  recommend: "/assets/Icon/recommend.svg",
  login: "/assets/Icon/login.svg",
  marker: "/assets/Icon/marker.svg",
  photo: "/assets/Icon/photo.svg",
  star: "/assets/Icon/star.svg",
  arrow_left: "/assets/Icon/arrow_left.svg",
  arrow_right: "/assets/Icon/arrow_right.svg",
  arrow_under: "/assets/Icon/arrow_under.svg",
  bookmark: "/assets/Icon/bookmark.svg",
  share: "/assets/Icon/share.svg",
  person: "/assets/Icon/person.svg",
  check: "/assets/Icon/ic_check.svg",
  close: "/assets/Icon/ic_close.svg",
  heart: "/assets/Icon/ic_herat.svg",
  edit: "/assets/Icon/icon_edit.svg",
  thumb: "/assets/Icon/icon_thumb.svg",
  calendar: "/assets/Icon/icon_calendar.svg",
  account: "/assets/Icon/icon_account.svg",
  call: "/assets/Icon/icon_call.svg",
  clock: "/assets/Icon/icon_clock.svg",
};

interface IconProps {
  type:
    | "logo"
    | "recommend"
    | "login"
    | "marker"
    | "photo"
    | "star"
    | "arrow_left"
    | "arrow_right"
    | "arrow_under"
    | "bookmark"
    | "share"
    | "person"
    | "check"
    | "close"
    | "heart"
    | "edit"
    | "thumb"
    | "calendar"
    | "account"
    | "call"
    | "clock";
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
