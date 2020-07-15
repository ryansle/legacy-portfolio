import React from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core"
import Banner from "../components/Banner";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import mountains from "../resources/MountainBanner.png";

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
  nav: {
    width: 400,
    marginBottom: 10,
    boxShadow: "0px 3px 4px 0px #555",
    border: "1px solid #9fa2b4",
  },
  subtitle: {
    fontWeight: 'bold',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div>
      <Banner
        image={mountains}
        alt="Ryan Le - Dynamic Banner"
        screenHeight={50}
      />
      <div className={classes.container}>
        <Typography className={classes.title} variant="h3">Welcome to my web page.</Typography>
        <Typography variant="body1">
          I created this online portfolio from the ground up in order to showcase my skills, 
          gain some web development experience, go into greater detail about who I am, 
          and help you understand why you should consider me for full-time software engineering positions 
          at your company. You can learn a lot more by navigating between the links to the side or below!
        </Typography>
        <br/>
        <Grid container justify="space-evenly">

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>Home</Typography>
              <Typography variant="body1">You are here!</Typography>
            </CardContent>
          </Card>

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>About</Typography>
              <Typography variant="body1">Learn more about who I am.</Typography>
            </CardContent>
          </Card>

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>Experience</Typography>
              <Typography variant="body1">Check out where I've been working over the last few years.</Typography>
            </CardContent>
          </Card>

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>Skills</Typography>
              <Typography variant="body1">Find out what my expertise is in.</Typography>
            </CardContent>
          </Card>

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>Projects</Typography>
              <Typography variant="body1">See what I've worked on in the past!</Typography>
            </CardContent>
          </Card>

          <Card className={classes.nav}>
            <CardContent>
              <Typography variant="h5" className={classes.subtitle}>Contact Me</Typography>
              <Typography variant="body1">Get in contact with me about anything!</Typography>
            </CardContent>
          </Card>

        </Grid>
        <br/>
      </div>
    </div>
  );
}
  
export default Home;