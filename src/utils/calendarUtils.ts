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
 * @param weekDays List of week Days
 * @returns string for the passed weekDays and returns month for it
 */
export const getFormattedWeekLabel = (weekDays: WeekDay[]) => {
  const startDate = weekDays[0].date;
  const endDate = weekDays[6].date;

  if (startDate.getMonth() === endDate.getMonth()) {
    return `${months[startDate.getMonth()]} ${startDate.getFullYear()}`;
  }

  return `${months[startDate.getMonth()]} - ${
    months[endDate.getMonth()]
  } ${startDate.getFullYear()}`;
};

/**
 *
 * @param date start date of event
 * @param duration duration of event
 * @returns formatted string in format `HH:MM:am/pm - HH:MM:am/pm`
 */
export const getFormattedTimeStampForEvent = (
  date: Date,
  duration: number
): string => {
  const startHours = date.getHours();
  const startMinutes = date.getMinutes();
  const endDate = new Date(date);
  endDate.setMinutes(endDate.getMinutes() + duration);
  const endHours = endDate.getHours();
  const endMinutes = endDate.getMinutes();

  return `${formatTimeString(startHours, startMinutes)} - ${formatTimeString(
    endHours,
    endMinutes
  )}`;
};

// format time to readable string
const formatTimeString = (hours: number, minutes: number): string =>
  `${hours === 0 ? "12" : hours > 12 ? hours - 12 : hours}:${
    minutes >= 30 ? "30" : "00"
  } ${hours < 12 ? "am" : "pm"}`;
