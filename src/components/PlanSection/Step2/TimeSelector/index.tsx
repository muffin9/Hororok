"use client";

import Text from "@/components/common/Text";
import { useState } from "react";

interface TimeSelectorProps {
  selectMinute: number;
  timerId: number;
  isFirst?: boolean;
  isLast?: boolean;
  onClickTime: (timerId: number) => void;
}

const TimeSelector = () => {
  const [selectMinute, setSelectMinute] = useState(0);

  const onClickTime = (id: number) => {
    setSelectMinute(id);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full flex justify-between items-center gap-4">
        <TimeButton
          isFirst
          selectMinute={selectMinute}
          timerId={0}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={5}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={10}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={15}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={20}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={25}
          onClickTime={onClickTime}
        />
        <TimeButton
          selectMinute={selectMinute}
          timerId={30}
          onClickTime={onClickTime}
          isLast
        />
      </div>
      <div className="w-full relative items-center pl-2">
        <Text size="small" className="text-bluegray absolute left-0 top-0">
          0분
        </Text>
        <Text
          size="small"
          className="text-bluegray absolute left-1/2 transform -translate-x-1/2"
        >
          15분
        </Text>
        <Text size="small" className="text-bluegray absolute right-0">
          30분
        </Text>
      </div>
    </div>
  );
};

const TimeButton: React.FC<TimeSelectorProps> = ({
  selectMinute,
  timerId,
  isFirst,
  isLast,
  onClickTime,
}) => {
  const buttonSize = isFirst || isLast ? "w-7 h-7" : "w-[18px] h-[18px]";
  const buttonColor =
    timerId <= selectMinute ? "bg-primary-300" : "bg-bluegray";

  return (
    <button
      data-id={timerId}
      type="button"
      className={`${buttonColor} rounded-full ${buttonSize}`}
      onClick={() => onClickTime(timerId)}
    />
  );
};

export default TimeSelector;
