import React from "react";

// Components
import {
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import PositionHeader from "../components/PositionHeader";

// Assets
import nelnet from "../resources/experience/nelnet.svg";

const Nelnet = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? "responsiveContainer" : "container"}>
        <PositionHeader
          website="https://nelnetinc.com/"
          image={nelnet}
          alt="Nelnet"
          title="IT Software Engineer Intern"
          dateRange="June 2020 - Now"
          stack={["C#", "XSLT", "Oxygen XML Editor", ".NET MVC", "Visual Studio"]}
        />
        <br/>
    
        <Typography variant="body1">
          Nelnet is a technology company, idea incubator, start-up accelerator, and education expert that deals primarily in 
          the administration and repayment of student loans and education financial services.
        </Typography>
        <br/>
        <Typography variant="h5" className={"title"}>Responsibilities</Typography>
        <Typography variant="body1">
          <ul>
            <li>Develop XSLT transformations for the Workday team.</li>
            <li>Redevelop an existing .NET web application into a functional component of daily workflow.</li>
            <li>Participate in an intern pod team that delivered a business proposal to senior members of the Nelnet organization.</li>
            <li>Actively practice navigating an Agile workflow environment throughout the course of my remote internship.</li>
          </ul>
        </Typography>
        <Typography variant="h5" className={"title"}>About This Position</Typography>
        <Typography variant="body1">
          When COVID-19 ravaged the United States and forced companies across the nation to cancel 
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
      </section>
    </div>
  );
};

export default Nelnet;