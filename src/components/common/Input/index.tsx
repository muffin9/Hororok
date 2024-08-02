import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";

type TextInputTypes =
  | "text"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "date"
  | "url";

export interface InputProps {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  maxlength?: number;
  autofocus?: boolean;
  onClick?: (e: MouseEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      className={`w-full h-[50px] pl-4 bg-white focus:outline-none disabled:border-gray text-black ${props.className}`}
      autoFocus={props.autofocus}
      {...props}
    />
  );
};

export default Input;
