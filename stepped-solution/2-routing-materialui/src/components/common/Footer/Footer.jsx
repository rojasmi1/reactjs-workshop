import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MyIcon from "components/common/MyIcon";

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.primary.light,
    minHeight: "15vh",
    padding: theme.spacing.unit * 2
  },
  footerText: {
    color: theme.palette.common.white,
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "left"
    }
  }
});

const Footer = props => {
  const { classes, theme } = props;
  return (
    <footer className={classes.footer}>
      <Grid container justify="center">
        <Grid item xs={12} sm={10}>
          <Typography variant="h4" className={classes.footerText}>
            Copyright 2019
          </Typography>
        </Grid>
        <Grid item xs={1} sm={1}>
          <MyIcon iconName="github" color={theme.palette.primary.dark} />
        </Grid>
        <Grid item xs={1} sm={1}>
          <MyIcon iconName="twitter" color={theme.palette.primary.dark} />
        </Grid>
      </Grid>
    </footer>
  );
};

export default withStyles(styles, { withTheme: true })(Footer);
