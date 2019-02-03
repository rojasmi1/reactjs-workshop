import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  paper: {
    maxWidth: 500
  },
  button: {
    margin: `${theme.spacing.unit * 4}px 0`
  }
});

const CharactersTable = props => {
  const {
    classes,
    characters = [],
    selectCharacter,
    isLoadingCharacters
  } = props;

  const isSelected = row => {
    const { selectedRow = { id: 0 } } = props;

    return selectedRow.id === row.id;
  };

  return (
    <div>
      {characters.length ? (
        <Paper className={classes.paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Species</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {characters.map(character => {
                const isRowSelected = isSelected(character);
                return (
                  <TableRow
                    key={character.id}
                    hover
                    selected={isRowSelected}
                    onClick={() => selectCharacter(character)}
                  >
                    <TableCell component="th" scope="row">
                      {character.name}
                    </TableCell>
                    <TableCell align="right">{character.status}</TableCell>
                    <TableCell align="right">{character.species}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>
      ) : (
        !isLoadingCharacters && (
          <Typography>There is no data to be displayed!</Typography>
        )
      )}

      {
        isLoadingCharacters && (
          <CircularProgress/>
        )
      }
    </div>
  );
};

export default withStyles(styles)(CharactersTable);
