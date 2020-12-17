import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import software from "../../resources/projects/software.jpg";

const CareTracking = ({ toggle }) => {

  return (
    <ProjectModal
      title="Care Tracking App"
      toggleModal={toggle}
      stack={["Python", "MySQL", "Kivy", "SQLAlchemy", "PyCharm", "GitLab"]}
      banner={software}
      bannerAlt="University of Nebraska-Lincoln Student Resource Center"
    >
      <br />
      <Typography variant="body1">
        My Care Tracking Application was a class project for SOFT 161 (Software Engineering II) at the end of my freshman year at the University of Nebraska-Lincoln. Over a five week period, I worked on 
        an application that allowed a user to input patient data through a graphical user interface, parse that data into a MySQL database, and then read it back out. The
        care tracking application was a basic CRUD (create, read, update, destroy) application at its core, and proved to be my first substantial software development project
        that I had ever taken on.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <Typography variant="body1">
        I picked up the Python programming language specifically for this course and was also learning the basics of database development in parallel. Our coursework taught us 
        basic SQL concepts such as one-to-many relationships, join tables, and how to use ORMs to form associations between software and persistent storage. We also learned how to 
        create user interfaces in code for the first time using a cross-platform Python framework called Kivy. The class, as well as the project, served as an important stepping stone
        in my software engineering career as I learned the foundations of front-end development and backend development with a basic, student-friendly set of tools.
      </Typography>
      <br /> <br />
      
      <Typography variant="h5" className="subtitle">Features</Typography>
      <Typography variant="body1">
        <ul>
          <li>Login as an existing patient, or create a new one</li>
          <li>Persistent previous patient based on a JSON store</li>
          <li>Update a patient's medical fields, drug intake, and other data</li>
          <li>View all of a patient's previous visit data</li>
          <li>Remove existing patient data from the database</li>
        </ul>
      </Typography>
    </ProjectModal>
  );
};

export default CareTracking;