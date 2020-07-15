import React from "react";
import {
  Typography
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "#3f51b5",
    width: "100%",
    color: "white",
    textAlign: "left",
    paddingLeft: 100, 
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.appBar}>
      <Typography variant="h6" className={classes.footer}>
        Copyright © 2020 Ryan Le. Website made with React and Material UI Components.
      </Typography>
    </div>
  );
}

export default Footer;