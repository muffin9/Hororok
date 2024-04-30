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
    <div className="w-[358px] fixed bottom-0 flex flex-col gap-4 bg-white">
      {nextStep === "2" && (
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            localStorage.getItem("accessToken")
              ? router.push("/mypage")
              : router.push("/login");
          }}
        >
          <Text size="small" className="text-gray-700">
            저장한 여정 보러가기
          </Text>
        </div>
      )}
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
