"use client";

import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import { useRouter } from "next/navigation";

interface NextButtonSectionProps {
  nextStep: "1" | "2" | "3" | "4";
  onClickContinueFunc?: () => void;
}

const NextButtonSection = ({
  nextStep,
  onClickContinueFunc,
}: NextButtonSectionProps) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 pt-32 bg-white">
      <Button
        size="full"
        onClick={() => {
          if (onClickContinueFunc) onClickContinueFunc();
          router.push(`/plan/${nextStep}`);
        }}
      >
        계속하기
      </Button>
      <Button
        size="full"
        className="bg-white"
        onClick={() => router.push(`/plan/${nextStep}`)}
      >
        <Text size="small" className="text-gray-700">
          SKIP
        </Text>
      </Button>
    </div>
  );
};

export default NextButtonSection;
