import React from "react";

// Components
import {
  Grid,
  Typography,
  Chip,
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  position: {
    color: "#757575",
  },
  dateRange: {
    fontStyle: "italic",
    color: "#757575",
  },
  media: {
    maxWidth: "90%",
    height: "auto",
  },
  tech: {
    margin: 5,
  },
}));

const PositionHeader = ({ website, image, alt, title, dateRange, stack }) => {
  const classes = useStyles();

  return (
    <>
      <p align="middle">
        <a href={website}>
          <img 
            className={classes.media}
            src={image}
            alt={alt}
          />
        </a>
      </p>
      <Grid container justify="space-between">
        <Grid item>
          <Typography variant="h5" className={classes.position}>
            {title}
          </Typography>
          <Typography variant="h6" className={classes.dateRange}>
            {dateRange}
          </Typography>
        </Grid>
        <Grid item>
          {
            stack.map((tech, index) => 
              <Chip
                key={index}
                className={classes.tech}
                label={tech}
              />
            )
          }
        </Grid>
      </Grid>
      <br/> 

      <Typography variant="body1">
        <a href={website}>Company Website</a>
      </Typography>
      <br/>
    </>
  );
};

export default PositionHeader;