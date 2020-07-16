import React, { useState } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
  Modal,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { Clear, GitHub } from "@material-ui/icons";
import Banner from "../components/Banner";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import banner from "../resources/projects/banner-resized.png";
import buckle from "../resources/projects/buckle.jpg";
import buckleSVG from "../resources/projects/buckle.svg";
import spaceExplorer from "../resources/projects/space-explorer.png";
import spaceExplorer2 from "../resources/projects/space-explorer2.png";
import care from "../resources/projects/care-tracking.png";
import software from "../resources/projects/software.jpg";
import fullBanner from "../resources/MountainBanner.png";

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
  project: {
    minHeight: 425,
    minWidth: 355,
    maxHeight: "30vw",
    maxWidth: "25vw",
    boxShadow: "0px 3px 6px 0px #555",
    margin: 10,
  },
  responsiveProject: {
    minHeight: "65vh",
    minWidth: "90%",
    maxHeight: "30vw",
    maxWidth: "25vw",
    boxShadow: "0px 3px 6px 0px #555",
    margin: 10,
  },
  media: {
    height: "auto",
    width: "100%",
  },
  tech: {
    margin: 4,
  },
  learnMore: {
    float: "right",
    margin: 6,
  },
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "70%",
    display: "inline-block",
  },
  responsiveOverlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "90%",
    display: "inline-block",
  },
  description: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingBottom: 15,
    scrollPadding: -15,
  },
  responsiveDescription: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    scrollPadding: -15,
  },
  scrollable: {
    overflow: "scroll",
    maxHeight: "55vh",
  },
  exitButton: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  contents: {
    padding: 10,
  },

}));

