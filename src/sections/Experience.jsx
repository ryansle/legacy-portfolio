import React from "react";
import {
  Typography,
  Grid,
  Chip,
  Button,
  Divider,
  useMediaQuery,
} from "@material-ui/core"
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import hsg from "../resources/experience/hsg.png";
import nelnet from "../resources/experience/nelnet.svg";
import raven from "../resources/experience/raven.png";
import unl from "../resources/experience/unl.png";
import relogic from "../resources/experience/re-logic.png";

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
  tech: {
    marginLeft: 2,
    marginRight: 2,
  },
  learnMore: {
    float: "right",
    margin: 6,
  },
  media: {
    width: "100%",
    height: "auto",
    paddingLeft: 20,
  },
  responsiveMedia: {
    width: "70%",
    height: "auto",
    textAlign: "center",
  },
  divider: {
    height: 3,
    marginTop: 30,
    marginBottom: 30,
  },
}));

const Experience = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width:1440px)");

  return (
    <div>
      <section className={classes.container}>
        <Grid container direction="column">

          <Grid container direction="column">
            <Typography variant="h5">Hoffman Strategy Group</Typography>
            <Typography variant="subtitle1" className={classes.position}>Software Engineer | Product Manager</Typography>
            <Typography variant="subtitle1" className={classes.dateRange}>November 2019 - Now</Typography>
            <Grid container>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography variant="body1">
                  My partner and I, <a href="https://msich.netlify.app/">Matt Sichterman,</a> inherited a pre-existing
                  JavaScript codebase and worked together to redefine the product vision for the Hoffman Analytics platform.
                  We lead the redevelopment of an online commercial real estate feasibility analytics and client report generation system.
                  This enhanced system allows you to:
                  <ul>
                    <li>Quickly organize data by project to upload and download files with ease</li>
                    <li>Create meaningful insights by harnessing the power of business intellegence</li>
                    <li>See the latest team activity and have quick access to recent file uploads and project updates</li>
                    <li>Stay organized and keep tabs on the team while promoting ultimate productivity</li>
                  </ul>
                </Typography>
                <Chip
                  className={classes.tech}
                  label="React"
                />
                <Chip
                  className={classes.tech}
                  label="Material UI"
                />
                <Chip
                  className={classes.tech}
                  label="Redux"
                />
                <Chip
                  className={classes.tech}
                  label="Amazon Web Services"
                />
                <Button 
                  className={classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/experience/hoffman-strategy-group"
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <p align="middle">
                  <img 
                    className={isSmallScreen ? classes.responsiveMedia : classes.media}
                    src={hsg}
                    alt="Hoffman Strategy Group"
                  />
                </p>
              </Grid>

            </Grid>
          </Grid>

          <Divider className={classes.divider}/>

          <Grid container direction="column">
            <Typography variant="h5">Nelnet</Typography>
            <Typography variant="subtitle1" className={classes.position}>IT Software Engineer Intern</Typography>
            <Typography variant="subtitle1" className={classes.dateRange}>June 2020 - Now</Typography>
            <Grid container>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography variant="body1">
                  Participated in a fully remote internship that focused on developing backend services that integrated with Nelnet's leased Workday system.
                  Also worked to further the developments of an existing software project known as the LenderBond System, a .NET codebase that worked as the 
                  one-stop shop for the AGM teams' internal processes. In this position, I demonstrated the ability to:
                  <ul>
                    <li>Document test plans and perform necessary testing on development code</li>
                    <li>Research and create software development requirements</li>
                    <li>Perform XML data transformations using the XSLT functional language</li>
                    <li>Practice agile methodologies while contributing to an existing codebase</li>
                  </ul>
                </Typography>
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
                <Button 
                  className={classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/experience/nelnet"
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <p align="middle">
                  <img 
                    className={isSmallScreen ? classes.responsiveMedia : classes.media}
                    src={nelnet}
                    alt="Nelnet"
                  />
                </p>
              </Grid>

            </Grid>
          </Grid>

          <Divider className={classes.divider}/>

          <Grid container direction="column">
            <Typography variant="h5">Raven Industries</Typography>
            <Typography variant="subtitle1" className={classes.position}>Software Engineer Intern</Typography>
            <Typography variant="subtitle1" className={classes.dateRange}>May 2019 - August 2019</Typography>
            <Grid container>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography variant="body1">
                  Developed and maintained an internal report generation tool that streamlined the process of creating
                  large, easy-to-read component reports. The system was built entirely new when I joined Raven using out-of-the-box
                  web development toolsets like .NET Core and Kendo UI. This system allowed a user to:
                  <ul>
                    <li>Easily export database information onto a formatted PDF</li>
                    <li>Filter through 2,000 database entries quickly based on their entity relationships</li>
                    <li>View all the corresponding data to an electronic component unit at the touch of a button</li>
                  </ul>
                </Typography>
                <Chip
                  className={classes.tech}
                  label="JavaScript"
                />
                <Chip
                  className={classes.tech}
                  label="Kendo UI"
                />
                <Chip
                  className={classes.tech}
                  label="ASP.NET Core"
                />
                <Chip
                  className={classes.tech}
                  label="SQL"
                />
                <Button 
                  className={classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/experience/raven-industries"
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <p align="middle">
                  <img 
                    className={isSmallScreen ? classes.responsiveMedia : classes.media}
                    src={raven}
                    alt="Raven Industries"
                  />
                </p>
              </Grid>

            </Grid>
          </Grid>

          <Divider className={classes.divider}/>

          <Grid container direction="column">
            <Typography variant="h5">University of Nebraska-Lincoln</Typography>
            <Typography variant="subtitle1" className={classes.position}>Teaching Assistant</Typography>
            <Typography variant="subtitle1" className={classes.dateRange}>January 2019 - Now</Typography>
            <Grid container>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography variant="body1">
                  Aided Dr. Bohn in the planning and execution of his CSCE 361 Software Engineering course while also grading students assignments
                  and holding weekly office hours. In this position, I also:
                  <ul>
                    <li>Managed three student software teams as they tackled a semester-long development project</li>
                    <li>Authored concise tutorials for the use of the JavaFX Scene Builder in conjunction with IntelliJ IDEA</li>
                    <li>Drove several changes to the contents of the midterm exam(s) after peer-review</li>
                  </ul>
                </Typography>
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
                  label="GitLab"
                />
                <Button 
                  className={classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/experience/unl"
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <p align="middle">
                  <img 
                    className={isSmallScreen ? classes.responsiveMedia : classes.media}
                    src={unl}
                    alt="University of Nebraska-Lincoln"
                  />
                </p>
              </Grid>

            </Grid>
          </Grid>

          <Divider className={classes.divider}/>

          <Grid container direction="column">
            <Typography variant="h5">Re-Logic Games</Typography>
            <Typography variant="subtitle1" className={classes.position}>Quality Assurance Game Tester</Typography>
            <Typography variant="subtitle1" className={classes.dateRange}>January 2011 - June 2015</Typography>
            <Grid container>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <Typography variant="body1">
                  Evaluated beta versions of the hit indie game Terraria for bugs and gameplay issues prior to shipping out major community updates. Fun facts:
                  <ul>
                    <li>Terraria has sold <b>30 MILLION</b> copies worldwide</li>
                    <ul>
                      <li>This easily makes it one of the best selling video games of <b>all time!</b></li>
                    </ul>
                    <li>Being that I joined the team in early 2011, I was only 12 years old at the time!</li>
                    <li>We never expected Terraria to get as big as it did</li>
                    <li>With how bold of claims these are, I have plenty of proof of my involvement</li>
                  </ul>
                </Typography>
                <Chip
                  className={classes.tech}
                  label="Jira"
                />
                <Chip
                  className={classes.tech}
                  label="Slack"
                />
                <Chip
                  className={classes.tech}
                  label="XChat"
                />
                <Chip
                  className={classes.tech}
                  label="C#"
                />
                <Chip
                  className={classes.tech}
                  label="Microsoft XNA"
                />
                <Button 
                  className={classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/experience/relogic-games"
                >
                  Learn More
                </Button>
              </Grid>

              <Grid item xs={isSmallScreen ? 12 : 6}>
                <p align="middle">
                  <img 
                    className={isSmallScreen ? classes.responsiveMedia : classes.media}
                    src={relogic}
                    alt="Re-Logic Games"
                    style={{marginBottom: 150}}
                  />
                </p>
              </Grid>

            </Grid>
          </Grid>

        </Grid>
      </section>
    </div>
  );
}
  
export default Experience;