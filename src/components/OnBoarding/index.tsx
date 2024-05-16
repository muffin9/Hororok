"use client";

import { useState } from "react";
import Indicator from "../common/Indicator";
import Text from "../common/Text";
import { onBoardingTexts } from "@/app/constants";
import Image from "next/image";
import Button from "../common/Button";
import { useRouter } from "next/navigation";

const OnBoarding = () => {
  const router = useRouter();
  const [onStep, setOnStep] = useState(0);

  const handlePreviousStep = () => {
    if (onStep === 1 || onStep === 2) {
      setOnStep(onStep - 1);
    }
  };

  const handleNextStep = () => {
    if (onStep === 3) {
      router.push("/map");
    } else {
      setOnStep(onStep + 1);
    }
  };

  return (
    <section className="h-full px-4 flex flex-col justify-center items-center gap-4 bg-white">
      <Indicator count={onBoardingTexts.length} currentIdx={onStep} />
      <Text size="x2Large">{onBoardingTexts[onStep].title}</Text>
      <Text size="medium" className="text-center text-gray-800">
        {onBoardingTexts[onStep].description}
      </Text>
      <Image
        width={298}
        height={480}
        src={onBoardingTexts[onStep].imageUrl}
        alt="onBoarding image"
      />
      <div className="w-full flex gap-3">
        {onStep === 1 || onStep === 2 ? (
          <Button
            size="half"
            onClick={handlePreviousStep}
            bgColor="bg-gray-300"
            className="h-[50px]"
          >
            이전
          </Button>
        ) : (
          <div />
        )}
        <Button
          size={onStep === 0 || onStep === 3 ? "full" : "half"}
          onClick={handleNextStep}
          className="h-[50px]"
        >
          {onStep === 3 ? "시작하러가기" : "다음"}
        </Button>
      </div>
    </section>
  );
};

export default OnBoarding;