const Projects = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:1100px)");

  const [openSite, setOpenSite] = useState(false);
  const [openBuckle, setOpenBuckle] = useState(false);
  const [openVR, setOpenVR] = useState(false);
  const [openCare, setOpenCare] = useState(false);

  const openSiteModal = () => { setOpenSite(true); };
  const closeSiteModal = () => { setOpenSite(false); };
  const openBuckleModal = () => { setOpenBuckle(true); };
  const closeBuckleModal = () => { setOpenBuckle(false); };
  const openVRModal = () => { setOpenVR(true); };
  const closeVRModal = () => { setOpenVR(false); };
  const openCareModal = () => { setOpenCare(true); };
  const closeCareModal = () => { setOpenCare(false); };

  // individual projects, probably break them into their own jsx later
  const personalWebsite = (
    <div className={isMobileScreen ? classes.responsiveOverlay : classes.overlay}>
        <Button
          className={classes.exitButton}
          size="small"
          variant="contained"
          color="secondary"
          onClick={closeSiteModal}
        >
          <Clear/>
        </Button>
        <Banner
          image={fullBanner}
          alt="Ryan Le Banner"
          screenHeight="30"
        />
        <div className={classes.scrollable}>
          <section className={isMobileScreen ? classes.responsiveDescription : classes.description}>
            <br/>
            <Grid container justify="space-between" style={{ flexWrap: "wrap" }}>
              <Grid item>
                <Typography variant="h4" className={classes.title}>Personal Website</Typography>
              </Grid>
              <Grid item>
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
                  label="JavaScript"
                />
                <Chip
                  className={classes.tech}
                  label="React-Router"
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
                  label="GitHub"
                />
                <IconButton className={classes.tech}>
                  <a href="https://github.com/ryansle/portfolio"><GitHub/></a>
                </IconButton>
              </Grid>
            </Grid>
            <p>
              So, like I said: this is my first true web development experience. That means there might be more than a few problems here and there while you
              poke around on my website, and certainly if you poke around in the code. Which, by the way, you should have access to, as I've decided to publicize 
              the repository on GitHub for your viewing. From building this website, I learned <span style={{ fontWeight: "bold" }}>a lot.</span> That's exactly what
              my accomplishment was with building this website - learn as much as I could about web development while also showcasing my skillsets in order to find a 
              new opportunity.
            </p>
            <p>
              I received lots of inspiration and help for this page from my 
              friends <a href="https://msich.netlify.app/">Matt Sichterman</a> and <a href="https://peytontanzillo.com/default/home">Peyton Tanzillo</a>.
            </p>
            <Typography variant="h5" className={classes.subtitle}>Why did I make this?</Typography>
            <p>
              There were a couple key motivators that encouraged me to build my own personal site. <span style={{ fontWeight: "bold"}}>One</span>, I was getting ready for a 
              new web development position with Hoffman Strategy Group and did not want to scramble to learn the basics at the start of the job. So, I started reading through 
              some <a href="https://www.freecodecamp.org/learn/">free, online tutorials</a> to teach myself the basics, and figured building a personal website might make good practice 
              aside from just reading. <span style={{ fontWeight: "bold"}}>Two,</span> I love teaching myself new skills. Web development seemed like the next logical step in my software 
              engineering career after spending the last year working in iOS development. <span style={{ fontWeight: "bold" }}>Three,</span> with how crazy things have been recently, I 
              wanted to make sure I was more than ready for the upcoming recruiting season. What better way to stand our as a candidate and showcase your skills than to catch your attention
              with a beautifully created personal webpage?
            </p>
            <Typography variant="h5" className={classes.subtitle}>What did I learn?</Typography>
            <p>
              I learned how to leverage React and Material UI to create static web pages, primarily, as well as the basics of web development. On top of this, I learned how to create
              sensible user interfaces in order to showcase my abilities as well as display information in a meaningful way.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What would I change next time?</Typography>
            <p>
              In the future, whenever I decide that this current webpage has been rendered obsolete, I would like to look into hosting my website on top of some sort of 
              content management system such as <a href="https://www.netlifycms.org/">Netlify CMS.</a> I'd also probably look into <a href="https://www.gatsbyjs.org/">Gatsby.js</a> so
              that my next website isn't just a bunch of static pages like you see currently. However, I am still more than happy to have started off with these static pages, as it 
              has proven to be an excellent foundation to build upon in the future. I'd definitely also build my pages with responsitivity in mind at the beginning so that I don't
              have to deal with the nightmare that has been refactoring my website thus far.
            </p>
          </section>
        </div>
    </div>
  );

  const socialMediaMarketing = (
    <div className={isMobileScreen ? classes.responsiveOverlay : classes.overlay}>
        <Button
          className={classes.exitButton}
          size="small"
          variant="contained"
          color="secondary"
          onClick={closeBuckleModal}
        >
          <Clear/>
        </Button>
        <Banner
          image={buckleSVG}
          alt="The Buckle"
          screenHeight="23"
        />
        <div className={classes.scrollable}>
          <section className={isMobileScreen ? classes.responsiveDescription : classes.description}>
            <br/>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4" className={classes.title}>Social Media Marketing</Typography>
              </Grid>
              <Grid item>
                <Chip
                  className={classes.tech}
                  label="Swift"
                />
                <Chip
                  className={classes.tech}
                  label="SwiftUI"
                />
                <Chip
                  className={classes.tech}
                  label="Drupal"
                />
                <Chip
                  className={classes.tech}
                  label="TestFlight"
                />
                <Chip
                  className={classes.tech}
                  label="GitHub"
                />
                <Chip
                  className={classes.tech}
                  label="ZenHub"
                />
              </Grid>
            </Grid>
            <p>
              The Social Media Marketing app, also known as Buckle Advocacy, was a year-long project through my university's Senior Design program which pairs computer science and software
              engineering students to industry sponsors. Once paired, the course works similarly to an internship where students will work on the project throughout the year and deliver weekly
              status reports to their project stakeholders and follow agile methodologies while communicating effectively. While enrolled in this class, I took on a leadership position
              for my team and was the Squad Lead and Product Manager for our senior design team, which had me focusing on defining our product vision, leading our weekly meetings, creating our
              presentation materials, and effectively capitalizing on my teammates' skillsets in order to run a successful project.
            </p>
            <p>
              I worked on this project alongside <a href="https://www.linkedin.com/in/kaileimao">Kailei Mao</a>, <a href="https://www.linkedin.com/in/arreyaahrom">Arreya Ahrom</a>,
              <a href="https://www.linkedin.com/in/olivia-rine"> Olivia Rine</a>, <a href="https://www.linkedin.com/in/zhaozhong-qi-64403b118">Dennis Qi</a>, 
              and <a href="https://www.linkedin.com/in/jake-ediger-373933129">Jake Ediger</a>. Our project could not have been nearly as successful as it was without their help.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What problem did the app solve?</Typography>
            <p>
              Buckle needed a way to provide a unified and appropriate social brand that protected the brands image. Because they have so many stores across the US (449 to be exact),
              it prove to be impractical to field and service each stores' one-off requests for approving social media content. In order to solve this, Buckle wanted a mobile app that
              allowed their marketing department to provide approved social media content for their teammates to use nationwide.
            </p>
            <p>
              Our teams' solution enlisted a content management system, Drupal, to house the marketing department's approved content. From there, individual pieces of content were assigned 
              start and end dates for the content to run through, and valid posts were pulled down to our iOS application and shown to a user in a feed similar to Instagram. Users could then
              share these approved social media posts to a variety of different social media channels, including Facebook, Instagram, Twitter, and LinkedIn with ease.
            </p>
            <p>
              This allowed their marketing department to create approved content complete with images, preloaded captions, and hashtags for their employees to share. It allowed each store to
              showcase uniform content across the board and not individual store managers worry about what content they were going to have to come up with on their own. It also created a 
              universal system for running discounts, promotions, and special events.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What did I learn?</Typography>
            <p>
              Working on this project was an absolutely amazing experience due to the wealth of knowledge I was able to take away from it. For instance, in my position in charge of the project,
              I learned how to do things like manage a team of developers, elicit requirements effectively, collaborate in a team environment, effectively communicate with non-technical 
              stakeholders, and partition tasks productively. My work on Buckle Advocacy opened up brand new career opportunities for me in Product Management leveraging the skills I sharpened
              over the course of a year, and also aided me in sharpening my leadership capabilities.
            </p>
            <p>
              On the development aspect of things, I learned how to develop iOS applications and the steps it takes to deploy on a live device - it's more complicated than you think! I learned
              how to leverage a brand new technology, SwiftUI, and took on learning the Swift programming language, Apple's new flagship development tool.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What would I change next time?</Typography>
            <p>
              Reflecting back on this experience, there is plenty of room for me to improve in my abilities as both a software engineer and a product manager. If I start this project over
              from scratch, I definitely would not have utilized Drupal as our content management system due to how outdated the technology felt while in use. On the flip side of that, I 
              also would have allowed SwiftUI to mature more as a framework before committing to working on a project as large-scale as this in such a current technology.
            </p>
          </section>
        </div>
    </div>
  );

  const vrGame = (
    <div className={isMobileScreen ? classes.responsiveOverlay : classes.overlay}>
        <Button
          className={classes.exitButton}
          size="small"
          variant="contained"
          color="secondary"
          onClick={closeVRModal}
        >
          <Clear/>
        </Button>
        <Banner
          image={spaceExplorer2}
          alt="VR Space Explorer"
          screenHeight="30"
        />
        <div className={classes.scrollable}>
          <section className={isMobileScreen ? classes.responsiveDescription : classes.description}>
            <br/>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4" className={classes.title}>VR Space Explorer</Typography>
              </Grid>
              <Grid item>
                <Chip
                  className={classes.tech}
                  label="C#"
                />
                <Chip
                  className={classes.tech}
                  label="Unity"
                />
                <Chip
                  className={classes.tech}
                  label="SteamVR"
                />
                <Chip
                  className={classes.tech}
                  label="Visual Studio"
                />
                <Chip
                  className={classes.tech}
                  label="GitHub"
                />
                <IconButton className={classes.tech}>
                  <a href="https://github.com/ethan309/mmi-vr-minigames"><GitHub/></a>
                </IconButton>
              </Grid>
            </Grid>
            <p>
              The University of Nebraska-Lincoln offers a technical elective every spring entitled "Exploring Virtual Reality" that pairs computer science/software engineering students
              with emerging arts students to create virtual reality games. The course follows a sandbox format where they basically give you a quick introduction to developing games with
              C#, Unity, and SteamVR, and then they set you loose to break into teams and spend the semester developing your own virtual reality game. Our team decided to spend the semester
              creating a VR Space Explorer game in which you explore alien worlds to play different minigames.
            </p>
            <p>
              Unfortunately, due to the start of the COVID-19 pandemic, our VR laboratory access was understandly revoked in order to slow the spread of coronavirus. As our university shifted
              to remote learning, our team was unable to effectively test our code and develop the product we originally envisioned, despite our increased efforts to collaborate productively 
              due to remote circumstances. As no one on our team owned their own VR headset, development was hindered substantially as testing became increasingly harder.
            </p>
            <p>
              I worked on this project with <a href="https://www.linkedin.com/in/ethan-d-butt">Ethan Bütt</a>, <a href="https://www.linkedin.com/in/conner-hallett-8737a11a2">Conner Hallett</a>, 
              and <a href="https://www.linkedin.com/in/megan-whisenhunt-8b9156175">Megan Whisenhunt</a>.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What did I learn?</Typography>
            <p>
              Through this course I learned the basics of modern game development, specifically with regards to virtual reality. It turns out that developing virtual reality games is not nearly as 
              complicated as it makes out to be, thanks to existing technologies and frameworks such as Unity and SteamVR. I also got to work side-by-side with an emerging arts student to 
              understand the underlying effort that goes into rendering digital assets, and again sharpen my skills working in a collaborative environment.
            </p>
            <Typography variant="h5" className={classes.subtitle}>Features</Typography>
            <p>
              <ul>
                <li>Rebuild a high-power telescope using pieces scattered across the observatory</li>
                <li>Gaze into the night-sky with your repaired telescope and search for alien planets to visit and overcome</li>
                <li>Explore a vast planet where the sun doesn't shine and search for stardust remnants to fuel your lightbeam</li>
              </ul>
            </p>
          </section>
        </div>
    </div>
  );

  const careTracking = (
    <div className={isMobileScreen ? classes.responsiveOverlay : classes.overlay}>
        <Button
          className={classes.exitButton}
          size="small"
          variant="contained"
          color="secondary"
          onClick={closeCareModal}
        >
          <Clear/>
        </Button>
        <Banner
          image={software}
          alt="University of Nebraska-Lincoln Resource Center"
          screenHeight="30"
        />
        <div className={classes.scrollable}>
          <section className={isMobileScreen ? classes.responsiveDescription : classes.description}>
            <br/>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="h4" className={classes.title}>Care Tracking Application</Typography>
              </Grid>
              <Grid item>
                <Chip
                  className={classes.tech}
                  label="Python"
                />
                <Chip
                  className={classes.tech}
                  label="MySQL"
                />
                <Chip
                  className={classes.tech}
                  label="Kivy"
                />
                <Chip
                  className={classes.tech}
                  label="SQLAlchemy"
                />
                <Chip
                  className={classes.tech}
                  label="PyCharm"
                />
                <Chip
                  className={classes.tech}
                  label="GitLab"
                />
              </Grid>
            </Grid>
            <p>
              My Care Tracking Application was a class project for SOFT 161 (Software Engineering II) at the end of my freshman year at UNL. Over a five week period, I worked on 
              an application that allowed a user to input patient data through a graphical user interface, parse that data into a MySQL database, and then read it back out. The
              care tracking application was a basic CRUD (create, read, update, destroy) application at its core, and proved to be my first substantial software development project
              that I had ever taken on.
            </p>
            <Typography variant="h5" className={classes.subtitle}>What did I learn?</Typography>
            <p>
              I picked up the Python programming language specifically for this course and was also learning the basics of database development in parallel. Our coursework taught us 
              basic SQL concepts such as one-to-many relationships, join tables, and how to use ORMs to form associations between software and persistent storage. We also learned how to 
              create user interfaces in code for the first time using a cross-platform Python framework called Kivy. The class, as well as the project, served as an important stepping stone
              in my software engineering career as I learned the foundations of front-end development and backend development with a basic, student-friendly set of tools.
            </p>
            <Typography variant="h5" className={classes.subtitle}>Features</Typography>
            <p>
              <ul>
                <li>Login in an existing patient, or create a new one</li>
                <li>Persistent previous patient based on a JSON store</li>
                <li>Update a patient's medical fields, drug intake, and other data</li>
                <li>View all of a patient's previous visit data</li>
                <li>Remove existing patient data from the database</li>
              </ul>
            </p>
          </section>
        </div>
    </div>
  );

  return (
    <div>
      <section className={classes.container}>
        <Grid container justify="space-evenly">

          <Card className={isMobileScreen ? classes.responsiveProject : classes.project}>
            <img 
              className={classes.media}
              src={banner}
              alt="My Banner"
            />
            <div className={classes.contents}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Personal Website
                </Typography>
                <Typography variant="body2">
                  Since I never had the chance to learn React prior to 
                  working with the Hoffman Strategy Group, I wanted to 
                  give myself some practice beforehand. Building this 
                  website was a good way to teach myself the basics 
                  and gain a firm enough grasp on the underlying tech
                  stack before diving headfirst into their project.
                </Typography>
              </CardContent>
              <Chip
                className={classes.tech}
                label="React"
              />
              <Chip
                className={classes.tech}
                label="Material UI"
              />
              <Button 
                className={classes.learnMore}
                size="small"
                variant="contained"
                color="primary"
                onClick={openSiteModal}
              >
                Learn More
              </Button>
            </div>
          </Card>

          <Card className={isMobileScreen ? classes.responsiveProject : classes.project}>
            <img 
              className={classes.media}
              src={buckle}
              alt="The Buckle"
            />
            <div className={classes.contents}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Social Media Marketing
                </Typography>
                <Typography variant="body2">
                  I worked as the Squad Lead & Product Manager on 
                  my senior design as we tackled a year-long project to 
                  create a social media marketing application for the 
                  Buckle. The app consolidated all of their marketing 
                  department"s potential social media posts into one 
                  place for easier sharing of corporate promotions.
                </Typography>
              </CardContent>
              <Chip
                className={classes.tech}
                label="Swift"
              />
              <Chip
                className={classes.tech}
                label="SwiftUI"
              />
              <Chip
                className={classes.tech}
                label="Drupal"
              />
              <Button 
                className={classes.learnMore}
                size="small"
                variant="contained"
                color="primary"
                onClick={openBuckleModal}
              >
                Learn More
              </Button>
            </div>
          </Card>

          <Card className={isMobileScreen ? classes.responsiveProject : classes.project}>
            <img 
              className={classes.media}
              src={spaceExplorer} 
              alt="My Banner"
            />
            <div className={classes.contents}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Virtual Reality Space Explorer
                </Typography>
                <Typography variant="body2">
                  UNL offered an amazing special topics course last spring entitled 
                  "Exploring Virtual Reality." We learned how to use tools like C#, 
                  Unity, and SteamVR to develop interactive virtual reality games 
                  while partnered up with Emerging Arts students within the college.
                </Typography>
              </CardContent>
              <Chip
                className={classes.tech}
                label="C#"
              />
              <Chip
                className={classes.tech}
                label="Unity"
              />
              <Chip
                className={classes.tech}
                label="SteamVR"
              />
              <Button 
                className={classes.learnMore}
                size="small"
                variant="contained"
                color="primary"
                onClick={openVRModal}
              >
                Learn More
              </Button>
            </div>
          </Card>

          <Card className={isMobileScreen ? classes.responsiveProject : classes.project}>
            <img 
              className={classes.media}
              src={care}
              alt="Care Tracking App"
            />
            <div className={classes.contents}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Care Tracking Application
                </Typography>
                <Typography variant="body2">
                  This was the first CRUD application I ever developed. This system allowed a user to input patient data to be parsed down, organized into different
                  data tables, and then pulled back out for observation and modified accordingly.
                </Typography>
              </CardContent>
              <Chip
                className={classes.tech}
                label="Python"
              />
              <Chip
                className={classes.tech}
                label="MySQL"
              />
              <Chip
                className={classes.tech}
                label="Kivy"
              />
              <Button 
                className={classes.learnMore}
                size="small"
                variant="contained"
                color="primary"
                onClick={openCareModal}
              >
                Learn More
              </Button>
            </div>
          </Card>

        </Grid>

          {/* Invisible modal displays */}
        <Modal
          open={openSite}
          onClose={closeSiteModal}
          className={classes.scrollable}
        >
          {personalWebsite}
        </Modal>

        <Modal
          open={openBuckle}
          onClose={closeBuckleModal}
          className={classes.scrollable}
        >
          {socialMediaMarketing}
        </Modal>

        <Modal
          open={openVR}
          onClose={closeVRModal}
          className={classes.scrollable}
        >
          {vrGame}
        </Modal>

        <Modal
          open={openCare}
          onClose={closeCareModal}
          className={classes.scrollable}
        >
          {careTracking}
        </Modal>
        <br/>
      </section>
    </div>
  );
}
  
export default Projects;