"use client";

import { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import Indicator from "../common/Indicator";
import Text from "../common/Text";
import { onBoardingTexts } from "@/app/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LoginComponent from "../common/LoginComponent";
import Icon from "../common/Icon";

const OnBoarding = () => {
  const router = useRouter();
  const [onStep, setOnStep] = useState(0);

  const [animation, setAnimation] = useState("");

  useEffect(() => {
    if (animation) {
      const timer = setTimeout(() => {
        setAnimation("");
      }, 500); // 애니메이션 지속 시간과 동일하게 설정
      return () => clearTimeout(timer);
    }
  }, [animation]);

  const handlePreviousStep = () => {
    if (onStep > 0) {
      setAnimation("slideRight");
      setTimeout(() => {
        setOnStep(onStep - 1);
      }, 500); // 애니메이션 지속 시간과 동일하게 설정
    }
  };

  const handleNextStep = () => {
    if (onStep < onBoardingTexts.length - 1) {
      setAnimation("slideLeft");
      setTimeout(() => {
        setOnStep(onStep + 1);
      }, 500); // 애니메이션 지속 시간과 동일하게 설정
    } else {
      router.push("/map");
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextStep,
    onSwipedRight: handlePreviousStep,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <section
      {...swipeHandlers}
      className="h-full px-4 flex flex-col justify-around items-center gap-6 bg-white"
    >
      <div
        className={`flex flex-col items-center gap-4 ${animation === "slideLeft" ? "animate-slide-left" : animation === "slideRight" ? "animate-slide-right" : ""}`}
      >
        <Indicator count={onBoardingTexts.length} currentIdx={onStep} />
        <Text size="x2Large">{onBoardingTexts[onStep].title}</Text>
        <div className="flex flex-col">
          {onBoardingTexts[onStep].description.map(
            (descriptionText: string) => {
              return (
                <Text
                  key={descriptionText}
                  size="medium"
                  className="text-center text-gray-800"
                >
                  {descriptionText}
                </Text>
              );
            },
          )}
        </div>
        <div className="flex gap-2">
          <button onClick={handlePreviousStep}>
            <Icon size="xSmall" type="arrow_left" alt="arrow_left" />
          </button>
          <Image
            key={onStep}
            width={200}
            height={397}
            src={onBoardingTexts[onStep].imageUrl}
            alt="onBoarding image"
          />
          <button onClick={handleNextStep}>
            <Icon size="xSmall" type="arrow_right" alt="arrow_right" />
          </button>
        </div>
      </div>
      <LoginComponent />
    </section>
  );
};

export default OnBoarding;
