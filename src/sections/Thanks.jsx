import React from "react";
import {
  Typography,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Assets

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
}));

const Thanks = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <Typography className={classes.title} variant="h4">Thanks!</Typography>
      </section>
    </div>
  );
}
  
export default Thanks;