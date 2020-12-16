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
  const isSmallScreen = useMediaQuery("(max-width: 1500px)");

  console.log(isSmallScreen);

  return (
    <>
      <div className={isSmallScreen ? "responsive-container" : "container"}>
        <Typography variant="h4" className="title">Who Am I?</Typography>
        <Typography variant="body1">
          Hello! My name is Ryan Le and I am a senior at the University of Nebraska-Lincoln studying Software Engineering.
          Back in August of 2017, I moved to Lincoln, Nebraska, from my hometown of Sioux Falls, South Dakota, in order to kickstart my college career
          and learn the ins and outs of software development. Since then, I have learned a lot and have been enjoying every minute of it.
        </Typography>
        <br />

        <Typography variant="body1">
          So far, I have been enjoying front-end development the most as it allows me to utilize my creative side while
          also leveraging my client-facing abilities to learn how to improve the user experience. Lately, I have been writing a lot of 
          JavaScript in collaboration with technologies like React.js and Material-UI to create my projects. In time, I'm hoping to pivot and
          gain additional experience in a full-stack environment leveraging tools like Amazon Web Services and the Serverless Framework.
        </Typography>
        <br /> <br />

        <Typography variant="h4" className="title">Education</Typography>
        <Typography variant="body1"><b>University of Nebraska-Lincoln</b></Typography>
        <Typography variant="body1">
          Bachelor of Science in <b> Software Engineering</b>, Minor in <b>Mathematics</b>
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
          I am also heavily involved in my university's Engineering Student Advisory Board, serving as the board's Vice President of Communcation. 
          Along with that, my friends and I are busy at work on our SOFTie Startup initiative through our university's senior design program,
          an altered version of our school's capstone experience that allows us to pursue our own unique project idea while simulating the early 
          stages of a startup environment.
        </Typography>
        <br />

        <p align="center">
          <img 
            src={nebraska} 
            className={isSmallScreen ? classes.responsiveImage : classes.image}
            alt="Go Big Red!"
          />
        </p>
        <br /> <br />

        <Typography variant="h4" className="title">Personal</Typography>
        <Typography variant="body1" component={"span"}>
          But as busy as my life can be with school, work, and extracurriculars, I can still find time to set aside to do things I love including...
          <ul>
            <li>Going for long jogs around Lincoln, NE to rest my mind <span role="img" aria-label="(Running Man)">🏃‍♂️</span></li>
            <li>Traveling within the country to brand new places with my amazing group of friends <span role="img" aria-label="(Mountain)">⛰️</span></li>
            <li>Spending quality time with friends and family <span role="img" aria-label="(Family)">👨‍👩‍👧‍👦</span></li>
            <li>Learning how to improve my skills as a software engineer <span role="img" aria-label="(Laptop)">💻</span></li>
            <li>Playing video games <span role="img" aria-label="(Video Game Controller)">🎮</span></li>
          </ul>
          I consider myself very much a people person; I love meeting new people and am always willing to put myself out there 
          into social situations where I can talk to new people.
        </Typography>
        <br /> <br />
        <Typography className={!isSmallScreen ? classes.bold: "title"} variant="h4">
          Professional References
        </Typography>
      </div>

      <div className={isSmallScreen ? classes.referenceContainer : "container"}>
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
            location="Lincoln, NE"
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
    </>
  );
};

const useStyles = makeStyles(() => ({
  image: {
    width: "50%",
    height: "auto",
  },
  responsiveImage: {
    width: "65%",
    height: "auto",
  },
  bold: {
    fontWeight: "bold",
  },
  referenceContainer: {
    padding: "0px 5vw 0px 5vw",
  },
}));
  
export default About;