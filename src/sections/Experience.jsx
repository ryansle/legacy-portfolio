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
          <Divider className={classes.divider}/>
        </Grid>
      </section>
    </div>
  );
}
  
export default Experience;