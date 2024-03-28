import { ChangeEvent, FocusEvent } from "react";

type TextAreaProps = {
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  cols?: number;
  rows?: number;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ ...props }: TextAreaProps) => {
  return (
    <textarea
      className="w-full h-40 resize-none border-2 border-gray-300 rounded-lg focus:outline-none text-gray p-3"
      {...props}
    />
  );
};

export default TextArea;
