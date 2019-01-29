import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CharactersTableContainer from "containers/characters/CharactersTableContainer";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CharactersTableContainer />{" "}
      </div>
    );
  }
}

export default withStyles(styles)(Home);
