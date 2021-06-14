import { useState } from "react";
import styled from "@material-ui/core/styles/styled";
import Container from "@material-ui/core/Container";
import CalendarHeader from "Components/CalendarHeader";
import CalendarToolbar from "Components/CalendarToolbar";
import { getAllWeekDays, WeekDay } from "utils/calendarUtils";

/**
 * Render Calendar with Weekview
 */
const CalendarView = (): JSX.Element => {
  // state for managing current selected week
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [weekDays, setWeekDays] = useState<WeekDay[]>(getAllWeekDays());

  const goToNextWeek = () => {
    let nextWeekDate = new Date(startDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setStartDate(nextWeekDate);
    setWeekDays(getAllWeekDays(nextWeekDate));
  };

  const goToPrevWeek = () => {
    let prevWeekDate = new Date(startDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    setStartDate(prevWeekDate);
    setWeekDays(getAllWeekDays(prevWeekDate));
  };

  const goToTodaysDate = () => {
    let todayDate = new Date();
    setStartDate(todayDate);
    setWeekDays(getAllWeekDays());
  };

  return (
    <Wrapper maxWidth={false}>
      <CalendarToolbar
        goToNextWeek={goToNextWeek}
        goToPrevWeek={goToPrevWeek}
        goToTodaysDate={goToTodaysDate}
        startDate={startDate}
      />
      <CalendarHeader weekDays={weekDays} />
    </Wrapper>
  );
};

const Wrapper = styled(Container)({
  display: "flex",
  flexDirection: "column",
  height: "100%",
  overflow: "hidden",
});

export default CalendarView;
