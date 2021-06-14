import EventNoteIcon from "@material-ui/icons/EventNoteRounded";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeftRounded";
import ChevronRightIcon from "@material-ui/icons/ChevronRightRounded";
import styled from "@material-ui/core/styles/styled";
import { getDateFormattedMonthYear } from "utils/calendarUtils";

// type defination for component props
type Props = {
  goToNextWeek: () => void;
  goToPrevWeek: () => void;
  goToTodaysDate: () => void;
  startDate: Date;
};

/**
 * Renders Calendar toolbar with controls
 */
const CalendarToolbar = ({
  startDate,
  goToNextWeek,
  goToPrevWeek,
  goToTodaysDate,
}: Props) => {
  return (
    <Box
      display="flex"
      flex="none"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center">
        <EventNoteIcon color="action" />
        <Typography color="textSecondary" variant="h5">
          Meetings
        </Typography>
      </Box>

      <Box display="flex" alignItems="center">
        <Button variant="outlined" size="medium" onClick={goToTodaysDate}>
          Today
        </Button>
        <ControlButtonsWrapper>
          <IconButton onClick={goToPrevWeek}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={goToNextWeek}>
            <ChevronRightIcon />
          </IconButton>
        </ControlButtonsWrapper>
        <Typography variant="h4" color="textSecondary">
          {getDateFormattedMonthYear(startDate)}
        </Typography>
      </Box>
    </Box>
  );
};

const ControlButtonsWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(6),
}));

export default CalendarToolbar;
