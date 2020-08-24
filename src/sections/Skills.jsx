import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery
} from "@material-ui/core";
import {
  Devices,
  AccountTree,
  AssignmentInd
} from "@material-ui/icons";
import SkillTable from "../components/SkillTable";
import Skill from "../components/Skill";

// Utilities
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
  icon: {
    color: "black",
    marginTop: 3,
    marginRight: 8,
    height: 35,
    width: "auto",
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
      <section className={isSmallScreen ? "responsiveContainer" : "container"}>
        <Grid container>
          <Devices className={classes.icon}/>
          <Typography variant="h4" className="title">Software Engineering</Typography>
        </Grid>
        <Typography variant="body1">
          I have been lucky enough to be directly exposed to a variety of different development technologies throughout my time at university and in industry.
          As of right now, I am searching for a position that can aid me in furthering my skills in any of the following development languages:
        </Typography>
        <br />

        {/* Development Langauges */}
        <SkillTable title="Development Languages">
          <Skill
            name="Python"
            image={python}
            alt="Python"
          />
          <Skill
            name="JavaScript"
            image={javascript}
            alt="JavaScript"
          />
          <Skill
            name="Swift"
            image={swift}
            alt="Swift"
          />
          <Skill
            name="C#"
            image={csharp}
            alt="C#"
          />
          <Skill
            name="Java"
            image={java}
            alt="Java"
          />
          <Skill
            name="MySQL"
            image={mysql}
            alt="MySQL"
          />
          <Skill
            name="HTML"
            image={html}
            alt="HTML"
          />
          <Skill
            name="CSS"
            image={css}
            alt="CSS"
          />
          <Skill
            name="XSLT"
            image={xslt}
            alt="XSLT"
          />
          <Skill
            name="ANTLR"
            image={antlr}
            alt="ANTLR"
          />
        </SkillTable>

        {/* Frameworks & Technologies */}
        <SkillTable title="Frameworks &amp; Technologies">
          <Skill
            name="React.js"
            image={react}
            alt="React.js"
          />
          <Skill
            name="Redux"
            image={redux}
            alt="Redux State Management"
          />
          <Skill
            name="Material-UI"
            image={material}
            alt="Material-UI - A React component library"
          />
          <Skill
            name="SwiftUI"
            image={swiftui}
            alt="SwiftUI"
          />
          <Skill
            name="Alamofire"
            image={alamofire}
            alt="Alamofire"
          />
          <Skill
            name="Kingfisher"
            image={kingfisher}
            alt="Kingfisher"
          />
          <Skill
            name="Selenium"
            image={selenium}
            alt="Selenium"
          />
          <Skill
            name="Kendo UI"
            image={kendo}
            alt="Kendo UI"
          />
          <Skill
            name="JavaFX"
            image={javafx}
            alt="JavaFX"
          />
          <Skill
            name="Unity"
            image={unity}
            alt="Unity Game Engine"
          />
          <Skill
            name="SteamVR"
            image={steamVR}
            alt="SteamVR"
          />
          <Skill
            name="Kivy"
            image={kivy}
            alt="Kivy"
          />
          <Skill
            name="Postman"
            image={postman}
            alt="Postman"
          />
        </SkillTable>

        {/* Version Control */}
        <SkillTable title="Version Control">
          <Skill
            name="GitHub"
            image={github}
            alt="GitHub"
          />
          <Skill
            name="GitLab"
            image={gitlab}
            alt="GitLab"
          />
          <Skill
            name="Microsoft TFS"
            image={visualStudio}
            alt="Microsoft Team Foundation Server"
          />
        </SkillTable>

        {/* Other Skills */}
        <SkillTable title="Other Skills">
          <Skill
            name="LaTeX"
            image={latex}
            alt="LaTeX"
          />
          <Skill
            name="Photoshop"
            image={photoshop}
            alt="Adobe Photoshop"
          />
          <Skill
            name="Premier Pro"
            image={premier}
            alt="Adobe Premier Pro"
          />
          <Skill
            name="Figma"
            image={figma}
            alt="Figma"
          />
        </SkillTable>

        <Typography variant="body1">
          Interested in my development experience, or just want to hear why on Earth I am skilled with ANTLR? <Link to="/contact">Contact me</Link> and let's talk about it.
        </Typography>
        <br /> <br />

        <Grid container>
          <AssignmentInd className={classes.icon}/>
          <Typography variant="h4" className="title">Product Management</Typography>
        </Grid>
        <Typography variant="h5" className="subtitle">Time Management</Typography>
        <Typography variant="body1">
          Balancing two part-time jobs, a busy 15 credit semester, and a social life all while majoring in software engineering can be tricky,
          but throughout my time at university I have managed to pull it off. On top of this, I have been able to maintain a steady GPA and continuously
          make the Dean's List while balancing out all of my responsibilities. My ability to manage time throughout the years has served me greatly through college - and
          can only continue serve me at your company.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Prioritization</Typography>
        <Typography variant="body1">
          It can be difficult to juggle changing requirements and see the big picture when developing new software projects.
          That is why you need someone like me to sift through all the fine details and know what to prioritize, as I 
          have done in the past while working for Buckle and Hoffman Strategy Group. With my experience, I can prioritize tasks accordingly
          in order for your team to iterate quickly in a way that makes sense.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Organization</Typography>
        <Typography variant="body1">
          When working with large-scale projects, it can become easy to get lost in the grand scheme of things. Staying organized is another one of
          my strengths while balancing busy schedules and vibrant software projects. You can trust me to aid in decluttering your software projects, your
          changing requirements, your schedules, and your task partitioning.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Documentation</Typography>
        <Typography variant="body1">
          My previous manager at Raven Industries once told me he had "never seen someone document their code as thoroughly
          and sensibly as I did." Alongside code, I can create clear and concise documentation to aid future developers in a 
          meaningful way.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Customer Relationship Management</Typography>
        <Typography variant="body1">
          I really enjoy speaking to project stakeholders and understanding how software can benefit them directly. I embrace client-facing engineering
          positions and take pride in my ability to effectively communicate and form relationships with clients, all while listening to their feedback in
          order to improve a software's capabilities.
        </Typography>
        <br/> <br/> <br/>

        <Grid container>
          <AccountTree className={classes.icon}/>
          <Typography variant="h4" className="title">Project Management</Typography>
        </Grid>
        <Typography variant="h5" className="subtitle">Leadership</Typography>
        <Typography variant="body1">
          I stepped up during my junior year of college and offered to take on the role of Squad Lead and Product Manager for my senior design team, which gave me the 
          opportunity to lead every aspect of development for my project over the course of a year. Since then, I have also taken over in a similar position with
          Hoffman Strategy Group, where I have been tasked with leading as well as furthering the developments of their real estate analytics platform. 
          Along with this, I was recently elected Vice President of Communication for the university's Engineering Student Advisory Board, where I represent the university's
          College of Engineering as a whole.
        </Typography>
        <br/>
        <Typography variant="body1">
          I am also credited for co-founding our new SOFTie Startup initiative at the university and helped to plan out how this brand new venture will look
          for our incoming software engineering seniors. I take charge wherever I can and am always ready to give every new opportunity my all - because that is what
          leaders do.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Communication</Typography>
        <Typography variant="body1">
          I have proven myself in the past to be an effective communicator while taking charge of software projects. I can elicit requirements effectively, decompose them
          into managable pieces, take charge of creating presentation materials, and make sure that everyone on the team is on the same page when it comes time to develop.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Task Management</Typography>
        <Typography variant="body1">
          Through my experiences, I am able to understand my projects at a high level and effectively partition the work in a way that makes sense in order to iterate quickly.
          I have proven this with my work on the Social Media Marketing project as well as with Hoffman Analytics, where I took charge in decomposing our requirements in both instances
          to manageble pieces of development work.
        </Typography>
        <br/>
        <Typography variant="h5" className="subtitle">Risk Management</Typography>
        <Typography variant="body1">
          Lastly, I know how to assess risk and pivot projects accordingly when things are not shaping up as expected. I always come ready with backup plans in case things go awry,
          or when requirements change unexpectedly, so that I can always be ready to move forward without additional hassle.
        </Typography>
        <br/>
        <p align="middle">
          <img 
            src={tasks}
            className={isSmallScreen ? classes.responsiveGraphic : classes.graphic}
            alt="Task Graphic"
          />
        </p>
      </section>
    </div>
  );
}
  
export default Skills;