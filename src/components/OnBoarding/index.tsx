"use client";

import { useState } from "react";
import Indicator from "../common/Indicator";
import Text from "../common/Text";
import { onBoardingTexts } from "@/app/constants";
import Image from "next/image";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import LoginComponent from "../common/LoginComponent";
import Icon from "../common/Icon";

const OnBoarding = () => {
  const router = useRouter();
  const [onStep, setOnStep] = useState(0);

  const handlePreviousStep = () => {
    if (onStep === 1 || onStep === 2) {
      setOnStep(onStep - 1);
    }
  };

  const handleNextStep = () => {
    if (onStep === 2) {
      router.push("/map");
    } else {
      setOnStep(onStep + 1);
    }
  };

  return (
    <section className="h-full px-4 flex flex-col justify-center items-center gap-6 bg-white">
      <Indicator count={onBoardingTexts.length} currentIdx={onStep} />
      <Text size="x2Large">{onBoardingTexts[onStep].title}</Text>
      <div className="flex flex-col">
        {onBoardingTexts[onStep].description.map((descriptionText: string) => {
          return (
            <Text
              key={descriptionText}
              size="medium"
              className="text-center text-gray-800"
            >
              {descriptionText}
            </Text>
          );
        })}
      </div>
      <div className="flex gap-2">
        <button onClick={handlePreviousStep}>
          <Icon size="xSmall" type="arrow_left" alt="arrow_left" />
        </button>
        <Image
          width={298}
          height={480}
          src={onBoardingTexts[onStep].imageUrl}
          alt="onBoarding image"
        />
        <button onClick={handleNextStep}>
          <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
        </button>
      </div>
      <LoginComponent />
    </section>
  );
};

export default OnBoarding;
