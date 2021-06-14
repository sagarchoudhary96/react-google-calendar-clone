import React from "react";
import Box from "@material-ui/core/Box";
import {
  getFormattedDayHours,
  WeekDay,
  getFormattedTimeStampForEvent,
} from "utils/calendarUtils";
import Typography from "@material-ui/core/Typography";
import { CALENDAR_COLUMN_HEIGHT, SingleEvent } from "utils/constants";
import EventOverlay from "Components/EventOverlay";

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
  const renderEventForHour = (hour: number) => {
    const event = events.find((event) => event.date.getHours() === hour);
    if (event) {
      return (
        <EventOverlay eventDuration={event.duration} eventDate={event.date}>
          <Typography variant="subtitle2" noWrap>
            {event.title}
          </Typography>
          <Typography variant="caption">
            {getFormattedTimeStampForEvent(event.date, event.duration)}
          </Typography>
        </EventOverlay>
      );
    }
    return null;
  };

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
        >
          {renderEventForHour(hour)}
        </Box>
      ))}
    </Box>
  );
};

export default CalendarDayColumn;
