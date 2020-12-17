import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import pokemonCropped from "../../resources/projects/pokemon-cropped.jpg";

const Website = ({ toggle }) => {

  return (
    <ProjectModal
      title="Pokémon Team Builder"
      toggleModal={toggle}
      stack={["AWS Amplify", "AWS AppSync", "AWS DynamoDB", "AWS Cognito", "GraphQL", "React.js", "Material-UI", "PokéAPI", "React-Router", "CSS",]}
      banner={pokemonCropped}
      bannerAlt="Pokémon Team Builder"
      // github="https://github.com/ryansle/pokemon-team-checker"
    >
      <br />
      <Typography variant="h5" className="subtitle">Why am I making this?</Typography>
      <Typography variant="body1">
        This platform was intended to solve my age-old problem of trying to plan out my Pokémon teams when starting a new game. I'm an
        organized person; I like to plan things out before I execute, gameplay included. I also love knowing what Pokémon I have and haven't used
        before so I can try to prioritize new Pokémon for new gameplay experiences. There was never any system like this that allowed me to organize
        my thoughts, see statistics, and keep records of my gameplay - so I decided to start trying to build my own.
      </Typography>
      <Typography variant="body1">
        On top of that, I had little prior experience using Amazon Web Services, aside from the Hoffman project, so this served as a good
        opportunity to teach myself some new skills while building something that I (and I'm sure many others) would be able to use.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">Planned Features</Typography>
      <Typography component="span" variant="body1">
        <ul>
          <li>Plan out countless numbers of Pokémon teams utilizing the Team Building Interface</li>
          <li>Create an account in order to save your created teams for future consumption</li>
          <li>Retrieve analytics on your Pokémon teams to see type advantages, disadvantages, and various other statistics</li>
          <li>Share your compiled Pokémon teams with your friends</li>
          <li>Keep records of your previously used Pokémon</li>
        </ul>
      </Typography>
    </ProjectModal>
  );
};

export default Website;