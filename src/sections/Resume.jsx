import React from "react";

// Components
import {
  Typography,
  useMediaQuery
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import resume from "../resources/resume.pdf";

const useStyles = makeStyles(() => ({
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
      <section className={isSmallScreen ? "responsiveContainer" : "container"}>
        <Typography className="title" variant="h4">Condensed Portfolio</Typography>
        <Typography variant="body1">Resume last updated on August 19th, 2020. Created with LaTeX.</Typography>

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