import React from "react";
import {
  Typography,
  Grid,
  Chip,
  useMediaQuery
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import unl from "../resources/experience/unl.png";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: "8vw",
    paddingRight: "8vw",
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
  tech: {
    margin: 5,
  },
  media: {
    maxWidth: "90%",
    height: "auto",
  },
}));

const UNL = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <p align="middle">
          <a href="https://cse.unl.edu/home">
            <img
              className={classes.media}
              src={unl}
              alt="University of Nebraska-Lincoln: College of Engineering, Department of Computer Science &amp; Engineering"
            />
          </a>
        </p>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" className={classes.position}>Teaching Assistant</Typography>
            <Typography variant="h5" className={classes.dateRange}>January 2019 - Now</Typography>
          </Grid>
          <Grid item>
            <Chip
              className={classes.tech}
              label="Java"
            />
            <Chip
              className={classes.tech}
              label="JavaFX"
            />
            <Chip
              className={classes.tech}
              label="JavaFX Scene Builder"
            />
            <Chip
              className={classes.tech}
              label="GitLab"
            />
            <Chip
              className={classes.tech}
              label="IntelliJ IDEA"
            />
          </Grid>
        </Grid>

        <Typography variant="body1">
          <a href="https://cse.unl.edu/home">Department Website</a>
        </Typography>
        <br/>

        <Typography variant="body1">
          <i>COURSE DESCRIPTION</i> - Techniques used in the disciplined
          development of large software projects. Software requirements analysis and
          specifications, program design, coding and integration testing, and software
          maintenance. Software estimation techniques, design tools, and complexity
          metrics. Requires participation in a group design and implementation of a
          software project.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.title}>Responsibilities</Typography>
        <Typography variant="body1">
          <ul>
            <li>Advised three student teams through their software engineering capstone project throughout the semester.</li>
            <li>Drove several changes to the contents of the midterm exam after peer review.</li>
            <li>Authored concise tutorials for the use of the JavaFX SceneBuilder in conjunction with IntelliJ IDEA.</li>
          </ul>
        </Typography>
        <Typography variant="h5" className={classes.title}>About This Position</Typography>
        <Typography variant="body1">
          My direct responsibilities in this position have been incredibly fluid as time has passed.
          The course has seen many changes throughout my time working with Dr. Chris Bohn; my first semester,
          not only did I hold basic TA responsibilities such as holding office hours, meeting with students,
          and grading assignments, but I acted as a sort of "stakeholder" for three student teams as they
          tackled a semester-long development project. The next year, I started peer-reviewing exams
          prior to students taking them to ensure that they accurately reflected what a student should know
          from being enrolled in the course up to that point. I started to become an advocate for further changes to the course
          based on the conversations I often had with students about what they liked, and disliked. It got to a point where time 
          was set aside during each of our TA meetings to talk
          about new student feedback for the course, and I am confident that we are continuing to steer the 
          course in the right direction.
        </Typography>
      </section>
    </div>
  );
};

export default UNL;