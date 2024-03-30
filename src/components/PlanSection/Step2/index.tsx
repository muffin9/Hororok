import NextButtonSection from "../NextButtonSection";
import Text from "@/components/common/Text";
import TimeSelector from "./TimeSelector";
import usePlanStore from "@/store/\bplanStore";
import { useEffect, useState } from "react";
import KakaoPlaceStaticMap from "@/components/KakaoPlaceStaticMap";

const Step2 = () => {
  const [selectMinute, setSelectMinute] = useState(0);
  const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const setFormData = usePlanStore((state) => state.setFormData);

  const saveMinuteData = () => {
    setFormData({
      ...usePlanStore.getState().formData,
      minutes: selectMinute,
    });
  };

  useEffect(() => {
    setCurrentStep("2");
  }, []);

  return (
    <div>
      <KakaoPlaceStaticMap height="h-[190px]" />
      <div className="mt-[37px]">
        <Text size="xLarge" weight="bold">
          선택하신 곳에서 주변 카페까지 <br />
          얼마나 걸어도 괜찮은가요?
        </Text>
      </div>
      <div className="mt-[53px]">
        <TimeSelector
          selectMinute={selectMinute}
          setSelectMinute={setSelectMinute}
        />
      </div>
      <NextButtonSection nextStep={"3"} onClickContinueFunc={saveMinuteData} />
    </div>
  );
};

export default Step2;
