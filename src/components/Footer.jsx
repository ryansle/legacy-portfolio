import React from "react";

// Components
import {
  Typography,
  BottomNavigation,
  useMediaQuery
} from "@material-ui/core"

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bottom: {
    background: "#3f51b5",
    color: "white",
    marginTop: 100,
    paddingTop: 10,
    bottom: 0,
  },
  responsiveBottom: {
    background: "#3f51b5",
    color: "white",
    marginTop: 100,
    padding: 10,
    height: 70,
    bottom: 0,
  }
}));

const Footer = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const currentYear = new Date().getFullYear();

  return (
    <BottomNavigation className={isSmallScreen ? classes.responsiveBottom : classes.bottom}>
      <Typography variant={isSmallScreen ? "caption" : "h6"}>
        Copyright &copy; {currentYear} Ryan Le. Website made with React.js and Material-UI Components.
      </Typography>
    </BottomNavigation>
  );
}

export default Footer;