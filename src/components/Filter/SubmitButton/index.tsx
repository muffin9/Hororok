import Button from "@/components/common/Button";

interface SubmitButtonProps {
  onCloseButton: () => void;
  className?: string;
}

const SubmitButton = ({ onCloseButton, className }: SubmitButtonProps) => {
  return (
    <Button
      size="large"
      className={`w-full ${className}`}
      onClick={onCloseButton}
    >
      결과보기
    </Button>
  );
};

export default SubmitButton;
