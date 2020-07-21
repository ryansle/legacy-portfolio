import React from "react";
import {
  Typography,
  Grid,
  Divider,
  useMediaQuery
} from "@material-ui/core";
import {
  Devices,
  AccountTree,
  AssignmentInd
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import tasks from "../resources/tasks.svg";
// Development Languages
import python from "../resources/skills/python.svg";
import javascript from "../resources/skills/javascript.svg";
import swift from "../resources/skills/swift.svg";
import csharp from "../resources/skills/csharp.svg";
import java from "../resources/skills/java.svg";
import mysql from "../resources/skills/sql.svg";
import html from "../resources/skills/html.svg";
import css from "../resources/skills/css.svg";
import antlr from "../resources/skills/antlr.svg";
import xslt from "../resources/skills/xslt.svg";
// Frameworks & Technologies
import react from "../resources/skills/react.svg";
import swiftui from "../resources/skills/swiftui.png";
import kendo from "../resources/skills/kendo.png";
import redux from "../resources/skills/redux.svg";
import material from "../resources/skills/materialui.svg";
import selenium from "../resources/skills/selenium.svg";
import javafx from "../resources/skills/javafx.png";
import unity from "../resources/skills/unity.svg";
import steamVR from "../resources/skills/steam.svg";
import kivy from "../resources/skills/kivy.svg";
import postman from "../resources/skills/postman.svg";
import alamofire from "../resources/skills/alamofire.png";
import kingfisher from "../resources/skills/kingfisher.png";
// Version Control
import github from "../resources/skills/github.svg";
import gitlab from "../resources/skills/gitlab.svg";
import visualStudio from "../resources/skills/visualstudio.svg";
// Other Skills
import latex from "../resources/skills/latex.png";
import photoshop from "../resources/skills/photoshop.svg";
import premier from "../resources/skills/premier.svg";
import figma from "../resources/skills/figma.svg";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: "5vw",
    paddingRight: "5vw",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "bold",
  },
  icon: {
    color: "black",
    marginTop: 3,
    marginRight: 8,
    height: 35,
    width: "auto",
  },
  skillTable: {
    boxShadow: "0px 0px 6px 1px #555",
    padding: "20px 3% 30px 3%",
    marginBottom: 50,
  },
  divider: {
    width: "100%",
    height: 3,
    marginTop: 15,
    marginBottom: 15,
  },
  media: {
    height: 100,
    width: 100,
    padding: 5,
  },
  skill: {
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: 20,
  },
  graphic: {
    width: "40%",
    height: "auto",
  },
  responsiveGraphic: {
    width: "80%",
    height: "auto",
  }
}));

