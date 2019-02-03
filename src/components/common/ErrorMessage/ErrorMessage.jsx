import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  errorContainer: {
    padding: theme.spacing.unit * 2
  },
  errorText: {
    color: 'red'
  }
});

const Header = props => {
  const { classes, errorMessage, hasErrors } = props;
  return (
    <article className={classes.errorContainer}>
      { hasErrors && (
          <Typography className={classes.errorText} variant="h5">
            {errorMessage}
          </Typography>
      )}
        </article>
      );
};

export default withStyles(styles)(Header);
