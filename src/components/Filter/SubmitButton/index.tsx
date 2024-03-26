import Button from "@/components/common/Button";

interface SubmitButtonProps {
  onCloseButton: () => void;
}

const SubmitButton = ({ onCloseButton }: SubmitButtonProps) => {
  return (
    <Button size="large" className="w-full" onClick={onCloseButton}>
      결과보기
    </Button>
  );
};

export default SubmitButton;
