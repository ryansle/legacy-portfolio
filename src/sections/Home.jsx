import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery,
} from "@material-ui/core";
import Banner from "../components/Banner";
import NavCard from "../components/NavCard";

// Assets
import mountains from "../resources/MountainBanner.png";
import cropped from "../resources/CroppedBanner.png";
import about from "../resources/stock/about.jpg";
import experience from "../resources/stock/experience.jpg";
import skills from "../resources/stock/skills.jpg";
import projects from "../resources/stock/projects.jpg";
import contact from "../resources/stock/contact.jpg";
import resume from "../resources/stock/resume.jpg";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1170px)");

  return (
    <div>
      <Banner
        image={isSmallScreen ? cropped : mountains}
        alt="Ryan Le - Dynamic Banner"
        screenHeight={50}
      />
      <div className={isSmallScreen ? "responsive-container" : "container"}>
        <Typography variant="h3"><b>Ryan Le</b></Typography>
        <Typography variant={isSmallScreen ? "h6" : "h5"} color="textSecondary">
          <i>Software Engineer &amp; Product Manager</i>
        </Typography>
        <br/>

        <Typography variant="body1">
          I built this online portfolio using the Material-UI component library on top of React.js to gain some initial hands-on experience 
          with the latest web development standards. 
          Check out the links below to learn more about what makes me a great addition to your development team.
        </Typography>
        <br/>
        
        <Grid container justify="space-between">
          <NavCard
            image={about}
            icon="about"
            title="About"
            description="Learn more about who I am as a person, my involvements in college, and who some of my professional references are."
            link="/about"
            linkText="Learn more about me"
          />
          <NavCard
            image={experience}
            icon="experience"
            title="Experience"
            description="Check out where I have been working over the last few years, and how I have managed to contribute to corporations in the past."
            link="/experience"
            linkText="See where I have worked in the past"
          />
          <NavCard
            image={skills}
            icon="skills"
            title="Skills"
            description="Find out what my expertise is in, and learn how I can leverage those skills in a position with your company or organization."
            link="/skills"
            linkText="Learn about my expertise"
          />
          <NavCard
            image={projects}
            icon="projects"
            title="Projects"
            description="See what I have built throughout my time in university, and all the other cool things I have worked on in my spare time."
            link="/projects"
            linkText="View my project portfolio"
          />
          <NavCard
            image={contact}
            icon="contact"
            title="Contact"
            description="Have a question about something? Want to offer me a job? Just want someone to talk to? Get in contact with me about anything!"
            link="/contact"
            linkText="Get in touch with me"
          />
          <NavCard
            image={resume}
            icon="resume"
            title="Resume"
            description="There is a lot of information on this website. Take a look at my resume for an overview of my career highlights instead."
            link="/resume"
            linkText="See the condensed version"
          />
        </Grid>
      </div>
    </div>
  );
};
  
export default Home;