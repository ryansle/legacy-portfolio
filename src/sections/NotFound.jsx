import React from "react";
import {
  Typography,
  Grid,
  Button,
  useMediaQuery
} from "@material-ui/core";
import {
  Home,
  BugReport
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

// Assets
import missing from "../resources/404.svg";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  media: {
    width: "30%", 
    height: "auto",
  },
  responsiveMedia: {
    width: "80%",
    height: "auto",
  },
  nav: {
    margin: 5,
  },
}));

const Resume = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={classes.container}>
        <p align="middle">
          <img 
            src={missing}
            className={isSmallScreen ? classes.responsiveMedia : classes.media}
            alt="404 Graphic Not Found"  
          />
        </p>
        <br/>
        <Typography variant="h4" className={classes.title}>Oops, this page could not be found</Typography>
        <Typography variant="body1" style={{ textAlign: "center" }}>Try accessing one of these pages instead?</Typography>
        <br/> <br/>

        <Grid container justify="space-around">

          <Button
            className={classes.nav}
            variant="contained"
            size="large"
            color="primary"
            startIcon={<Home/>}
            component={Link}
            to="/"
          >
            Back to Home
          </Button>

          <Button 
            className={classes.nav} 
            variant="contained"
            size="large"
            color="primary"
            startIcon={<BugReport/>}
            component={Link}
            to="/contact"
          >
            Report This
          </Button>

        </Grid>

        <br/> <br/>
      </section>
      <div style={{ marginBottom: 200 }}/>
    </div>
  );
}
  
export default Resume;