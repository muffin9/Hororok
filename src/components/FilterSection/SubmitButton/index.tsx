import useDebounce from "@/Hooks/useDebounce";
import Button from "@/components/common/Button";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useState } from "react";

interface SubmitButtonProps {
  onSubmit: () => void;
  className?: string;
  isDisabled: () => boolean;
}

const SubmitButton = ({
  onSubmit,
  className,
  isDisabled,
}: SubmitButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = useDebounce(async () => {
    if (isDisabled() || isLoading) return;

    setIsLoading(true);
    try {
      await onSubmit();
    } finally {
      setIsLoading(false);
    }
  }, 500);

  return (
    <Button
      size="large"
      className={`w-full ${className}`}
      onClick={handleClick}
      disabled={isDisabled()}
    >
      {isLoading ? <LoadingSpinner size="small" /> : "결과보기"}
    </Button>
  );
};

export default SubmitButton;
