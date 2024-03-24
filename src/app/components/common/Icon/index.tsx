import Image from "next/image";

const iconUrls = {
  logo: "/assets/Icon/logo.png",
};

interface IconProps {
  type: "logo";
  size?: "small" | "medium" | "large";
  alt: string;
}

const iconSize: { [key: string]: `${number}` } = {
  small: "30",
  medium: "45",
  large: "60",
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
