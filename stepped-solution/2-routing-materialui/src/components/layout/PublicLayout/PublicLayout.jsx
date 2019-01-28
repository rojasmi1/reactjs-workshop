import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Route } from "react-router-dom";
import Header from "components/common/Header";
import Footer from "components/common/Footer";

const styles = theme => ({
  root: {},
  content: {
    backgroundColor: theme.palette.common.backGround,
    padding: theme.spacing.unit * 4,
    minHeight: "60vh"
  },
  title: {
    paddingBottom: theme.spacing.unit * 2,
    fontWeight: "bold"
  }
});

class PublicLayout extends Component {
  render() {
    const { component: Component, title, ...rest } = this.props;
    const { classes } = this.props;

    return (
      <Route
        {...rest}
        render={matchProps => {
          return (
            <div className={classes.root}>
              <Header />
              <div className={classes.content}>
                <Typography className={classes.title} variant="h2">
                  {title}
                </Typography>
                <Component {...matchProps} />
              </div>
              <Footer />
            </div>
          );
        }}
      />
    );
  }
}

export default withStyles(styles)(PublicLayout);
