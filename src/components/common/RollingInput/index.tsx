import { useEffect, useState } from "react";
import Input, { InputProps } from "../Input";

interface RollingInputProps extends InputProps {
  placeholderTexts: string[];
}

const RollingInput = ({
  placeholderTexts,
  ...inputProps
}: RollingInputProps) => {
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlaceholderIndex((prevIndex) =>
        prevIndex === placeholderTexts.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [placeholderTexts]);

  return (
    <Input
      {...inputProps}
      placeholder={placeholderTexts[currentPlaceholderIndex]}
    />
  );
};

export default RollingInput;
