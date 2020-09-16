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

const Resume = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? "responsiveContainer" : "container"}>
      <Typography className="title" variant="h4">Condensed Portfolio</Typography>
      <Typography variant="body1">Resume last updated on September 9th, 2020. Created with LaTeX.</Typography>

      <br/>
      <iframe 
        src={resume} 
        className={classes.pdf}
        title="My Resume"
        allowFullScreen="" 
        frameBorder="0"
      />
      <br/> <br/>
    </div>
  );
}

const useStyles = makeStyles(() => ({
  pdf: {
    width: "100%",
    height: 1200,
  },
}));
  
export default Resume;