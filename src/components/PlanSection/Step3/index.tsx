import Text from "@/components/common/Text";
import NextButtonSection from "../NextButtonSection";
import Calendar from "./Calendar";
import TimeSelection from "./TimeSelection";

const Step3 = () => {
  return (
    <div>
      <header className="flex flex-col gap-3">
        <Text size="x2Large" weight="bold">
          언제 방문하실 예정인가요?
        </Text>
        <Text size="medium" className="text-gray-700">
          방문 예정일의 영업여부를 알려드릴게요
        </Text>
      </header>
      <Calendar />
      <div className="w-full h-[10px] bg-gray-200"></div>
      <TimeSelection />
      <NextButtonSection nextStep="4" />
    </div>
  );
};

export default Step3;
