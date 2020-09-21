import React from "react";

// Components
import {
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import PositionHeader from "../components/PositionHeader";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import nelnet from "../resources/experience/nelnet.svg";

const Nelnet = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? classes.responsiveContainer : classes.container}>
      <PositionHeader
        website="https://nelnetinc.com/"
        image={nelnet}
        alt="Nelnet"
        title="IT Software Engineer Intern"
        dateRange="June 2020 - Now"
        stack={["Swift", "UIKit", "Figma", "AWS DynamoDB", "AWS Cognito", "XSLT"]}
      />
      <br/>
  
      <Typography variant="body1">
        Nelnet is a technology company, idea incubator, start-up accelerator, and education expert that deals primarily in 
        the administration and repayment of student loans and education financial services.
      </Typography>
      <br/>
      <Typography variant="h5" className="title">Responsibilities</Typography>
      <Typography variant="body1" component={"span"}>
        <ul>
          <li>Develop dynamically scalable iOS applications with wift, UIKit, and the Serverless Framework.</li>
          <li>Design and develop rich, interactive uer experiences utilizing the power of UIKit.</li>
          <li>Participate in an intern pod team that delivered a business proposal to senior members of the Nelnet organization, winning third place in the company-wide competition</li>
          <li>Create XSLT transformations for the Workday team.</li>
        </ul>
      </Typography>
      <Typography variant="h5" className="title">About This Position</Typography>
      <Typography variant="body1">
        When COVID-19 took hold of the United States and forced companies across the nation to cancel 
        their internship programs, Nelnet decided to use this opportunity to open their intern programs back up.
        Having originally finished out their recruiting season earlier in the year, Nelnet saw an opportunity
        to provide aid to the community and quickly took the chance to help students who had lost their original
        internships to the pandemic. I was lucky enough to be one of ~30 additional interns hired on during 
        this process after managing to get in contact with their recruiting team on LinkedIn.
      </Typography>
      <br/>
      <Typography variant="body1">
        I spent my summer working on Nelnet's Workday Integrations and AGM teams, lending a hand wherever I could.
        My time was divided between writing XSLT transformations, furthering the developments of an existing
        .NET MVC codebase, and collaborating with my intern team to deliver further business opporunity proposals to Nelnet's
        executive team.
      </Typography>
      <br/>
      <Typography variant="body1">
        With the start of the fall semester, I've switched gears and joined Nelnet's Campus Key team to work once again as a mobile developer, primarily
        with up-and-coming technologies like Swift, UIKit, and Amazon Web Services like AWS Cognito and AWS DynamoDB. In this new position, I get to showcase my skills in making interactive
        user interfaces while also gaining hands-on experience with the new Serverless Framework, something I've been excited to work with ever since my position with
        Hoffman Strategy Group.
      </Typography>
      <br/>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
    minHeight: "calc(90vh - 90px)",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '4vw',
    paddingRight: '4vw',
    minHeight: "calc(90vh - 90px)",
  },
}));

export default Nelnet;