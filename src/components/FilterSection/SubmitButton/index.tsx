import Button from "@/components/common/Button";

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
  return (
    <Button
      size="large"
      className={`w-full ${className}`}
      onClick={onSubmit}
      disabled={isDisabled()}
    >
      결과보기
    </Button>
  );
};

export default SubmitButton;
