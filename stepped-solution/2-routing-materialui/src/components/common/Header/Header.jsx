import React from "react";
import * as Logo from "assets/logo.png";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Menu from "components/common/Menu";

const styles = theme => ({
  logo: {
    animation: "logo-scale infinite 5s linear",
    height: "10.5vmin",
    padding: 10
  },
  header: {
    backgroundColor: theme.palette.primary.main,
    minHeight: "25vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  "@keyframes logo-scale": {
    "0%": {
      transform: "scale(0.2)"
    },
    "50%": {
      transform: "scale(1.2)"
    },
    "100%": {
      transform: "scale(0.2)"
    }
  },
  headerText: {
    color: theme.palette.common.titleColorSecondary
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <header className={classes.header}>
      <Menu />
      <img src={Logo} className={classes.logo} alt="Rick and Morty Logo" />
      <Typography variant="h4" className={classes.headerText}>
        Rick and Morty JS
      </Typography>
    </header>
  );
};

export default withStyles(styles)(Header);
