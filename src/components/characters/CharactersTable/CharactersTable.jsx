import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  table: {
    maxWidth: 500
  }
});

const CharactersTable = props => {
  const { classes, rows = [] } = props;
  return (
    <div>
      <Typography>
        Here you'll find a list of all characters in the serie and detailed
        information of the character selected from the table.
      </Typography>
      <b />
      <Button onClick={() => props.loadCharacters()}>Load data!</Button>
      {rows.length ? (
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Species</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
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
      ) : (
        "There is no data to be displayed! :("
      )}
    </div>
  );
};

export default withStyles(styles)(CharactersTable);
