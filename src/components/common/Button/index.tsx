import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "large" | "full";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "h-8",
  medium: "h-16",
  large: "h-50",
  full: "w-full h-12",
};

const Button = ({
  type = "button",
  size,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`${ButtonSize[size]} p-2 flex items-center justify-center text-white bg-primary-300 text-base sm:text-sm rounded-md enabled:active:bg-primary-200 disabled:bg-gray-200 disabled:text-gray-500 ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
