"use client";

import Text from "@/components/common/Text";
import NextButtonSection from "../NextButtonSection";
import Calendar from "./Calendar";
import TimeSelection from "./TimeSelection";
import usePlanStore from "@/store/\bplanStore";
import useDate from "@/Hooks/useDate";
import { useState } from "react";
import { timeDatas } from "@/app/constants";

const Step3 = () => {
  const { currentYear, currentMonth, currentDay } = useDate();
  const [selectDay, setSelectDay] = useState<number>(currentDay);
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const handleItemClick = (timeId: number) => {
    const maxSelectedId = Math.max(...selectedIds);

    if (timeId === maxSelectedId + 1) {
      setSelectedIds([...selectedIds, timeId]);
    } else {
      setSelectedIds([timeId]);
    }
  };

  const isIncludeTimeId = (timeId: number) => {
    return selectedIds.includes(timeId);
  };

  const setCurrentStep = usePlanStore((state) => state.setCurrentStep);
  const setFormData = usePlanStore((state) => state.setFormData);

  const checkSelectDay = (day: number | null) => {
    return selectDay === day;
  };

  const onClickday = (day: number | null) => {
    if (day) {
      setSelectDay(day);
    }
  };

  const getStartEndTime = () => {
    if (selectedIds.length === 0) {
      return { startTime: null, endTime: null };
    }

    const startTimeId = selectedIds[0];
    const endTimeId = selectedIds[selectedIds.length - 1];

    const startTimeData = timeDatas
      .flatMap((data) => data.timeData)
      .find((time) => time.id === startTimeId);
    const endTimeData = timeDatas
      .flatMap((data) => data.timeData)
      .find((time) => time.id === endTimeId);

    return { startTime: startTimeData?.time, endTime: endTimeData?.time };
  };

  const saveDayAndTimeData = () => {
    setFormData({
      ...usePlanStore.getState().formData,
      date: `${currentYear}-${currentMonth}-${currentDay}`,
      startTime: getStartEndTime().startTime || {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
      endTime: getStartEndTime().endTime || {
        hour: 0,
        minute: 0,
        second: 0,
        nano: 0,
      },
    });
  };

  setCurrentStep("3");

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
      <Calendar onClickday={onClickday} checkSelectDay={checkSelectDay} />
      <TimeSelection
        handleItemClick={handleItemClick}
        isIncludeTimeId={isIncludeTimeId}
      />
      <NextButtonSection
        nextStep="4"
        onClickContinueFunc={saveDayAndTimeData}
      />
    </div>
  );
};

export default Step3;
