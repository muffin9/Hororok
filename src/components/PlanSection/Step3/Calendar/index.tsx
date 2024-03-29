import Text from "@/components/common/Text";
import useDate from "@/Hooks/useDate";

interface CalendarProps {
  checkSelectDay: (day: number | null) => boolean;
  onClickday: (day: number | null) => void;
}

const Calendar = ({ checkSelectDay, onClickday }: CalendarProps) => {
  const { currentMonth, currentDay, calculatedCalendarData } = useDate();

  return (
    <div className="h-full flex flex-col gap-4 bg-white h-[250px] pt-6">
      <header className="flex items-center justify-between">
        <Text size="medium" weight="bold">
          {currentMonth}월
        </Text>
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
