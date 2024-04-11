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
  className?: string;
  maxlength?: number;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
};

const TextArea = ({ className, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={`w-full h-40 resize-none border-2 border-gray-300 rounded-lg focus:outline-none text-gray p-3 ${className}`}
      {...props}
    />
  );
};

export default TextArea;
