import React from "react";
import {
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import resume from "../resources/resume.pdf";

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
}));

const Resume = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <Typography className={classes.title} variant="h4">Condensed Portfolio</Typography>
        <Typography variant="body1">Resume last updated on July 19th, 2020. Created with LaTeX.</Typography>

        <br/>
        <iframe src={resume} title="My Resume" width="100%" height="1200"/>
        <br/> <br/>
      </section>
    </div>
  );
}
  
export default Resume;