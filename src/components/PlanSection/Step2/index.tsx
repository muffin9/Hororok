import NextButtonSection from "../NextButtonSection";
import Text from "@/components/common/Text";
import TimeSelector from "./TimeSelector";
import usePlanStore from "@/store/usePlanStore";
import { useEffect, useState } from "react";
import KakaoPlaceStaticMap from "@/components/KakaoPlaceStaticMap";

const Step2 = () => {
  const [selectId, setSelectId] = useState(0);
  // const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const { setFormData } = usePlanStore();

  const saveMinuteData = () => {
    setFormData({
      ...usePlanStore.getState().formData,
      minutes: (selectId - 1) * 5,
    });
  };

  // useEffect(() => {
  //   setCurrentStep("2");
  // }, []);

  return (
    <div className="px-4">
      <KakaoPlaceStaticMap height="h-[190px]" />
      <div className="mt-[37px]">
        <Text size="xLarge" weight="bold">
          얼마나 걸어도 괜찮은가요?
        </Text>
      </div>
      <div className="mt-[53px]">
        <TimeSelector selectId={selectId} setSelectId={setSelectId} />
      </div>
      <NextButtonSection nextStep={"3"} onClickContinueFunc={saveMinuteData} />
    </div>
  );
};

export default Step2;
