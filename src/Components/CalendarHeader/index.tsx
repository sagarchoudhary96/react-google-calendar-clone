import { WeekDay } from "utils/calendarUtils";
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";

// CalendarHeader props
type Props = {
  weekDays: WeekDay[];
  todaysDate: Date;
};

/**
 * Renders Header For the Calendar with the selected weekDays
 */
const CalendarHeader = ({ weekDays, todaysDate }: Props) => {
  return (
    <HeaderRow display="flex">
      <Box width="65px" display="flex" flex="none" />
      <Box display="flex" flex={1} overflow="hidden">
        <Box width={9} minWidth={9} />
        {weekDays.map((day) => (
          <Box
            key={`${day.date.toDateString()}_header_row`}
            display="flex"
            flexDirection="column"
            flex={1}
            border={1}
            borderColor="divider"
            bgcolor={
              day.date.toDateString() === todaysDate.toDateString()
                ? "text.disabled"
                : ""
            }
            p={1}
          >
            <Typography gutterBottom>{day.weekDayName}</Typography>
            <Typography variant="h4" color="textSecondary">
              {day.date.getDate()}
            </Typography>
          </Box>
        ))}
      </Box>
    </HeaderRow>
  );
};

const HeaderRow = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(2),
  flex: "none",
}));

export default CalendarHeader;
