import React from "react";
import Box from "@material-ui/core/Box";
import { getFormattedDayHours, WeekDay } from "utils/calendarUtils";
import { CALENDAR_COLUMN_HEIGHT, SingleEvent } from "utils/constants";

// Component Props
type Props = {
  day: WeekDay;
  events: SingleEvent[];
  children?: React.ReactNode;
};

/**
 * Render Calendar Column for 24hours for a day
 */
const CalendarDayColumn = ({
  day,
  events = [],
  ...props
}: Props): JSX.Element => {
  return (
    <Box
      position="relative"
      {...props}
      display="flex"
      flexDirection="column"
      flex={1}
    >
      {getFormattedDayHours().map((hourLabel, hour) => (
        <Box
          key={`${hourLabel}_${hour}`}
          border={1}
          borderColor="divider"
          p={1}
          position="relative"
          height={CALENDAR_COLUMN_HEIGHT}
        />
      ))}
    </Box>
  );
};

export default CalendarDayColumn;
