"use client";

import SelectBox from "../SelectBox";
import Text from "@/components/common/Text";
import useDate from "@/Hooks/useDate";
import { useState } from "react";

interface CalendarProps {
  checkSelectDay: (day: number | null) => boolean;
  onClickday: (day: number | null) => void;
}

const Calendar = ({ checkSelectDay, onClickday }: CalendarProps) => {
  const months = [
    { value: "1", label: "1월" },
    { value: "2", label: "2월" },
    { value: "3", label: "3월" },
    { value: "4", label: "4월" },
    { value: "5", label: "5월" },
    { value: "6", label: "6월" },
    { value: "7", label: "7월" },
    { value: "8", label: "8월" },
    { value: "9", label: "9월" },
    { value: "10", label: "10월" },
    { value: "11", label: "11월" },
    { value: "12", label: "12월" },
  ];

  const currentMonth = new Date().getMonth() + 1;

  const [selectedMonth, setSelectedMonth] = useState(months[currentMonth - 1]);

  const { currentDay, calculatedCalendarData } = useDate(+selectedMonth.value);

  const handleSelectOption = (month: { value: string; label: string }) => {
    setSelectedMonth(month);
  };

  return (
    <div className="h-full flex flex-col gap-4 bg-white h-[250px] pt-6">
      <header className="flex items-center justify-between relative">
        <SelectBox
          options={months}
          selectedOption={selectedMonth}
          onSelectOption={handleSelectOption}
        />

        <Text size="small" className="text-gray-700">
          오늘은 {currentMonth}월 {currentDay}일
        </Text>
      </header>
      <div className="w-full p-3 border-[1px] border-solid border-gray-300 rounded-lg">
        <table className="w-full">
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            {calculatedCalendarData()?.map(
              (week: (number | null)[], index: number) => (
                <tr key={index}>
                  {week.map((day: number | null, index: number) => (
                    <td
                      key={index}
                      className={`w-[50px] h-[35px] text-center cursor-pointer ${checkSelectDay(day) && "bg-subcolor border-solid border-primary-300 border-[1px] rounded-lg"}`}
                      onClick={() => onClickday(day)}
                    >
                      {day}
                    </td>
                  ))}
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
