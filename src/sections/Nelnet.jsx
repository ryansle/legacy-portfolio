import React from "react";
import {
  Typography,
  Grid,
  Chip,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import nelnet from "../resources/experience/nelnet.svg";

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
    width: "100%",
    height: "auto",
    paddingLeft: "10vw",
    paddingRight: "10vw",
    paddingBottom: "3vh",
  },
  tech: {
    margin: 5,
  },
}));

const Nelnet = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <Grid container justify="center">
          <img 
            className={classes.media}
            src={nelnet}
            alt="Nelnet"
          />
        </Grid>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" className={classes.position}>IT Software Engineer Intern</Typography>
            <Typography variant="h5" className={classes.dateRange}>June 2020 - Now</Typography>
          </Grid>
          <Grid item>
            <Chip
              className={classes.tech}
              label="C#"
            />
            <Chip
              className={classes.tech}
              label="XSLT"
            />
            <Chip
              className={classes.tech}
              label="Oxygen XML Editor"
            />
            <Chip
              className={classes.tech}
              label=".NET MVC"
            />
            <Chip
              className={classes.tech}
              label="Visual Studio"
            />
            <Chip
              className={classes.tech}
              label="Microsoft TFS"
            />
          </Grid>
        </Grid>
        <br/>
    
        <Typography variant="body1">
          Nelnet is a technology company, idea incubator, start-up accelerator, and education expert that deals primarily in 
          the administration and repayment of student loans and education financial services.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.title}>Responsibilities</Typography>
        <Typography variant="body1">
          <ul>
            <li>Developed XSLT transformations for the Workday team.</li>
            <li>Redeveloped an existing .NET web application into a functional component of daily workflow.</li>
            <li>Participated in an intern pod team that delivered a business proposal to senior members of the Nelnet organization.</li>
            <li>Actively practiced navigating an Agile workflow environment throughout the course of my remote internship.</li>
          </ul>
        </Typography>
        <Typography variant="h5" className={classes.title}>About This Position</Typography>
        <Typography variant="body1">
          When COVID-19 ravaged the United States and forced companies across the nation to cancel 
          their internship programs, Nelnet decided they might as well open their own intern programs back up.
          Having originally finished out their recruiting season earlier in the year, Nelnet saw an opportunity
          to provide aid to the community and quickly took the chance to help students who had lost their original
          internships to the pandemic. I was lucky enough to be one of thirty additional interns hired on during 
          this process after managing to get in contact with their recruiting team on LinkedIn.
        </Typography>
        <br/>
        <Typography variant="body1">
          I spent my summer working on Nelnet's Workday Integrations and AGM teams, lending a hand wherever I could.
          My time was divided between writing XSLT transformations, furthering the developments of an existing
          .NET MVC codebase, and collaborating with my intern team to deliver further business opporunity proposals to Nelnet's
          executive team.
        </Typography>
      </section>
    </div>
  );
};

export default Nelnet;