const Skills = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <Grid container>
          <Devices className={classes.icon}/>
          <Typography variant="h4" className={classes.title}>Software Engineering</Typography>
        </Grid>
        <Typography variant="body1">
          I have been lucky enough to be directly exposed to a variety of different development technologies throughout my time at university and in industry.
          As of right now, I am searching for a position that can aid me in furthering my skills in any of the following (but that does not mean I am not open
          to something brand new as well!):
        </Typography>
        <br />

        {/* TODO: Improve the responsitivity of this skills section */}
        {/* Development Languages */}
        <Grid container className={classes.skillTable} justify="flex-start">
          
          <Grid container>
            <Typography variant="h4">Development Languages</Typography>
            <Divider className={classes.divider}/>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={python} alt="Python" className={classes.media}/>
            <Typography variant="h6">Python</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={javascript} alt="JavaScript" className={classes.media}/>
            <Typography variant="h6">JavaScript</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={swift} alt="Swift" className={classes.media}/>
            <Typography variant="h6">Swift</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={csharp} alt="C#" className={classes.media}/>
            <Typography variant="h6">C#</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={java} alt="Java" className={classes.media}/>
            <Typography variant="h6">Java</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={mysql} alt="SQL" className={classes.media}/>
            <Typography variant="h6">MySQL</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={html} alt="HTML" className={classes.media}/>
            <Typography variant="h6">HTML</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={css} alt="Cascading Style Sheets" className={classes.media}/>
            <Typography variant="h6">CSS</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={xslt} alt="XSLT" className={classes.media}/>
            <Typography variant="h6">XSLT</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={antlr} alt="ANTLR" className={classes.media}/>
            <Typography variant="h6">ANTLR</Typography>
          </Grid>

        </Grid>

        {/* Frameworks & Technologies */}
        <Grid container className={classes.skillTable} justify="flex-start">
        
          <Grid container>
            <Typography variant="h4">Frameworks &amp; Technologies</Typography>
            <Divider className={classes.divider}/>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={react} alt="React.js" className={classes.media}/>
            <Typography variant="h6">React.js</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={redux} alt="Redux" className={classes.media}/>
            <Typography variant="h6">Redux</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={material} alt="Material UI" className={classes.media}/>
            <Typography variant="h6">Material UI</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={swiftui} alt="SwiftUI" className={classes.media}/>
            <Typography variant="h6">SwiftUI</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={alamofire} alt="Alamofire" className={classes.media}/>
            <Typography variant="h6">Alamofire</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={kingfisher} alt="Kingfisher" className={classes.media}/>
            <Typography variant="h6">Kingfisher</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={selenium} alt="Selenium" className={classes.media}/>
            <Typography variant="h6">Selenium</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={kendo} alt="Kendo UI" className={classes.media}/>
            <Typography variant="h6">Kendo UI</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={javafx} alt="JavaFX" className={classes.media}/>
            <Typography variant="h6">JavaFX</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={unity} alt="Unity Game Engine" className={classes.media}/>
            <Typography variant="h6">Unity</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={steamVR} alt="SteamVR" className={classes.media}/>
            <Typography variant="h6">SteamVR</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={kivy} alt="Kivy" className={classes.media}/>
            <Typography variant="h6">Kivy</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={postman} alt="Postman" className={classes.media}/>
            <Typography variant="h6">Postman</Typography>
          </Grid>

        </Grid>

        {/* Version Control */}
        <Grid container className={classes.skillTable} justify="flex-start">
        
          <Grid container>
            <Typography variant="h4">Version Control</Typography>
            <Divider className={classes.divider}/>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={github} alt="GitHub" className={classes.media}/>
            <Typography variant="h6">GitHub</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={gitlab} alt="GitLab" className={classes.media}/>
            <Typography variant="h6">GitLab</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={visualStudio} alt="Microsoft TFS" className={classes.media}/>
            <Typography variant="h6">Microsoft TFS</Typography>
          </Grid>

        </Grid>

        <Typography variant="body1">
          Interested in my development experience, or just want to hear why on Earth I am skilled with ANTLR? <Link to="/contact-me">Contact me</Link> and let's talk about it!
        </Typography>
        <br /> <br />

        <Grid container>
          <AssignmentInd className={classes.icon}/>
          <Typography variant="h4" className={classes.title}>Product Management</Typography>
        </Grid>
        <Typography variant="h5" className={classes.subtitle}>Time Management</Typography>
        <Typography variant="body1">
          Balancing two part-time jobs, a busy 15 credit semester, and a social life all while majoring in software engineering can be tricky,
          but throughout my time at university I have managed to pull it off. On top of this, I have been able to maintain a steady GPA and continuously
          make the Dean's List while balancing out all of my responsibilities. My ability to manage time throughout the years has served me greatly through college - and
          can only continue serve me at your company.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Prioritization</Typography>
        <Typography variant="body1">
          It can be difficult to juggle changing requirements and see the big picture when developing new software projects.
          That is why you need someone like me to see through all the fine details and know what to prioritize, as I 
          have done in the past while working for Buckle and Hoffman Strategy Group. With my experience, I can prioritize tasks accordingly
          in order for your team to iterate quickly in a way that makes sense.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Organization</Typography>
        <Typography variant="body1">
          When working with large-scale projects, it can become easy to get lost in the grand scheme of things. Staying organized is another one of
          my strengths while balancing crazy schedules and hectic software projects. You can trust me to aid in decluttering your software projects, your
          changing requirements, your schedules, and your task partitioning.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Documentation</Typography>
        <Typography variant="body1">
          My old manager at Raven Industries once told me he had "never seen someone document their code as thoroughly
          and sensibly as I did." I know a thing or two about writing good documentation because I have seen a thing or two
          about what it takes to write stellar docs. I have witnessed the good and bad and continued to learn how to be better.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Customer Relationship Management</Typography>
        <Typography variant="body1">
          I really enjoy speaking to project stakeholders and understanding how the software can benefit them directly. I embrace client-facing engineering
          positions and take pride in my ability to effectively communicate and form relationships with clients, all while listening to their feedback in
          order to improve a software's capabilities.
        </Typography>
        <br/> <br/> <br/>

        <Grid container>
          <AccountTree className={classes.icon}/>
          <Typography variant="h4" className={classes.title}>Project Management</Typography>
        </Grid>
        <Typography variant="h5" className={classes.subtitle}>Leadership</Typography>
        <Typography variant="body1">
          I stepped up during my junior year of college and offered to take on the role of Squad Lead and Product Manager for my senior design team, which gave me the 
          opportunity to lead every aspect of development for my project over the course of a year. Since then, I have also taken over in a similar position with
          Hoffman Strategy Group, where I have been tasked with leading as well as furthering the developments of their real estate analytics platform. 
          Along with this, I was recently elected Vice President of Communication for the university's Engineering Student Advisory Board, where I represent UNL's
          College of Engineering as a whole.
        </Typography>
        <Typography variant="body1">
          I can also be credited for co-founding our new SOFTie Startup initiative at the university and helping to plan out how this brand new venture will look
          for our incoming software engineering seniors. I take charge wherever I can and am always ready to give every new opportunity my all - because that is what
          leaders do.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Communication</Typography>
        <Typography variant="body1">
          I have proven myself in the past to be an effective communicator while taking charge of software projects. I can elicit requirements effectively, decompose them
          into managable pieces, take charge of creating presentation materials, and make sure that everyone on the team is on the same page when it comes time to develop.
          I also know my way around presenting to stakeholders, and am able to maintain a direct line of communication with them when things go wary, keeping them 
          happy and informed every step of the way. 
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Task Management</Typography>
        <Typography variant="body1">
          Like I stated previously, I am skilled in effectively gathering software requirements and decomposing them into managable pieces to dish out to different team members.
          Through my experiences, I am able to understand my projects at a high level and effectively partition the work in a way that makes sense in order to iterate quickly.
          I have proven this with my work on the Buckle Advocacy project as well as with Hoffman Analytics, as I took charge in decomposing our requirements in both instances
          to manageble pieces of development work.
        </Typography>
        <p align="middle">
          <img 
            src={tasks}
            className={isSmallScreen ? classes.responsiveGraphic : classes.graphic}
            alt="Task Graphic"
          />
        </p>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Risk Management</Typography>
        <Typography variant="body1">
          Lastly, I know how to assess risk and pivot projects accordingly when things are not shaping up as expected. I always come ready with backup plans in case things go wary,
          or when requirements change unexpectedly, so that I can always be ready to move forward without additional hassle.
        </Typography>
        <br/> <br/>

        <Grid container className={classes.skillTable} justify="flex-start">
        
          <Grid container>
            <Typography variant="h4">Other Skills</Typography>
            <Divider className={classes.divider}/>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={latex} alt="LaTeX" className={classes.media}/>
            <Typography variant="h6">LaTeX</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={photoshop} alt="Adobe PhotoShop" className={classes.media}/>
            <Typography variant="h6">PhotoShop</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={premier} alt="Adobe Premier Pro" className={classes.media}/>
            <Typography variant="h6">Premier Pro</Typography>
          </Grid>

          <Grid item className={classes.skill}>
            <img src={figma} alt="Figma" className={classes.media}/>
            <Typography variant="h6">Figma</Typography>
          </Grid>

        </Grid>
      </section>
    </div>
  );
}
  
export default Skills;