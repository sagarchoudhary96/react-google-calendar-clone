export type WeekDay = {
  date: Date;
  weekDayName: string;
};

const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

/**
 *
 * @param current Date for which week days are needed
 * @returns Array of dates of the week starting from sunday
 */
export const getAllWeekDays = (current: Date = new Date()): WeekDay[] => {
  const date = new Date(current);
  const weekDates = [];
  date.setDate(date.getDate() - date.getDay());
  for (var i = 0; i < 7; i++) {
    weekDates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return weekDates.map((date) => ({
    date,
    weekDayName: days[date.getDay()].substr(0, 3),
  }));
};
