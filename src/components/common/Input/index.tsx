import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

type TextInputTypes =
  | "text"
  | "email"
  | "number"
  | "password"
  | "search"
  | "tel"
  | "date"
  | "url";

interface InputProps {
  id?: string;
  name?: string;
  type?: TextInputTypes;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: KeyboardEvent<HTMLInputElement>) => void;
}

const Input = (props: InputProps) => {
  return (
    <input
      className="w-full h-[50px] p-4 bg-white border-[1px] border-gray-400 rounded-lg focus:outline-none disabled:border-gray text-black"
      {...props}
    />
  );
};

export default Input;
