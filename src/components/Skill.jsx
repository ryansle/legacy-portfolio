import React from "react";

// Components
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  media: {
    height: 100,
    width: 100,
    padding: 5,
  },
  skill: {
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: 20,
  },
}));

const Skill = ({ name, image, alt }) => {
  const classes = useStyles();

  return (
    <>
      <Grid 
        item 
        className={classes.skill}
      >
        <img 
          src={image} 
          alt={alt} 
          className={classes.media}
        />
        <Typography variant="h6">
          {name}
        </Typography>
      </Grid>
    </>
  );
};

export default Skill;