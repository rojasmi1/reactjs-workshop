import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  search: {
    margin: `${theme.spacing.unit * 4}px 0`
  }
});

class CharactersSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyword: "" };
  }

  render() {
    const { classes, searchCharacters } = this.props;
    const { keyword } = this.state;

    return (
      <div>
        <Typography>
          Please enter a keyword to search for a character!
        </Typography>

        <Grid container className={classes.search}>
          <Grid item xs={12} sm={4} md={4}>
            <Input
              fullWidth
              value={keyword}
              placeholder="Type yourkeyword here..."
              onChange={(event) => this.setState({ keyword: event.target.value })}
              onKeyPress={(event) => {
                if (event.key === 'Enter') {
                  searchCharacters(keyword);
                  event.preventDefault();
                }
              }}
            />
          </Grid>
          <Grid item sm={1} md={1} >

          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => searchCharacters(keyword)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(CharactersSearch);
