import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "@material-ui/core/styles/styled";

/**
 * Application navbar
 */
const Navbar = (): JSX.Element => {
  return (
    <AppBar position="relative">
      <Toolbar>
        <NavTitle variant="h6">Calendar</NavTitle>
      </Toolbar>
    </AppBar>
  );
};

const NavTitle = styled(Typography)({
  flexGrow: 1,
});
export default Navbar;
