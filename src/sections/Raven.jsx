import React from "react";
import {
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import raven from "../resources/experience/raven.png";


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
  position: {
    color: "#757575",
  },
  dateRange: {
    fontStyle: "italic",
    color: "#757575",
    marginBottom: 20,
  },
  media: {
    maxWidth: "90%",
    height: "auto",
  },
  tech: {
    margin: 5,
  }
}));

const Raven = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <p align="middle">
          <a href="https://ravenind.com/">
            <img 
              className={classes.media}
              src={raven}
              alt="Raven Industries"
            />
          </a>
        </p>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" className={classes.position}>Software Engineer Intern</Typography>
            <Typography variant="h5" className={classes.dateRange}>May 2019 - August 2019</Typography>
          </Grid>
          <Grid item>
          <Chip
              className={classes.tech}
              label="Kendo UI"
            />
            <Chip
              className={classes.tech}
              label="C#"
            />
            <Chip
              className={classes.tech}
              label="ASP.NET Core"
            />
            <Chip
              className={classes.tech}
              label="SQL"
            />
            <Chip
              className={classes.tech}
              label="Dapper"
            />
            <Chip
              className={classes.tech}
              label="JavaScript"
            />
            <Chip
              className={classes.tech}
              label="HTML"
            />
            <Chip
              className={classes.tech}
              label="CSS"
            />
            <Chip
              className={classes.tech}
              label="GitLab"
            />
            <Chip
              className={classes.tech}
              label="Visual Studio Code"
            />
          </Grid>
        </Grid>

        <Typography variant="body1">
          <a href="https://ravenind.com/">Company Website</a>
        </Typography>
        <br/>

        <Typography variant="body1">
          Raven is a technology company that creates innovative solutions to great challenges. 
          Utilizing their strength in engineering, manufacturing, and technological innovation, Raven is a leader in 
          precision agriculture, high performance specialty films, and situational awareness markets.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.title}>Responsibilities</Typography>
        <Typography variant="body1">
          <ul>
            <li>Research and create development requirements.</li>
            <li>Document test plans and perform necessary testing on development code.</li>
            <li>Coordinate with my supervisor, mentor, and project management on development tasks.</li>
            <li>Learn best practices in a team development environment.</li>
            <li>Develop software (work closely with mentor and development team to meet objectives).</li>
            <li>Developed a Report Generator to easily export database information onto a formatted PDF.</li>
            <li>Utilized Chrome DevTools and Visual Studio Professional to trace through non-functional code.</li>
            <li>Learned best practices with version control by rebasing, squashing, and branching with Git.</li>
            <li>Familiarized myself with Kendo UI in order to simplify the web development process.</li>
          </ul>
        </Typography>
        <Typography variant="h5" className={classes.title}>About This Position</Typography>
        <Typography variant="body1">
          During my time at Raven, I worked on their Slingshot team, one of their few web-based software teams. I was primarily responsible
          for developing a report generation system that streamlined internal processes. Prior to my development of the DTC Report Generator, individuals
          within the company would have to manually filter through a 2000-item Excel spreadsheet to find pertinent data for upcoming meetings, format it 
          into a readable report, and then take these reports into their meetings with them. Based on that description alone, it is easy to understand
          why that already was not a good system. The Slingshot team took it upon themselves to transfer all of the data into a SQL database prior to my 
          internship start date, and when I began, I simply had to create the report system that would query the database accordingly and allow a user a
          consistent, easy-to-use method of generating large-scale reports.
        </Typography>
        <br/>
        <Typography variant="body1">
          My report generation solution at Raven allowed internal teams to create up to 600-page (up to, because selecting every single database item created a 
          document this large) PDF reports in a matter of minutes, compared to the previous
          hours it would take to hunt down all the necessary information and format it accordingly. The system allowed for report consistency across the board, 
          abstraction of data, filtering of components based on their relationships to previously selected components, and much more. Being that this was my first
          ever experience working in industry, I was quite proud of the work I had performed over the course of the summer.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.title}>What did I learn?</Typography>
        <Typography variant="body1">
            By far the most important lesson I learned during my time at Raven Industries was, in the words of my mentor, "learning how to learn on my own."
            Since this was my first industry experience, I came from a background of consistently being able to ask others for support when things did not make sense
            or if I did not know how to do things. Due to this, when I first started at Raven, I spent far too much time asking my mentor for help on things that were
            simply a Google search away. By establishing some borders between when I would ask for help, I was forced to do more digging into my problems before
            confronting anyone, effectively teaching me core problem solving capabilities. On top of coming out of my internship as both a better software engineer
            and a better problem solver, Raven taught me:
            <ul>
              <li>the bare basics of web development in conjunction with Kendo UI and the .NET framework.</li>
              <li>effective communication skills through frequent stakeholder meetings to showcase my application.</li>
              <li>how to begin gathering requirements for brand new software projects.</li>
              <li>how to effectively utilize a debugger instead of writing a million print statements!</li>
            </ul>
        </Typography>
        <br/> <br/> <br/>
      </section>
    </div>
  );
};

export default Raven;