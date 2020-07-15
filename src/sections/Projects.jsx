import React from "react";
import {
  Typography,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
// Assets

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: '8vw',
    paddingRight: '8vw',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: 'bold',
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.container}>
        <Typography className={classes.title} variant="h3">Projects</Typography>
      </div>
    </div>
  );
}
  
export default Projects;