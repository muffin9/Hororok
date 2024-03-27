import Button from "@/components/common/Button";

interface SubmitButtonProps {
  onSubmit: () => void;
  className?: string;
}

const SubmitButton = ({ onSubmit, className }: SubmitButtonProps) => {
  return (
    <Button size="large" className={`w-full ${className}`} onClick={onSubmit}>
      결과보기
    </Button>
  );
};

export default SubmitButton;
