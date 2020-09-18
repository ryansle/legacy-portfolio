import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery
} from "@material-ui/core"
import { Link } from "react-router-dom";
import Reference from "../components/Reference";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import nebraska from "../resources/nebraska.svg";
import suzette from "../resources/references/SuzettePerson.jpg";
import billy from "../resources/references/BillyAllen.jpeg";
import brady from "../resources/references/BradyGarvin.png";
import chris from "../resources/references/ChrisBohn.png";
import christian from "../resources/references/ChristianBerck.png";
import jerry from "../resources/references/JerryHoffman.png";
import kevan from "../resources/references/KevanGray.jpg";
import marc from "../resources/references/MarcJohnson.jpeg";

const About = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? "responsiveContainer" : "container"}>
      <Typography variant="h4" className="title">Who Am I?</Typography>
      <Typography variant="body1">
        Hello! My name is Ryan Le and I am a senior at the University of Nebraska-Lincoln majoring in Software Engineering, with a minor in Mathematics.
        Back in August of 2017, I moved to Lincoln, Nebraska, from my hometown of Sioux Falls, South Dakota, in order to kickstart my college career
        and learn the ins and outs of software development. Since then, I have learned a lot and have been enjoying every minute of it.
        Now, I am on the search for a full-time web development opportunity!
      </Typography>
      <br />
      <Typography variant="body1">
        So far, I have been enjoying front-end development the most as it allows me to utilize my creative side while
        also leveraging my client-facing abilities to learn how to improve the user experience. Lately, I have been focusing on 
        JavaScript in collaboration with technologies like React.js, Material-UI, and Amazon Web Services (which I am still in the process of learning) to create my projects.
      </Typography>

      <div className={classes.whitespace}/>

      <Typography variant="h4" className="title">Education</Typography>
      <Typography variant="body1"><b>University of Nebraska-Lincoln</b></Typography>
      <Typography variant="body1">
        Bachelor of Science in 
        <b> Software Engineering</b>, 
        Minor in <b>Mathematics</b>
      </Typography>
      <Typography variant="body1">
        <b>Cumulative GPA:</b> 3.597/4.000
      </Typography>
      <br />
      <Typography variant="body1">
        Throughout my college career, I have gained a variety of experiences in different aspects of leadership and software development.
        You can learn more about these different experiences by visiting my <Link to="/projects">projects page</Link>, or read about my
        specific skillsets by reading through my <Link to="/skills">skills page</Link>.
      </Typography>
      <br />
      <Typography variant="body1">
        Now that I'm a senior at UNL, I am keeping busy with my duties as the Vice President of Communications for the university's Engineering
        Student Advisory Board (a position I was recently elected to), which is the governing body for our school's College of Engineering. Along with that, 
        my friends and I are hard at work on our SOFTie Startup initiative to form a company through our university's senior design program as our capstone
        achievement. 
      </Typography>
      <br />
      <Typography variant="body1">
        Here's how it works: instead of signing on for another year of working for an industry-sponsored project, the university is allowing our 
        assembled team of student developers to pursue our own startup project where we get to be our own primary stakeholders. A project in which we call the shots, 
        define our project vision, incubate our ideas from the ground up, and pursue technologies of interest in a startup environment all with the backing
        of our own tuition dollars, mitigating any and all risk of forming a company from the ground up. Things are going great so far!
      </Typography>
      <p align="center">
        <img 
          src={nebraska} 
          className={isSmallScreen ? classes.responsiveImage : classes.image}
          alt="Go Big Red!"
        />
      </p>

      <div className={classes.whitespace}/>

      <Typography variant="h4" className="title">More About Me</Typography>
      <Typography variant="body1" component={"span"}>
        But as busy as my life can be with school, work, and extracurriculars, I can still find time to set aside to do things I love including...
        <ul>
          <li>Going for long jogs around Lincoln, NE to rest my mind <span role="img" aria-label="(Running Man)">🏃‍♂️</span></li>
          <li>Practicing (amateur) photograpy of people and places <span role="img" aria-label="(Camera)">📸</span></li>
          <li>Traveling within the country to brand new places with my amazing group of friends <span role="img" aria-label="(Mountain)">⛰️</span></li>
          <li>Spending quality time with friends and family <span role="img" aria-label="(Family)">👨‍👩‍👧‍👦</span></li>
          <li>Learning how to improve my skills as a software engineer <span role="img" aria-label="(Laptop)">💻</span></li>
          <li>Playing video games <span role="img" aria-label="(Video Game Controller)">🎮</span></li>
        </ul>
        I consider myself very much a people person; I love meeting new people and am always willing to put myself out there 
        into social situations where I can talk to new people.
      </Typography>

      <div className={classes.whitespace}/>

      <Typography variant="h4" className="title">Professional References</Typography>
      <Grid container justify="space-between">
        <Reference 
          name="Dr. Chris Bohn, PhD"
          title="Assistant Professor of Practice"
          company="University of Nebraska-Lincoln"
          location="Lincoln, NE"
          email="bohn@unl.edu"
          image={chris}
          alt="Dr. Christopher Bohn, PhD"
        />
        <Reference
          name="Dr. Brady Garvin, PhD"
          title="Assistant Professor of Practice"
          company="University of Nebraska-Lincoln"
          location="Lincoln, NE"
          email="bgarvin@cse.unl.edu"
          phone="402-472-5088"
          image={brady}
          alt="Dr. Brady James Garvin, PhD"
        />
        <Reference
          name="Dr. Suzette Person, PhD"
          title="Associate Professor of Practice"
          company="University of Nebraska-Lincoln"
          location="Lincoln, NE"
          email="suzette.person@unl.edu"
          image={suzette}
          alt="Dr. Suzette Jean Person, PhD"
        />
        <Reference
          name="Jerry L. Hoffman"
          title="Founder &amp; Partner"
          company="Hoffman Strategy Group"
          location="Lincoln, NE"
          email="jerry@hoffmanstrategy.com"
          image={jerry}
          alt="Jerry L. Hoffman, Founder of the Hoffman Strategy Group"
        />
        <Reference
          name="Kevan Gray"
          title="Lead Technical Project Manager"
          company="Buckle"
          location="Kearney, NE"
          email="kevan.gray@buckle.com"
          phone="308-455-0711"
          image={kevan}
          alt="Kevan Gray"
        />
        <Reference
          name="Christian Berck"
          title="Software Engineer"
          company="Microsoft"
          location="Redmond, WA"
          email="christian@berck.org"
          phone="402-270-0986"
          image={christian}
          alt="Christian Berck"
        />
        <Reference
          name="Marc Johnson"
          title="IT Infrastructure Engineer"
          company="Nelnet"
          location="Lincoln, NE"
          email="marc.johnson@nelnet.net"
          image={marc}
          alt="Marc Johnson"
        />
        <Reference
          name="Billy Allen"
          title="IT Manager"
          company="Nelnet"
          location="Dallas, TX"
          email="billy.allen@nelnet.net"
          image={billy}
          alt="Billy Allen"
        />
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  whitespace: {
    margin: 60,
  },
  image: {
    width: "50%",
    height: "auto",
  },
  responsiveImage: {
    width: "80%",
    height: "auto",
  },
}));
  
export default About;