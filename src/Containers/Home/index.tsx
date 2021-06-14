import Grid from "@material-ui/core/Grid";
import { styled } from "@material-ui/core";

const Home = (): JSX.Element => {
  return (
    <Wrapper container direction="column">
      <h1>HelloWorld</h1>
    </Wrapper>
  );
};

const Wrapper = styled(Grid)({
  height: "100vh",
});

export default Home;
