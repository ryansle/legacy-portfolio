import React from "react";

import { useMediaQuery } from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Credit to Peyton Tanzillo (PeytonTanzillo.com) for the banner component
const Banner = ({ image, alt, screenHeight }) => {
  const classes = useStyles();
  const tabletScreen = useMediaQuery("(max-width: 700px)");

  return (
    <div
      className={tabletScreen ? classes.tabletBanner : classes.banner}
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
  tabletBanner: {
    display: "flex",
    backgroundPosition: "center",
    backgroundSize: "cover",
    borderRadius: "10px 10px 0px 0px",
  },
  banner: {
    display: "flex",
    backgroundPosition: "right",
    backgroundSize: "cover",
    borderRadius: "10px 10px 0px 0px",
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