import styled from "@material-ui/core/styles/styled";
import Box from "@material-ui/core/Box";
import lightBlue from "@material-ui/core/colors/lightBlue";

// type defination for EventOverlay position
type OverlayPositionProps = {
  top: string | number;
  height: string | number;
};

// returns EventOverlay position
const getEventOverlayPosition = (
  duration: number,
  minutes: number
): OverlayPositionProps => {
  return {
    top: minutes >= 30 ? "30px" : 0,
    height: duration,
  };
};

type props = {
  eventDuration: number;
  eventDate: Date;
  children?: React.ReactNode;
};

// EventOverlay component
const EventOverlay = ({
  eventDuration,
  eventDate,
  children,
}: props): JSX.Element => {
  const position: OverlayPositionProps = getEventOverlayPosition(
    eventDuration,
    eventDate.getMinutes()
  );
  return <EventOverlayWrapper {...position}>{children}</EventOverlayWrapper>;
};

const EventOverlayWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 0,
  left: 0,
  boxShadow: theme.shadows[2],
  zIndex: theme.zIndex.tooltip,
  background: lightBlue[500],
  color: "#fff",
  borderRadius: theme.spacing(1),
  padding: theme.spacing(1),
}));

export default EventOverlay;
