import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  root: {}
});

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { characters: [], isLoading: false };
    this.loadCharacters = this.loadCharacters.bind(this);
  }

  async loadCharacters() {
    this.setState({ characters: [], isLoading: true });
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    const characters = data.results.map(result => {
      const { id, name, status, species } = result;
      return { id, name, status, species };
    });
    this.setState({ characters, isLoading: false });
  }

  componentDidMount() {
    console.log("Mounted");
    this.loadCharacters();
  }

  render() {
    const { classes } = this.props;
    const { characters, isLoading } = this.state;
    return (
      <div className={classes.root}>
        <Typography>
          Here you'll find a list of all characters in the serie and detailed
          information of the character selected from the table.
        </Typography>
        <Button variant="contained" onClick={this.loadCharacters}>
          Reload Characters
        </Button>
        {isLoading && (
          <CircularProgress className={classes.progress} color="secondary" />
        )}

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Species</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {characters.map(row => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.species}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
