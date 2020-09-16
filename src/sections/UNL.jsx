import React from "react";

// Components
import {
  Typography,
  useMediaQuery
} from "@material-ui/core";
import PositionHeader from "../components/PositionHeader";

// Assets
import unl from "../resources/experience/unl.png";

const UNL = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  return (
    <div className={isSmallScreen ? "responsiveContainer" : "container"}>
      <PositionHeader
        website="https://cse.unl.edu/home"
        image={unl}
        alt="University of Nebraska-Lincoln: College of Engineering, Department of Computer Science &amp; Engineering"
        title="Teaching Assistant"
        dateRange="January 2019 - May 2020"
        stack={["Java", "JavaFX", "JavaFX Scene Builder", "GitLab", "IntelliJ IDEA"]}
      />
      <br/>

      <Typography variant="body1">
        <i>COURSE DESCRIPTION</i> - Techniques used in the disciplined
        development of large software projects. Software requirements analysis and
        specifications, program design, coding and integration testing, and software
        maintenance. Software estimation techniques, design tools, and complexity
        metrics. Requires participation in a group design and implementation of a
        software project.
      </Typography>
      <br/>
      <Typography variant="h5" className="title">Responsibilities</Typography>
      <Typography variant="body1" component={"span"}>
        <ul>
          <li>Advised three student teams through their software engineering capstone project throughout the semester.</li>
          <li>Drove several changes to the contents of the midterm exam after peer review.</li>
          <li>Authored concise tutorials for the use of the JavaFX SceneBuilder in conjunction with IntelliJ IDEA.</li>
        </ul>
      </Typography>
      <Typography variant="h5" className="title">About This Position</Typography>
      <Typography variant="body1">
        My direct responsibilities in this position have been incredibly fluid as time has passed.
        The course has seen many changes throughout my time working with Dr. Chris Bohn; my first semester,
        not only did I hold basic TA responsibilities such as holding office hours, meeting with students,
        and grading assignments, but I acted as a sort of "stakeholder" for three student teams as they
        tackled a semester-long development project. The next year, I started peer-reviewing exams
        prior to students taking them to ensure that they accurately reflected what a student should know
        from being enrolled in the course up to that point. I started to become an advocate for further changes to the course
        based on the conversations I often had with students about what they liked, and disliked. It got to a point where time 
        was set aside during each of our TA meetings to talk
        about new student feedback for the course, and I am confident that we are continuing to steer the 
        course in the right direction.
      </Typography>
    </div>
  );
};

export default UNL;