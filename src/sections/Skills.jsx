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
import java from "../resources/skills/java.png";
import sql from "../resources/skills/sql.png";
import html from "../resources/skills/html.svg";
import css from "../resources/skills/css.svg";
import antlr from "../resources/skills/antlr.svg";
import xslt from "../resources/skills/xslt.svg";

// Frameworks & Technologies
import react from "../resources/skills/react.svg";
import swiftui from "../resources/skills/swiftui.png";
import kendo from "../resources/skills/kendo.png";
import material from "../resources/skills/materialui.svg";
import selenium from "../resources/skills/selenium.svg";
import javafx from "../resources/skills/javafx.png";
import unity from "../resources/skills/unity.svg";
import steamVR from "../resources/skills/steam.svg";
import kivy from "../resources/skills/kivy.svg";
import postman from "../resources/skills/postman.svg";
import alamofire from "../resources/skills/alamofire.png";
import kingfisher from "../resources/skills/kingfisher.png";
import chakra from "../resources/skills/chakra.png";
import graphql from "../resources/skills/graphql.svg";
import amplify from "../resources/skills/amplify.png";
import cognito from "../resources/skills/cognito.png";
import dynamodb from "../resources/skills/dynamodb.png";
import xcode from "../resources/skills/xcode.png";
import router from "../resources/skills/react-router.png";

// Version Control
import github from "../resources/skills/github.svg";
import gitlab from "../resources/skills/gitlab.svg";
import visualStudio from "../resources/skills/visualstudio.svg";

// Other Skills
import latex from "../resources/skills/latex.png";
import photoshop from "../resources/skills/photoshop.svg";
import premier from "../resources/skills/premier.svg";
import figma from "../resources/skills/figma.svg";

const Skills = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? "responsiveContainer" : "container"}>
      <Grid container>
        <Devices className={classes.icon}/>
        <Typography variant="h4" className="title">Software Engineering</Typography>
      </Grid>
      {/* Development Langauges */}
      <SkillTable title="Development Languages">
        <Skill
          name="Python"
          image={python}
          alt="Python"
          level={9}
        />
        <Skill
          name="JavaScript"
          image={javascript}
          alt="JavaScript"
          level={9}
        />
        <Skill
          name="Swift"
          image={swift}
          alt="Swift"
          level={8}
        />
        <Skill
          name="C#"
          image={csharp}
          alt="C#"
          level={7}
        />
        <Skill
          name="Java"
          image={java}
          alt="Java"
          level={6}
        />
        <Skill
          name="HTML"
          image={html}
          alt="HTML"
          level={8}
        />
        <Skill
          name="CSS"
          image={css}
          alt="CSS"
          level={7}
        />
        <Skill
          name="SQL"
          image={sql}
          alt="Structured Query Language"
          level={6}
        />
        <Skill
          name="XSLT"
          image={xslt}
          alt="XSLT"
          level={8}
        />
        <Skill
          name="ANTLR"
          image={antlr}
          alt="ANTLR"
          level={6}
        />
      </SkillTable>

      {/* Frameworks & Technologies */}
      <SkillTable title="Frameworks &amp; Technologies">
        <Skill
          name="React.js"
          image={react}
          alt="React.js"
          level={8}
        />
        <Skill
          name="Material-UI"
          image={material}
          alt="Material-UI - A React.js component library"
          level={10}
        />
        <Skill
          name="Chakra UI"
          image={chakra}
          alt="Chakra UI - A React.js component library"
          level={10}
        />
        <Skill
          name="SwiftUI"
          image={swiftui}
          alt="SwiftUI"
          level={7}
        />
        <Skill
          name="UIKit"
          image={xcode}
          alt="UIKit"
          level={6}
        />
        <Skill
          name="React-Router"
          image={router}
          alt="React-Router - Declarative Routing for React.js"
          level={7}
        />
        <Skill
          name="Amplify"
          image={amplify}
          alt="AWS Amplify"
          level={5}
        />
        <Skill
          name="Cognito"
          image={cognito}
          alt="AWS Cognito"
          level={5}
        />
        <Skill
          name="DynamoDB"
          image={dynamodb}
          alt="DynamoDB"
          level={4}
        />
        <Skill
          name="GraphQL"
          image={graphql}
          alt="GraphQL"
          level={4}
        />
        <Skill
          name="Alamofire"
          image={alamofire}
          alt="Alamofire"
          level={8}
        />
        <Skill
          name="Kingfisher"
          image={kingfisher}
          alt="Kingfisher"
          level={7}
        />
        <Skill
          name="Selenium"
          image={selenium}
          alt="Selenium"
          level={9}
        />
        <Skill
          name="Kendo UI"
          image={kendo}
          alt="Kendo UI"
          level={7}
        />
        <Skill
          name="JavaFX"
          image={javafx}
          alt="JavaFX"
          level={5}
        />
        <Skill
          name="Unity"
          image={unity}
          alt="Unity Game Engine"
          level={6}
        />
        <Skill
          name="SteamVR"
          image={steamVR}
          alt="SteamVR"
          level={5}
        />
        <Skill
          name="Kivy"
          image={kivy}
          alt="Kivy"
          level={5}
        />
        <Skill
          name="Postman"
          image={postman}
          alt="Postman"
          level={7}
        />
      </SkillTable>

      {/* Version Control */}
      <SkillTable title="Version Control">
        <Skill
          name="GitHub"
          image={github}
          alt="GitHub"
          level={9}
        />
        <Skill
          name="GitLab"
          image={gitlab}
          alt="GitLab"
          level={9}
        />
        <Skill
          name="Microsoft TFS"
          image={visualStudio}
          alt="Microsoft Team Foundation Server"
          level={3}
        />
      </SkillTable>

      {/* Other Skills */}
      <SkillTable title="Other Skills">
        <Skill
          name="LaTeX"
          image={latex}
          alt="LaTeX"
          level={8}
        />
        <Skill
          name="Photoshop"
          image={photoshop}
          alt="Adobe Photoshop"
          level={7}
        />
        <Skill
          name="Premiere Pro"
          image={premier}
          alt="Adobe Premiere Pro"
          level={6}
        />
        <Skill
          name="Figma"
          image={figma}
          alt="Figma"
          level={8}
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
    </div>
  );
};

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
  
export default Skills;