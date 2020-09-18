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
import about from "../resources/stock/about.jpeg";
import experience from "../resources/stock/experience.jpeg";
import skills from "../resources/stock/skills.jpeg";
import projects from "../resources/stock/projects.jpeg";
import contact from "../resources/stock/contact.jpeg";
import resume from "../resources/stock/resume.jpg";

const Home = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <Banner
        image={isSmallScreen ? cropped : mountains}
        alt="Ryan Le - Dynamic Banner"
        screenHeight={50}
        pre="You should hire"
        name="Ryan Le"
        post="as your new front-end developer."
      />
      <section className={isSmallScreen ? "responsiveContainer" : "container"}>
        <Typography className="title" variant="h3">Welcome.</Typography>
        <Typography variant="body1">
          I created this online portfolio from the ground up in order to showcase my skills, 
          gain some web development experience, go into greater detail about who I am, 
          and help you understand why you should consider me for full-time software engineering positions 
          at your company. You can learn a lot more by navigating between the links to the side or below!
        </Typography>
        <br/>
        <Typography variant="h5">Quick Links</Typography>
        <br/>
        <Grid container justify="space-between">
          <NavCard
            image={about}
            icon="about"
            title="About"
            description="Learn more about who I am as a person, what I am looking for in a full-time position, and who some of my professional references are."
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
            description="Find out what my expertise is in, and learn how I can leverage those skills in a position at your company."
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
      </section>
    </div>
  );
};
  
export default Home;