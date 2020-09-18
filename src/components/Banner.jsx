import React from "react";

import { Grid, useMediaQuery } from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Credit to Peyton Tanzillo (PeytonTanzillo.com) for the banner component
const Banner = ({ image, alt, screenHeight, pre="", name="", post="" }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div
      className={classes.banner}
      style={{
        backgroundImage: `url(${image})`,
        height: `${screenHeight}vh`,
        width: "100%",
        boxShadow: "0px 3px 6px 0px #555",
      }}
      alt={alt}
    >
      {!isSmallScreen &&
        <Grid container alignItems="center">
          <p className={classes.text}>
            {pre}
            <br/>
            <span className={classes.name}>
              {name}
            </span>
            <br/>
            {post}
          </p>
        </Grid>
      }
    </div>
  );
};

const useStyles = makeStyles(() => ({
  banner: {
    display: "flex",
    backgroundPosition: "left",
    backgroundSize: "cover",
  },
  text: {
    paddingLeft: "4vw",
    fontSize: 40,
    fontFamily: "Candal",
  },
  name: {
    fontWeight: "bolder",
    fontSize: 70,
    fontStyle: "normal"
  },
}));

export default Banner;