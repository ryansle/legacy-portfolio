import React from "react";

// Components
import {
  Typography,
  useMediaQuery
} from "@material-ui/core";
import PositionHeader from "../components/PositionHeader";

// Assets
import raven from "../resources/experience/raven.png";

const Raven = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div>
      <section className={isSmallScreen ? "responsiveContainer" : "container"}>
        <PositionHeader
          website="https://ravenind.com/"
          image={raven}
          alt="Raven Industries"
          title="Software Engineer Intern"
          dateRange="May 2019 - August 2019"
          stack={["JavaScript", "Kendo UI", "C#", "ASP.NET Core", "SQL", "Dapper", "HTML", "CSS", "GitLab", "Visual Studio"]}
        />
        <br/>

        <Typography variant="body1">
          Raven is a technology company that creates innovative solutions to great challenges. 
          Utilizing their strength in engineering, manufacturing, and technological innovation, Raven is a leader in 
          precision agriculture, high performance specialty films, and situational awareness markets.
        </Typography>
        <br/>
        <Typography variant="h5" className="title">Responsibilities</Typography>
        <Typography variant="body1" component={"span"}>
          <ul>
            <li>Streamlined the report generation process by developing a system that quickly exported database information onto a formatted PDF, saving time and maintaining consistency across reports.</li>
            <li>Learned best practices with version control by rebasing, squashing, and branching with Git.</li>
            <li>Familiarized myself with Kendo UI in order to simplify the web development process.</li>
            <li>Researched and create development requirements.</li>
            <li>Documented test plans and perform necessary testing on development code.</li>
            <li>Coordinated with my supervisor, mentor, and project management on development tasks.</li>
          </ul>
        </Typography>
        <Typography variant="h5" className="title">About This Position</Typography>
        <Typography variant="body1">
          During my time at Raven, I worked on their Slingshot team. I was primarily responsible
          for developing a report generation system that streamlined internal processes. Prior to my development of the DTC Report Generator, individuals
          within the company would have to manually filter through a 2000+ item Excel spreadsheet to find pertinent data for upcoming meetings, format it 
          into a readable report, and then take these reports into their meetings with them. Based on that description alone, it is easy to understand
          why that already was not a good system. The Slingshot team took it upon themselves to transfer all of the data into a SQL database prior to my 
          internship start date, and when I began, I simply had to create the report system that would query the database accordingly and allow a user a
          consistent, easy-to-use method of generating large scale reports.
        </Typography>
        <br/>
        <Typography variant="body1">
          My report generation solution at Raven allowed internal teams to create up to 600-page (up to, because selecting every single database item created a 
          document this large) PDF reports in a matter of minutes, compared to the previous
          hours it would take to hunt down all the necessary information and format it accordingly. The system allowed for report consistency across the board, 
          abstraction of data, filtering of components based on their relationships to previously selected components, and much more. Being that this was my first
          ever experience working in industry, I was quite proud of the work I had performed over the course of the summer.
        </Typography>
        <br/>
        <Typography variant="h5" className="title">What did I learn?</Typography>
        <Typography variant="body1" component={"span"}>
            By far the most important lesson I learned during my time at Raven Industries was, in the words of my mentor, "learning how to learn on my own."
            Since this was my first industry experience, I came from a background of consistently being able to ask others for support when things did not make sense
            or if I did not know how to do things. Due to this, when I first started at Raven, I spent far too much time asking my mentor for help on things that were
            simply a Google search away. By establishing some guidelines of when I would ask for help, I was forced to do more digging into my problems before
            approaching anyone, effectively teaching me core problem solving capabilities. On top of coming out of my internship as both a better software engineer
            and a better problem solver, Raven taught me:
            <ul>
              <li>the bare basics of web development in conjunction with Kendo UI and the .NET framework.</li>
              <li>effective communication skills through frequent stakeholder meetings to showcase my application.</li>
              <li>how to begin gathering requirements for brand new software projects.</li>
              <li>how to effectively utilize a debugger instead of writing a million print statements!</li>
            </ul>
        </Typography>
        <br/> <br/> <br/>
      </section>
    </div>
  );
};

export default Raven;