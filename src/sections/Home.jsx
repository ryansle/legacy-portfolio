import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  useMediaQuery,
} from "@material-ui/core";
import {
  Home as House,
  Person,
  Work,
  Code,
  Computer,
  Email
} from "@material-ui/icons";
import Banner from "../components/Banner";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
// Assets
import mountains from "../resources/MountainBanner.png";
import cropped from "../resources/CroppedBanner.png";

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
}));

const Home = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <Banner
        image={isSmallScreen ? cropped : mountains}
        alt="Ryan Le - Dynamic Banner"
        screenHeight={50}
      />
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <Typography className={classes.title} variant="h3">Welcome to my web page.</Typography>
        <Typography variant="body1">
          I created this online portfolio from the ground up in order to showcase my skills, 
          gain some web development experience, go into greater detail about who I am, 
          and help you understand why you should consider me for full-time software engineering positions 
          at your company. You can learn a lot more by navigating between the links to the side or below!
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.title}>Links</Typography>
        <Grid container justify="space-between">

          <Card className={isSmallScreen ? classes.responsiveNav : classes.nav} component={Link} to="/">
            <CardContent>
              <Grid container>
                <House className={classes.icon}/>
                <Typography variant="h5" className={classes.subtitle}>Home</Typography>
              </Grid>
              <Typography variant="body1">You are here!</Typography>
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
        <br/>
      </section>
    </div>
  );
}
  
export default Home;