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
    <div className="w-[358px] fixed bottom-4 flex flex-col gap-4 bg-white">
      {/* {nextStep === "2" && (
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => {
            localStorage.getItem("accessToken")
              ? router.push("/myPage")
              : router.push("/login");
          }}
        >
          <Text size="small" className="text-gray-700">
            저장한 여정 보러가기
          </Text>
        </div>
      )} */}
      {nextStep === "2" && (
        <div className="flex justify-center">
          <Text size="extraSmall" className="text-gray-700">
            지역을 선택하지 않으면 서울 전체의 카페가 검색돼요.
          </Text>
        </div>
      )}
      {nextStep !== "2" && (
        <Button
          size="full"
          onClick={() => {
            if (onClickContinueFunc) onClickContinueFunc();
            router.push(`/plan/${nextStep}`);
          }}
        >
          계속하기
        </Button>
      )}
      <Button
        size="full"
        className="bg-white"
        onClick={() => {
          if (nextStep === "2") router.push(`/plan/3`);
          else router.push(`/plan/${nextStep}`);
        }}
      >
        <Text size="small" className="text-gray-700">
          SKIP
        </Text>
      </Button>
    </div>
  );
};

export default NextButtonSection;
