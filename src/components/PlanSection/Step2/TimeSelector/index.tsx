"use client";

import ProgressBar from "@/components/common/ProgressBar";
import Text from "@/components/common/Text";
import { Dispatch, SetStateAction } from "react";

interface TimeButtonProps {
  id: number;
  selectId: number;
  isFirst?: boolean;
  isLast?: boolean;
  onClickTime: (selectId: number) => void;
}

interface TimeSelectorProps {
  selectId: number;
  setSelectId: Dispatch<SetStateAction<number>>;
}

const TimeSelector = ({ selectId, setSelectId }: TimeSelectorProps) => {
  const onClickTime = (id: number) => {
    setSelectId(id);
  };

  const calculatedWidth =
    selectId === 1 ? (selectId / 6) * 100 + 4 : (selectId / 6) * 100;

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full relative flex justify-between items-center gap-4 overflow-hidden">
        <div className="w-[calc(100%)] absolute left-[-4px] bottom-[13px]">
          <ProgressBar
            width={`${calculatedWidth}%`}
            bgColor={"bg-primary-300"}
            height="h-[2.5px]"
          />
        </div>
        <TimeButton
          isFirst
          id={0}
          selectId={selectId}
          onClickTime={onClickTime}
        />
        <TimeButton id={1} selectId={selectId} onClickTime={onClickTime} />
        <TimeButton id={2} selectId={selectId} onClickTime={onClickTime} />
        <TimeButton id={3} selectId={selectId} onClickTime={onClickTime} />
        <TimeButton id={4} selectId={selectId} onClickTime={onClickTime} />
        <TimeButton id={5} selectId={selectId} onClickTime={onClickTime} />
        <TimeButton
          id={6}
          selectId={selectId}
          onClickTime={onClickTime}
          isLast
        />
      </div>
      <div className="w-full relative items-center pl-2">
        <Text size="small" className={`text-primary-300 absolute left-0 top-0`}>
          0분
        </Text>
        <Text
          size="small"
          className={`${selectId >= 3 ? "text-primary-300" : "text-bluegray"} absolute left-1/2 transform -translate-x-1/2`}
        >
          15분
        </Text>
        <Text
          size="small"
          className={`${selectId === 6 ? "text-primary-300" : "text-bluegray"} absolute right-0`}
        >
          30분
        </Text>
      </div>
    </div>
  );
};

const TimeButton: React.FC<TimeButtonProps> = ({
  id,
  selectId,
  isFirst,
  isLast,
  onClickTime,
}) => {
  const buttonSize = isFirst || isLast ? "w-7 h-7" : "w-[18px] h-[18px]";

  const buttonColor = id <= selectId ? "bg-primary-300" : "bg-bluegray";

  return (
    <button
      type="button"
      className={`${buttonColor} rounded-full ${buttonSize} z-[100]`}
      onClick={() => onClickTime(id)}
    />
  );
};

export default TimeSelector;
