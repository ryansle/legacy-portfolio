import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import fullBanner from "../../resources/MountainBanner.png";
import croppedBanner from "../../resources/CroppedBanner.png";

const Website = ({ toggle, isSmallScreen }) => {

  return (
    <ProjectModal
      title="Personal Website"
      toggleModal={toggle}
      stack={["React.js", "Material-UI", "JavaScript", "React-Router", "CSS", "GitHub"]}
      banner={isSmallScreen ? croppedBanner : fullBanner}
      bannerAlt="Ryan Le Banner"
      github="https://github.com/ryansle/portfolio"
    >
      <br />
      <Typography variant="body1">
        So, like I said: this is my first true web development experience. That means there might be a few problems here and there while you
        poke around on my website, and certainly if you poke around in the code. Which, by the way, I have provided public access to on GitHub by clicking the icon at the top right.
        From building this website, I learned <b>a lot.</b> That's exactly what my intention was with building this website - learn something new while 
        also showcasing my skills in order to begin searching for new opportunities.
      </Typography>
      <Typography variant="body1">
        I received lots of inspiration and help for this site from my 
        friends <a href="https://msich.dev">Matt Sichterman</a> and <a href="https://peytontanzillo.com/default/home">Peyton Tanzillo</a>.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">Why did I make this?</Typography>
      <Typography variant="body1">
        There were a couple key motivators that encouraged me to build my own personal site. <b>One</b>, I was getting ready for a 
        new position with Hoffman Strategy Group and did not want to scramble to learn the basics at the start of the job. So, I started reading through 
        some <a href="https://www.freecodecamp.org/learn/">free, online tutorials</a> to teach myself what I could, and decided that building a personal website would be better practice 
        than just reading about web development. <b>Two,</b> I love teaching myself new things. Web development seemed like the next logical step in my software 
        engineering career after spending the last year working in iOS development. <b>Three,</b> I 
        wanted to make sure I was more than ready for the upcoming recruiting season. What better way to stand out as a candidate and showcase my skills than to catch your attention
        with a beautifully crafted personal webpage?
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <Typography variant="body1">
        I learned how to leverage React.js and Material-UI to create static web pages, primarily, as well as the basics of web development. On top of this, I learned how to create
        sensible user interfaces in order to showcase my abilities and display information in a meaningful way.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What would I change next time?</Typography>
      <Typography variant="body1">
        In the future, whenever I decide that this current webpage has been rendered obsolete, I would probably look into using a static site generator like <a href="https://www.gatsbyjs.org/">Gatsby.js</a> so
        that my next website can be built more similar to a content management system. However, I am still more than happy to have started off how I did, as it 
        has proven to be an excellent foundation to build upon in the future. I'd definitely also build my pages with responsitivity in mind at the beginning so that I don't
        have to deal with the nightmare that has been refactoring my website thus far.
      </Typography>
    </ProjectModal>
  );
};

export default Website;