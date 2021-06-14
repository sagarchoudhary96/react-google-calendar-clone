export const CALENDAR_COLUMN_HEIGHT = 60;

export type SingleEvent = {
  title: string;
  date: Date;
  duration: number;
};

export type EventsDataMap = {
  [key: string]: SingleEvent[];
};

// Database constants
export const DATABASE_NAME = "calendar";
export const EVENTS_TABLE_NAME = "events";
