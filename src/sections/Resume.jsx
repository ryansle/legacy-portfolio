import React from "react";
import {
  Typography,
  useMediaQuery
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
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '4vw',
    paddingRight: '4vw',
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  pdf: {
    width: "100%",
    height: 1200,
  },
}));

const Resume = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <Typography className={classes.title} variant="h4">Condensed Portfolio</Typography>
        <Typography variant="body1">Resume last updated on July 19th, 2020. Created with LaTeX.</Typography>

        <br/>
        <iframe 
          src={resume} 
          className={classes.pdf}
          title="My Resume"
          allowfullscreen="" 
          frameborder="0"
        />
        <br/> <br/>
      </section>
    </div>
  );
}
  
export default Resume;