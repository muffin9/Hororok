const useDate = (selectMonth: number) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();

  const calculatedCalendarData = (): (number | null)[][] | undefined => {
    const calendarData: (number | null)[][] = [];
    const firstDayOfMonth = new Date(currentYear, selectMonth - 1, 1); // 월의 첫째날로 설정
    let startingDay = firstDayOfMonth.getDay(); // 첫째날의 요일

    const lastDayOfMonth = new Date(currentYear, selectMonth, 0); // 월의 마지막 날로 설정
    const numDays = lastDayOfMonth.getDate(); // 월의 일 수

    let date = 1;

    for (let i = 0; i < 6; i++) {
      // 최대 6주
      let week = [];

      for (let j = 0; j < 7; j++) {
        // 일주일
        if (i === 0 && j < startingDay) {
          week.push(null); // 첫 주에서 시작 요일 이전의 빈 칸
        } else if (date > numDays) {
          week.push(null); // 마지막 날짜 이후의 빈 칸
        } else {
          week.push(date);
          date++;
        }
      }

      calendarData.push(week);
      if (date > numDays) return calendarData;
    }
  };

  return { currentYear, currentDay, calculatedCalendarData };
};

export default useDate;
