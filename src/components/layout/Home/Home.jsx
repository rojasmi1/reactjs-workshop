import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.root}>This is the home page!</div>;
  }
}

export default withStyles(styles)(Home);
