import React, { useState } from "react";

// Components
import {
  Typography,
  Grid,
  Modal,
  useMediaQuery,
} from "@material-ui/core";
import ProjectPreview from "../components/ProjectPreview";
import CareTracking from "./projects/CareTracking";
import SpaceExplorer from "./projects/SpaceExplorer";
import Buckle from "./projects/Buckle";
import Website from "./projects/Website";
import Pokemon from "./projects/Pokemon";

// Assets
import pokemonBanner from "../resources/projects/pokemon.jpg";
import banner from "../resources/projects/banner-resized.png";
import buckle from "../resources/projects/buckle.jpg";
import spaceExplorer from "../resources/projects/space-explorer.png";
import care from "../resources/projects/care-tracking.png";

const Projects = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1200px)");

  const [openPokemon, setOpenPokemon] = useState(false);
  const [openSite, setOpenSite] = useState(false);
  const [openBuckle, setOpenBuckle] = useState(false);
  const [openVR, setOpenVR] = useState(false);
  const [openCare, setOpenCare] = useState(false);

  const togglePokemonModal = () => { setOpenPokemon(!openPokemon); };
  const toggleSiteModal = () => { setOpenSite(!openSite); };
  const toggleBuckleModal = () => { setOpenBuckle(!openBuckle); };
  const toggleVRModal = () => { setOpenVR(!openVR); };
  const toggleCareModal = () => { setOpenCare(!openCare); };

  return (
    <div className={isSmallScreen ? "responsive-container" : "container"}>
      <Grid container justify="space-between">
        <ProjectPreview
          title="Pokémon Team Builder"
          toggleModal={togglePokemonModal}
          banner={pokemonBanner}
          bannerAlt="Pokémon Team Builder"
          stack={["Amazon Web Services", "React.js", "PokéAPI"]}
        >
          <Typography variant="body2">
            I switched to an iOS team at Nelnet that worked with Amazon Web Services for
            their serverless backend. Up until now, I had minimal exposure to the technologies,
            so I started working on a platform that allowed you to build and plan out your
            Pokémon teams, track your team statistics, and do a couple more things as well.
            <b> This project is still a work in progress.</b>
          </Typography>
        </ProjectPreview>

        <ProjectPreview
          title="Personal Website"
          toggleModal={toggleSiteModal}
          banner={banner}
          bannerAlt="My Banner"
          stack={["React.js", "Material-UI", "CSS"]}
        >
          <Typography variant="body2">
            Since I never had the chance to learn React.js prior 
            to working with the Hoffman Strategy Group, I wanted to 
            give myself some practice beforehand. Building this website 
            was a good way to teach myself the basics and gain a firm enough 
            grasp on the underlying tech stack before diving headfirst into 
            their project.
          </Typography>
        </ProjectPreview>

        <ProjectPreview
          title="Social Media Marketing"
          toggleModal={toggleBuckleModal}
          banner={buckle}
          bannerAlt="The Buckle"
          stack={["Swift", "SwiftUI", "Drupal"]}
        >
          <Typography variant="body2">
            I worked as the Squad Lead & Product Manager on 
            my senior design project as we tackled a year-long project to 
            create a social media marketing application for the 
            Buckle, specifically on iOS platforms. The application consolidated all of their marketing 
            department's potential social media posts into one 
            place for quick and easy uniformity in sharing their corporate promotions.
          </Typography>
        </ProjectPreview>

        <ProjectPreview
          title="Virtual Reality Space Explorer"
          toggleModal={toggleVRModal}
          banner={spaceExplorer}
          bannerAlt="Virtual Reality Space Explorer"
          stack={["C#", "Unity", "SteamVR"]}
        >
          <Typography variant="body2">
            The university offered an amazing special topics, technical elective course last spring entitled 
            "Exploring Virtual Reality." We learned how to use tools like C#, 
            Unity, and SteamVR to develop interactive virtual reality games 
            while partnering up with Emerging Arts students at the university.
            It was an amazing experience that was unfortunately cut short by the COVID-19 pandemic.
          </Typography>
        </ProjectPreview>
        
        <ProjectPreview
          title="Care Tracking Application"
          toggleModal={toggleCareModal}
          banner={care}
          bannerAlt="Care Tracking Application - Freshman Year Capstone Project"
          stack={["Python", "MySQL", "Kivy"]}
        >
          <Typography variant="body2">
            This was the first CRUD application I ever developed, through one 
            of my Software Engineering courses at the end of my freshman year 
            of college. This system allowed a user to input patient data to be 
            parsed down, organized into different data tables, and then pulled 
            back out for observation and modified accordingly.
          </Typography>
        </ProjectPreview>
      </Grid>

      {/* Invisible modal displays */}
      <Modal
        open={openPokemon}
        onClose={togglePokemonModal}
      >
        <Pokemon toggle={togglePokemonModal} />
      </Modal>

      <Modal
        open={openSite}
        onClose={toggleSiteModal}
      >
        <Website toggle={toggleSiteModal} />
      </Modal>

      <Modal
        open={openBuckle}
        onClose={toggleBuckleModal}
      >
        <Buckle toggle={toggleBuckleModal} />
      </Modal>

      <Modal
        open={openVR}
        onClose={toggleVRModal}
      >
        <SpaceExplorer toggle={toggleVRModal} />
      </Modal>

      <Modal
        open={openCare}
        onClose={toggleCareModal}
      >
        <CareTracking toggle={toggleCareModal} />
      </Modal>
      <br/>
    </div>
  );
};
  
export default Projects;