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
  subtitle: {
    fontWeight: "bold",
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
          <img 
            className={classes.media}
            src={raven}
            alt="Raven Industries"
          />
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
        <br/>
        <Typography variant="body1">
          Raven is a technology company that creates innovative solutions to great challenges. 
          Utilizing their strength in engineering, manufacturing, and technological innovation, Raven is a leader in 
          precision agriculture, high performance specialty films, and situational awareness markets.
        </Typography>
        <br/>
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
          ever experience working in industry, I was quite proud of the work I had performed over the course of the summer. Perhaps the most important lesson I
          learned at Raven, in the words of my mentor, "was learning how to learn on my own." Since this was my first ever internship, I came from a previous background
          of consistently being able to ask others for support when I didn't understand concepts or know how to do things. By the end of the summer, I was able to learn
          how to be much more self-sufficient in picking up new tasks and learning new things.
        </Typography>
      </section>
    </div>
  );
};

export default Raven;