import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CharactersTableContainer from "containers/characters/CharactersTableContainer";
import CharactersSearchContainer from "containers/characters/CharactersSearchContainer";
import CharacterProfileContainer from "containers/characters/CharacterProfileContainer";
import ErrorMessageContainer from "containers/common/ErrorMessageContainer";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit
  },
  messages: {
    maxWidth: '50vw',
    margin: '0 auto'
  }
});

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.messages}>
        <ErrorMessageContainer />
        </div>
        <CharactersSearchContainer />
        <Grid container>
          <Grid item xs={12} sm={7} md={5}>
            <CharactersTableContainer />
          </Grid>
          <Grid item xs={12} sm={7} md={5}>
            <CharacterProfileContainer />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
