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

/**
 *
 * @returns Array with hours from [0...23]
 */
export const getFormattedDayHours = (): string[] => {
  const arr = [];
  for (let i = 0; i < 24; i++) {
    arr.push(
      `${i === 0 ? "12" : i > 12 ? i - 12 : i}:00 ${i < 12 ? "am" : "pm"}`
    );
  }
  return arr;
};

const months: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

/**
 *
 * @param date  Date Object
 * @returns string for the passed date in format:  "MONTH YYYY"
 */
export const getDateFormattedMonthYear = (date: Date) => {
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};
