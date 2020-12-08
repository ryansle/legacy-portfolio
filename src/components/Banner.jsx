import React from "react";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Credit to Peyton Tanzillo (PeytonTanzillo.com) for the banner component
const Banner = ({ image, alt, screenHeight }) => {
  const classes = useStyles();

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