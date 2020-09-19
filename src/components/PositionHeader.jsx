import React from "react";

// Components
import {
  Grid,
  Typography,
  Chip,
  Avatar,
  useMediaQuery,
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { renderIcon } from "../utils/render-avatars";

const PositionHeader = ({ website, image, alt, title, dateRange, stack }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1300px)");

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
        <Grid item xs={isSmallScreen ? 12 : 5}>
          <Typography variant="h5" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            <i>{dateRange}</i>
          </Typography>
          <Typography variant="body1">
            <a href={website}>Company Website</a>
          </Typography>
          <br/>
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 5}>
          <Grid container justify={isSmallScreen ? "flex-start" : "flex-end"}>
            {
              stack.map((tech, index) => 
                <Chip
                  key={index}
                  className={classes.tech}
                  label={tech}
                  avatar={<Avatar src={renderIcon(tech)} />}
                />
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const useStyles = makeStyles(() => ({
  media: {
    maxWidth: "90%",
    height: "auto",
  },
  tech: {
    margin: 5,
  },
}));

export default PositionHeader;