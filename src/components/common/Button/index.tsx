import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "large" | "half" | "full";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "h-8",
  medium: "h-16",
  large: "h-50",
  half: "w-6/12",
  full: "w-full h-12",
};

const Button = ({
  type = "button",
  size,
  className = "",
  bgColor,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${ButtonSize[size]} p-2 flex items-center justify-center text-white ${bgColor ? bgColor : "bg-primary-300"} text-base sm:text-sm rounded-md enabled:active:bg-primary-300 disabled:bg-gray-200 disabled:text-gray-500 ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
