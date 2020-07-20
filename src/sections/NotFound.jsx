import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery
} from "@material-ui/core";
import {
  Home as House,
  Person,
  Work,
  Code,
  Computer,
  Email
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
    marginBottom: 20,
  },
  nav: {
    width: "32%",
    height: "auto",
    marginBottom: 20,
    boxShadow: "0px 3px 4px 0px #555",
    border: "1px solid #9fa2b4",
    textDecoration: "none",
  },
  responsiveNav: {
    width: "100%",
    height: "auto",
    marginBottom: 20,
    boxShadow: "0px 3px 4px 0px #555",
    border: "1px solid #9fa2b4",
    textDecoration: "none",
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  icon: {
    height: 30,
    width: "auto",
    paddingRight: 7,
  },
  media: {
    width: "60%", 
    height: "auto",
  },
  responsiveMedia: {
    width: "80%",
    height: "auto",
  }
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
        <Typography variant="body1" style={{ textAlign: "center" }}>Looks this page couldn't be found. Try checking out one of these pages instead:</Typography>
        <br/> <br/>

        <Grid container justify="space-between">

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/">
            <CardContent>
              <Grid container>
                <House className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Home</Typography>
              </Grid>
              <Typography variant="body1">Homebase for my portfolio website. Nothing special here.</Typography>
            </CardContent>
          </Card>

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/about">
            <CardContent>
              <Grid container>
                <Person className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>About</Typography>
              </Grid>
              <Typography variant="body1">Learn more about who I am as a person and what I am looking for in a full-time role.</Typography>
            </CardContent>
          </Card>

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/experience">
            <CardContent>
              <Grid container>
                <Work className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Experience</Typography>
              </Grid>
              <Typography variant="body1">Check out where I have been working over the last few years (and contact me to add your company to the list!).</Typography>
            </CardContent>
          </Card>

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/skills">
            <CardContent>
              <Grid container>
                <Code className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Skills</Typography>
              </Grid>
              <Typography variant="body1">Find out what my expertise is in, and learn how I can leverage those skills in a position at your company.</Typography>
            </CardContent>
          </Card>

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/projects">
            <CardContent>
              <Grid container>
                <Computer className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Projects</Typography>
              </Grid>
              <Typography variant="body1">See all the cool projects I have worked on through university and in my own free time in the past.</Typography>
            </CardContent>
          </Card>

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/contact">
            <CardContent>
              <Grid container>
                <Email className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Contact Me</Typography>
              </Grid>
              <Typography variant="body1">Have a question about something? Want to offer me a job? Just want someone to talk to? Get in contact with me about anything!</Typography>
            </CardContent>
          </Card>

        </Grid>

        <br/> <br/>
      </section>
    </div>
  );
}
  
export default Resume;