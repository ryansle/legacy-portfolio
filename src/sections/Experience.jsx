import React from "react";

// Components
import {
  Typography,
  Grid,
  Divider,
  useMediaQuery,
} from "@material-ui/core"
import Position from "../components/Position";

// Utilities
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
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '8vw',
    paddingRight: '8vw',
  },
  divider: {
    height: 3,
    marginTop: 30,
    marginBottom: 30,
  },
}));

const Experience = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isMobileScreen ? classes.responsiveContainer : classes.container}>
        <Grid container direction="column">
          <Position
            company="Hoffman Strategy Group"
            title="Software Engineer | Product Manager"
            dateRange="November 2019 - Now"
            stack={["React.js", "Material-UI", "GraphQL", "Amazon Web Services"]}
            link="hoffman-strategy-group"
            image={hsg}
            alt="Hoffman Strategy Group"
          >
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
          </Position>
          <Divider className={classes.divider}/>
          <Position
            company="Nelnet"
            title="IT Software Engineer Intern"
            dateRange="June 2020 - Now"
            stack={["C#", "XSLT", "Oxygen XML Editor", ".NET MVC"]}
            link="nelnet"
            image={nelnet}
            alt="Nelnet"
          >
            <Typography variant="body1">
              Participated in a fully remote internship that focused on developing backend services that integrated with Nelnet's leased Workday system.
              I also worked to further the developments of an existing software project known as the LenderBond System, a .NET codebase that worked as the 
              one-stop shop for the AGM team's internal processes. In this position, I demonstrated the ability to:
              <ul>
                <li>Document test plans and perform necessary testing on development code</li>
                <li>Research and create software development requirements</li>
                <li>Perform XML data transformations using the XSLT functional language</li>
                <li>Practice agile methodologies while contributing to an existing codebase</li>
              </ul>
            </Typography>
          </Position>
          <Divider className={classes.divider}/>
          <Position
            company="Raven Industries"
            title="Software Engineer Intern"
            dateRange="May 2019 - August 2019"
            stack={["JavaScript", "Kendo UI", "ASP.NET Core", "SQL"]}
            link="raven-industries"
            image={raven}
            alt="Raven Industries"
          >
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
          </Position>
          <Divider className={classes.divider}/>
          <Position
            company="University of Nebraska-Lincoln"
            title="Teaching Assistant"
            dateRange="January 2019 - May 2020"
            stack={["Java", "JavaFX", "GitLab"]}
            link="unl"
            image={unl}
            alt="University of Nebraska-Lincoln - Department of Computer Science &amp; Engineering"
          >
            <Typography variant="body1">
              Aided Dr. Bohn in the planning and execution of his CSCE 361 (Software Engineering) course while also grading students assignments
              and holding weekly office hours. In this position, I also:
              <ul>
                <li>Managed three student software teams as they tackled a semester-long development project</li>
                <li>Authored concise tutorials for the use of the JavaFX Scene Builder in conjunction with IntelliJ IDEA</li>
                <li>Drove several changes to the contents of the midterm exam(s) after peer-review</li>
              </ul>
            </Typography>
          </Position>
          <Divider className={classes.divider}/>
          <Position
            company="Re-Logic Games"
            title="Quality Assurance Game Tester"
            dateRange="January 2011 - June 2015"
            stack={["Jira", "Slack", "XChat", "C#", "Microsoft XNA"]}
            link="relogic-games"
            image={relogic}
            alt="Re-Logic Games"
          >
            <Typography variant="body1">
              Evaluated beta versions of the hit indie game Terraria for bugs and gameplay issues prior to shipping out major community updates. Fun facts:
              <ul>
                <li>Terraria has sold <b>30 MILLION</b> copies worldwide</li>
                <ul>
                  <li>This easily makes it one of the best selling video games of <b>all time!</b></li>
                </ul>
                <li>Being that I joined the team in early 2011, I was only 12 years old at the time.</li>
                <li>We never expected Terraria to get as big as it did</li>
              </ul>
            </Typography>
          </Position>
        </Grid>
      </section>
    </div>
  );
}
  
export default Experience;