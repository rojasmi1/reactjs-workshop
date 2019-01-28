import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        This site is material used for an introductory workshop of ReactJS,
        Redux and Redux Saga
      </div>
    );
  }
}

export default withStyles(styles)(Home);
