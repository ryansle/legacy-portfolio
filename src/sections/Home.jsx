import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import Banner from "../components/Banner";
import NavCard from "../components/NavCard";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

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
        <Typography className={classes.title} variant="h3">Welcome.</Typography>
        <Typography variant="body1">
          I created this online portfolio from the ground up in order to showcase my skills, 
          gain some web development experience, go into greater detail about who I am, 
          and help you understand why you should consider me for full-time software engineering positions 
          at your company. You can learn a lot more by navigating between the links to the side or below!
        </Typography>
        <br/>
        <Grid container justify="space-between">
          <NavCard
            link="/"
            icon="home"
            title="Home"
            description="You are here!"
          />
          <NavCard
            link="/about"
            icon="about"
            title="About"
            description="Learn more about who I am as a person and what I am looking for in a full-time role."
          />
          <NavCard
            link="/experience"
            icon="experience"
            title="Experience"
            description="Check out where I have been working over the last few years (and contact me to add your company to the list!)."
          />
          <NavCard
            link="/skills"
            icon="skills"
            title="Skills"
            description="Find out what my expertise is in, and learn how I can leverage those skills in a position at your company."
          />
          <NavCard
            link="/projects"
            icon="projects"
            title="Projects"
            description="See all the cool projects I have worked on through university and in my own free time in the past."
          />
          <NavCard
            link="/contact"
            icon="contact"
            title="Contact"
            description="Have a question about something? Want to offer me a job? Just want someone to talk to? Get in contact with me about anything!"
          />
        </Grid>
      </section>
    </div>
  );
}
  
export default Home;