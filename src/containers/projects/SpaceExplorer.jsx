import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import spaceExplorer2 from "../../resources/projects/space-explorer2.png";

const SpaceExplorer = ({ toggle }) => {

  return (
    <ProjectModal
      title="VR Space Explorer"
      toggleModal={toggle}
      stack={["C#", "Unity", "SteamVR", "Visual Studio", "GitHub"]}
      banner={spaceExplorer2}
      bannerAlt="Virtual Reality Space Explorer Minigames"
      github="https://github.com/ethan309/mmi-vr-minigames"
    >
      <br />
      <Typography variant="body1">
        The University of Nebraska-Lincoln offers a technical elective every spring entitled "Exploring Virtual Reality" that pairs computer science and software engineering students
        with emerging arts students to create virtual reality games. The course follows a sandbox format where they basically give you a quick introduction to developing games with
        C#, Unity, and SteamVR, and then they set you loose to break into teams and spend the semester developing your own virtual reality game. Our team decided to spend the semester
        creating a VR Space Explorer game in which you explore alien worlds to play different minigames.
      </Typography>
      <Typography variant="body1">
        Unfortunately, due to the start of the COVID-19 pandemic, our VR laboratory access was understandably revoked in order to slow the spread of coronavirus. As our university shifted
        to remote learning, our team was unable to effectively test our code and develop the product we originally envisioned, despite our increased efforts to collaborate productively 
        due to remote circumstances. As no one on our team owned their own VR headset, development was hindered substantially as testing became increasingly harder.
      </Typography>
      <br />
      
      <Typography variant="body1">
        I worked on this project with <a href="https://www.linkedin.com/in/ethan-d-butt">Ethan Bütt</a>, <a href="https://www.linkedin.com/in/conner-hallett-8737a11a2">Conner Hallett</a>, 
        and <a href="https://www.linkedin.com/in/megan-whisenhunt-8b9156175">Megan Whisenhunt</a>.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <Typography variant="body1">
        Through this course I learned the basics of modern game development, specifically with regards to virtual reality. It turns out that developing virtual reality games is not nearly as 
        complicated as it seems out to be, thanks to existing technologies and frameworks such as Unity and SteamVR. I also got to work side-by-side with emerging arts students to 
        understand the underlying effort that goes into rendering digital assets, and again sharpen my skills working in a collaborative environment.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">Features</Typography>
      <Typography variant="body1">
        <ul>
          <li>Rebuild a high-power telescope using pieces scattered across the observatory</li>
          <li>Gaze into the night-sky with your repaired telescope and search for alien planets to visit and overcome</li>
          <li>Explore a vast planet where the sun doesn't shine and search for stardust remnants to fuel your lightbeam</li>
        </ul>
      </Typography>
      <br />
    </ProjectModal>
  );
};

export default SpaceExplorer;