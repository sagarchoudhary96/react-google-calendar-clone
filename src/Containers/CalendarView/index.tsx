import { useContext, useState } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CalendarHeader from "Components/CalendarHeader";
import CalendarDayColumn from "Components/CalendarDayColumn";
import CalendarToolbar from "Components/CalendarToolbar";
import AppContext from "Context/AppContext";
import {
  getAllWeekDays,
  getFormattedDayHours,
  WeekDay,
} from "utils/calendarUtils";
import { CALENDAR_COLUMN_HEIGHT } from "utils/constants";

/**
 * Render Calendar with Weekview
 */
const CalendarView = (): JSX.Element => {
  // state for managing current selected week
  const [weekDays, setWeekDays] = useState<WeekDay[]>(getAllWeekDays());

  // get events data from app context
  const { eventsData, todaysDate } = useContext(AppContext);

  const goToNextWeek = () => {
    let nextWeekDate = new Date(weekDays[6].date);
    nextWeekDate.setDate(nextWeekDate.getDate() + 1);
    setWeekDays(getAllWeekDays(nextWeekDate));
  };

  const goToPrevWeek = () => {
    let prevWeekDate = new Date(weekDays[0].date);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    setWeekDays(getAllWeekDays(prevWeekDate));
  };

  const goToTodaysDate = () => {
    setWeekDays(getAllWeekDays());
  };

  return (
    <Wrapper maxWidth={false}>
      <CalendarToolbar
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        goToTodaysDate={goToTodaysDate}
        weekDays={weekDays}
      />
      <CalendarHeader weekDays={weekDays} todaysDate={todaysDate} />
      <CalendarGridWrapper>
        <Box alignItems="flex-start" height="auto" flex="none" width="65px">
          {getFormattedDayHours().map((hour) => (
            <Box key={hour} height={CALENDAR_COLUMN_HEIGHT} position="relative">
              <Timelabel variant="caption">{hour}</Timelabel>
            </Box>
          ))}
        </Box>
        <Box display="flex" flex={1} alignItems="flex-start">
          <Box width={9} minWidth={9} />
          {weekDays.map((day) => (
            <CalendarDayColumn
              key={day.date.toDateString()}
              day={day}
              events={eventsData[day.date.toDateString()]}
            />
          ))}
        </Box>
      </CalendarGridWrapper>
    </Wrapper>
  );
};

const Timelabel = styled(Typography)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(-1.6),
  right: "0",
}));

const Wrapper = styled(Container)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
});

const CalendarGridWrapper = styled(Box)({
  position: "relative",
  flex: 1,
  display: "flex",
  overflowY: "scroll",
  overflow: "visible",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

export default CalendarView;
