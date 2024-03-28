import KakaoStaticMap from "@/components/KakaoStaticMap";
import NextButtonSection from "../NextButtonSection";
import Text from "@/components/common/Text";
import TimeSelector from "./TimeSelector";

const Step2 = () => {
  return (
    <div>
      <KakaoStaticMap height="h-[190px]" />
      <div className="mt-[37px]">
        <Text size="xLarge" weight="bold">
          선택하신 곳에서 주변 카페까지 <br />
          얼마나 걸어도 괜찮은가요?
        </Text>
      </div>
      <div className="mt-[53px]">
        <TimeSelector />
      </div>
      <NextButtonSection nextStep={"3"} />
    </div>
  );
};

export default Step2;
