import React, { useState } from "react";

// Components
import {
  Typography,
  Grid,
  Modal,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";
import PositionHeader from "../../components/PositionHeader";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import hsg from "../../resources/experience/hsg.png";
import dashboardImg from "../../resources/experience/dashboard.png";
import projectHubImg from "../../resources/experience/project-hub.png";
import fileManagerImg from "../../resources/experience/file-manager.png";

const HoffmanStrategy = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const [openDashboard, setOpenDashboard] = useState(false);
  const [openProjectHub, setOpenProjectHub] = useState(false);
  const [openFileManager, setOpenFileManager] = useState(false);

  const toggleDashboardModal = () => { setOpenDashboard(!openDashboard); };
  const toggleProjectModal = () => { setOpenProjectHub(!openProjectHub); };
  const toggleFileModal = () => { setOpenFileManager(!openFileManager); };

  const dashboard = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleDashboardModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={dashboardImg} 
        alt="Hoffman Analytics Dashboard"
      />
    </div>
  );

  const projectHub = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleProjectModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={projectHubImg} 
        alt="A better look into the Hoffman Analytics Project Hub"
      />
    </div>
  );

  const fileManager = (
    <div className={classes.overlay}>
      <Button
        className={classes.exitButton}
        size="small"
        variant="contained"
        color="secondary"
        onClick={toggleFileModal}
      >
        <Clear/>
      </Button>
      <img 
        className={classes.modalImage}
        src={fileManagerImg} 
        alt="A better look into how Hoffman Analytics handles file lookup"
      />
    </div>
  );

  return (
    <div className={isSmallScreen ? "responsive-container" : "container"}>
      <PositionHeader
        website="https://hoffmanstrategygroup.com/"
        image={hsg}
        alt="Hoffman Strategy Group"
        title="Software Engineer &amp; Product Manager"
        dateRange="November 2019 - September 2020"
        stack={["React.js", "Material-UI", "CSS", "AWS Amplify", "AWS DynamoDB", "AWS AppSync", "GraphQL", "Redux", "React-Router", "Python", "Selenium"]}
      />
      <br/>
      
      <Typography variant="body1">
        Hoffman Strategy Group is a boutique, national real estate 
        advisory firm. Over their collective firm experience of 85 
        years, they have cultivated the unique and distinct ability 
        to dive deeply into retail, residential and commercial 
        market and feasibility analysis, master planning and 
        development in order to identify those factors that lead 
        to successful real estate projects. 
      </Typography>
      <br/>

      <Typography variant="h5" className="title">Responsibilities</Typography>
      <Typography variant="body1" component={"span"}>
        <ul>
          <li>Steered the product vision for the new Hoffman Analytics subsidiary.</li>
          <li>Leveraged React.js and Material-UI to redevelop the front-end for a real-estate data analytics platform, improving the user experience and consolidating stakeholder processes.</li>
          <li>Modernized the data collection process by using Python and Selenium to scrape 2000+ data points from the web in a fast, organized manner onto an Excel sheet - all in place of performing the process manually.</li>
          <li>Served as a technology advisor for the group in calls with potential clients.</li>
        </ul>
      </Typography>
      <Typography variant="h5" className="title">About This Position</Typography>
      <Typography variant="body1">
        Hoffman Analytics is an ambitious project aiming to consolidate the groups' daily
        workflows in data warehousing, project management, report generation,
        and business intelligence. My partner <a href="https://msich.dev">Matt Sichterman</a> and I worked to 
        redevelop the existing senior design solution into something both more maintainable and more cohesive.
        We redefined the vision for the Hoffman Analytics platform to become something that not only consolidated their daily
        workflows, but also promote productivity through a variety of new feature ideas including a task management system, an 
        activity tracker, and much more. I worked this role in parallel over the summer with my internship at Nelnet as an IT
        Software Engineer Intern, managing my time between the two accordingly.
      </Typography>
      <br/>

      <Typography variant="body1">
        Through a summer of cooperation, Matt and I rebuilt the entire platform
        from the ground up using new technologies such as Material-UI, AWS DynamoDB, and AWS AppSync while leaning primarily on one another when we
        occasionally faced problems. Working as a software engineer for the Hoffman Strategy Group
        has been a unique experience in itself as Matt and I make up 100% of their engineering department - 
        there are no senior developers, mentors, or external contractors within the company that we were able
        to reach out to for support. It has been an amazing learning experience to take on this project, having just
        recently learning the basics of web development at the time of starting, and I am incredibly grateful to the partners of the
        Hoffman Strategy Group for the opportunity.
      </Typography>
      <br/>

      <Typography variant="h5" className="title">What did I learn?</Typography>
      <Typography variant="body1" component={"span"}>
        Working with Hoffman Strategy Group was an excellent way to break into the web development domain of software engineering. It also helped that my partner Matt has
        been sharpening his web development skills over the course of the last year, and was always pointing me in the right direction for growth. Thanks to my summer with
        Hoffman Strategy Group, I learned how to:
        <ul>
          <li>Develop beautifully responsive React.js front-ends from the ground up.</li>
          <li>Manage diverse client expectations from non-technical stakeholders.</li>
          <li>Continue to practice leading the development of large-scale software applications.</li>
          <li>Work with up-and-coming web development frameworks and technologies like React.js, Material-UI, and Amazon Web Services.</li>
          <li>Pace my time accordingly between two concurrent software development positions.</li>
        </ul>
      </Typography>
      <br/>

      <Typography variant="h5" className="title">Gallery</Typography>
      <Grid container justify="space-between">
        <img
          src={dashboardImg}
          alt="Hoffman Analytics Dashboard"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleDashboardModal}
        />
        <img
          src={projectHubImg}
          alt="Hoffman Analytics Project Hub"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleProjectModal}
        />
        <img
          src={fileManagerImg}
          alt="Hoffman Analytics File Manager"
          className={isSmallScreen ? classes.responsiveGalleryItem : classes.galleryItem}
          onClick={toggleFileModal}
        />
      </Grid>
      <br/>

      <Modal
        open={openDashboard}
        onClose={toggleDashboardModal}
      >
        {dashboard}
      </Modal>

      <Modal
        open={openProjectHub}
        onClose={toggleProjectModal}
      >
        {projectHub}
      </Modal>

      <Modal
        open={openFileManager}
        onClose={toggleFileModal}
      >
        {fileManager}
      </Modal>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  galleryItem: {
    margin: 5,
    width: "30%",
    lineHeight: "auto", 
  },
  responsiveGalleryItem: {
    margin: 5,
    width: "80vw",
    height: "auto",
  },
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "90%",
  },
  exitButton: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  modalImage: {
    width: "100%",
    height: "auto",
  }
}));

export default HoffmanStrategy;