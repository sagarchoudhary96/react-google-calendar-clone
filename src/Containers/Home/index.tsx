import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core";
import Navbar from "Components/Navbar";
import CalendarView from "Containers/CalendarView";

const Home = (): JSX.Element => {
  return (
    <Wrapper container direction="column">
      <Navbar />
      <ContentArea item>
        <CalendarView />
      </ContentArea>
    </Wrapper>
  );
};

const Wrapper = styled(Grid)({
  height: "100vh",
});

const ContentArea = styled(Grid)(({ theme }) => ({
  flex: 1,
  overflow: "auto",
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
}));

export default Home;
