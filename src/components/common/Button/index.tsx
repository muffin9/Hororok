import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  size: "small" | "medium" | "large" | "full";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const ButtonSize = {
  small: "h-12",
  medium: "h-34",
  large: "h-50",
  full: "w-full h-12",
};

const Button = ({ size, className = "", ...props }: ButtonProps) => {
  return (
    <button
      className={`${ButtonSize[size]} p-2 flex items-center justify-center text-white bg-primary-300 text-base sm:text-sm rounded-md enabled:hover:bg-primary-200 enabled:active:bg-primary-100 disabled:bg-gray-200 disabled:text-gray-500 ${className}`}
      {...props}
    ></button>
  );
};

export default Button;
