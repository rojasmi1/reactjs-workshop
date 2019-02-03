import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = theme => ({
  card: {
    maxWidth: 345,
    padding: theme.spacing.unit * 2
  },
  media: {
    height: 140,
  },
});

const CharacterProfile = (props) => {
    const { classes, selectedCharacter } = props;

    const { image, gender, name, species } = selectedCharacter;

    return (
      <Card className={classes.card}>
      { name ? (
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title="Character Image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography component="p">
            Gender: {gender}
            <br/>
            Species: {species}
          </Typography>
        </CardContent>
      </CardActionArea>
      ) : (
        <Typography>
          Please select a character from the list.
        </Typography>
      )}
    </Card>
    );
}

export default withStyles(styles)(CharacterProfile);
