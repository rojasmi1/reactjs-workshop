import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  itemsList: {
    listStyle: "none",
    display: "flex"
  },
  item: {
    marginRight: theme.spacing.unit,
    "& p": {
      color: theme.palette.common.white,
      textDecoration: "none"
    }
  }
});

const Header = props => {
  const { classes } = props;
  return (
    <nav>
      <ul className={classes.itemsList}>
        <li className={classes.item}>
          <Link to="/">
            <Typography>Home</Typography>
          </Link>
        </li>
        <li className={classes.item}>
          <Link to="/about">
            <Typography>About</Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default withStyles(styles)(Header);
