"use client";

import SelectBox from "../SelectBox";
import Text from "@/components/common/Text";
import useDate from "@/Hooks/useDate";
import { useState } from "react";

interface CalendarProps {
  checkSelectDay: (month: number | null, day: number | null) => boolean;
  onClickday: (day: number | null) => void;
}

const Calendar = ({ checkSelectDay, onClickday }: CalendarProps) => {
  const months = [
    { value: 1, label: "1월" },
    { value: 2, label: "2월" },
    { value: 3, label: "3월" },
    { value: 4, label: "4월" },
    { value: 5, label: "5월" },
    { value: 6, label: "6월" },
    { value: 7, label: "7월" },
    { value: 8, label: "8월" },
    { value: 9, label: "9월" },
    { value: 10, label: "10월" },
    { value: 11, label: "11월" },
    { value: 12, label: "12월" },
  ];

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(months[currentMonth - 1]);

  const { currentDay, calculatedCalendarData } = useDate(selectedMonth.value);

  const handleSelectOption = (type: "left" | "right") => {
    if (type === "left" && selectedMonth.value === 1) return;
    if (type === "right" && selectedMonth.value === 12) return;

    if (type === "left") {
      return setSelectedMonth(months[selectedMonth.value - 2]);
    }
    if (type === "right") return setSelectedMonth(months[selectedMonth.value]);
  };

  const isPastDate = (day: number | null) => {
    if (day === null) return false;
    const selectedDate = new Date(
      currentYear,
      selectedMonth.value - 1,
      day + 1,
    );
    return selectedDate < today;
  };

  return (
    <div className="flex flex-col gap-4 bg-white pt-6">
      <header className="flex items-center justify-between relative">
        <SelectBox
          selectedOption={selectedMonth}
          handleSelectOption={handleSelectOption}
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
                  {week.map((day: number | null, index: number) => {
                    const disabled = isPastDate(day);
                    return (
                      <td
                        key={index}
                        className={`w-[50px] h-[35px] text-center cursor-pointer rounded-lg ${
                          checkSelectDay(selectedMonth.value, day)
                            ? "bg-subcolor"
                            : ""
                        } ${disabled ? "text-gray-200 cursor-not-allowed" : ""}`}
                        onClick={() => !disabled && onClickday(day)}
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Calendar;
