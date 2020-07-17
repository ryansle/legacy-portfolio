import React from "react";
import {
  Typography,
  Grid,
  Chip,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "bold",
  },
  position: {
    color: "#757575",
  },
  dateRange: {
    fontStyle: "italic",
    color: "#757575",
    marginBottom: 20,
  },
}));

const UNL = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <Typography variant="h5" className={classes.position}>Teaching Assistant</Typography>
        <Typography variant="h5" className={classes.dateRange}>January 2019 - Now</Typography>
      </section>
    </div>
  );
};

export default UNL;