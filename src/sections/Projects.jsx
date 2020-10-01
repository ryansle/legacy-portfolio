import React, { useState } from "react";

// Components
import {
  Typography,
  Grid,
  Modal,
  useMediaQuery,
} from "@material-ui/core";
import ProjectModal from "../components/ProjectModal";
import ProjectPreview from "../components/ProjectPreview";

// Assets
import pokemonCropped from "../resources/projects/pokemon-cropped.jpg";
import pokemonBanner from "../resources/projects/pokemon.jpg";
import banner from "../resources/projects/banner-resized.png";
import buckle from "../resources/projects/buckle.jpg";
import buckleSVG from "../resources/projects/buckle.svg";
import spaceExplorer from "../resources/projects/space-explorer.png";
import spaceExplorer2 from "../resources/projects/space-explorer2.png";
import care from "../resources/projects/care-tracking.png";
import software from "../resources/projects/software.jpg";
import fullBanner from "../resources/MountainBanner.png";
import croppedBanner from "../resources/CroppedBanner.png";

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

  const pokemon = (
    <ProjectModal
      title="Pokémon Team Builder"
      toggleModal={togglePokemonModal}
      stack={["AWS Amplify", "AWS AppSync", "AWS DynamoDB", "AWS Cognito", "GraphQL", "React.js", "Material-UI", "PokéAPI", "React-Router", "CSS",]}
      banner={pokemonCropped}
      bannerAlt="Pokémon Team Builder"
      // github="https://github.com/ryansle/pokemon-team-checker"
    >
      <Typography variant="h5" className="subtitle">Why am I making this?</Typography>
      <p>
        This platform was intended to solve my age-old problem of trying to plan out my Pokémon teams when starting a new game. I'm an
        organized person; I like to plan things out before I execute, gameplay included. I also love knowing what Pokémon I have and haven't used
        before so I can try to prioritize new Pokémon for new gameplay experiences. There was never any system like this that allowed me to organize
        my thoughts, see statistics, and keep records of my gameplay - so I decided to start trying to build my own.
      </p>
      <p>
        On top of that, I had little prior experience using Amazon Web Services, aside from the Hoffman project, so this served as a good
        opportunity to teach myself some new skills while building something that I (and I'm sure many others) would be able to use.
      </p>
      <Typography variant="h5" className="subtitle">Planned Features</Typography>
      <p>
        <ul>
          <li>Plan out countless numbers of Pokémon teams utilizing the Team Building Interface</li>
          <li>Create an account in order to save your created teams for future consumption</li>
          <li>Retrieve analytics on your Pokémon teams to see type advantages, disadvantages, and various other statistics</li>
          <li>Share your compiled Pokémon teams with your friends</li>
          <li>Keep records of your previously used Pokémon</li>
        </ul>
      </p>
    </ProjectModal>
  );

  const personalWebsite = (
    <ProjectModal
      title="Personal Website"
      toggleModal={toggleSiteModal}
      stack={["React.js", "Material-UI", "JavaScript", "React-Router", "CSS", "GitHub"]}
      banner={isSmallScreen ? croppedBanner : fullBanner}
      bannerAlt="Ryan Le Banner"
      github="https://github.com/ryansle/portfolio"
    >
      <p>
        So, like I said: this is my first true web development experience. That means there might be a few problems here and there while you
        poke around on my website, and certainly if you poke around in the code. Which, by the way, I have provided public access to on GitHub by clicking the icon at the top right.
        From building this website, I learned <b>a lot.</b> That's exactly what my intention was with building this website - learn something new while 
        also showcasing my skills in order to begin searching for new opportunities.
      </p>
      <p>
        I received lots of inspiration and help for this page from my 
        friends <a href="https://msich.dev">Matt Sichterman</a> and <a href="https://peytontanzillo.com/default/home">Peyton Tanzillo</a>.
      </p>
      <Typography variant="h5" className="subtitle">Why did I make this?</Typography>
      <p>
        There were a couple key motivators that encouraged me to build my own personal site. <b>One</b>, I was getting ready for a 
        new position with Hoffman Strategy Group and did not want to scramble to learn the basics at the start of the job. So, I started reading through 
        some <a href="https://www.freecodecamp.org/learn/">free, online tutorials</a> to teach myself what I could, and decided that building a personal website would be better practice 
        than just reading about web development. <b>Two,</b> I love teaching myself new things. Web development seemed like the next logical step in my software 
        engineering career after spending the last year working in iOS development. <b>Three,</b> I 
        wanted to make sure I was more than ready for the upcoming recruiting season. What better way to stand out as a candidate and showcase my skills than to catch your attention
        with a beautifully crafted personal webpage?
      </p>
      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <p>
        I learned how to leverage React.js and Material-UI to create static web pages, primarily, as well as the basics of web development. On top of this, I learned how to create
        sensible user interfaces in order to showcase my abilities and display information in a meaningful way.
      </p>
      <Typography variant="h5" className="subtitle">What would I change next time?</Typography>
      <p>
        In the future, whenever I decide that this current webpage has been rendered obsolete, I would probably look into using a static site generator like <a href="https://www.gatsbyjs.org/">Gatsby.js</a> so
        that my next website can be built more similar to a content management system. However, I am still more than happy to have started off how I did, as it 
        has proven to be an excellent foundation to build upon in the future. I'd definitely also build my pages with responsitivity in mind at the beginning so that I don't
        have to deal with the nightmare that has been refactoring my website thus far.
      </p>
    </ProjectModal>
  );

  const socialMediaMarketing = (
    <ProjectModal
      title="Social Media Marketing"
      toggleModal={toggleBuckleModal}
      stack={["Swift", "SwiftUI", "Alamofire", "Kingfisher", "Drupal", "TestFlight", "GitHub"]}
      banner={buckleSVG}
      bannerAlt="The Buckle"
    >
      <p>
        The Social Media Marketing app, also known as Buckle Advocacy, was a year-long project through my university's Senior Design program which pairs computer science and software
        engineering students to industry sponsors. Once paired, the course works similarly to an internship where students will work on the project throughout the year and deliver weekly
        status reports to their project stakeholders and follow agile methodologies while communicating effectively. While enrolled in this class, I took on a leadership position
        for my team and was the Squad Lead and Product Manager for our senior design team, which had me focusing on defining our product vision, leading our weekly meetings, creating our
        presentation materials, and effectively capitalizing on my teammates' skillsets in order to run a successful project.
      </p>
      <p>
        I worked on this project alongside <a href="https://www.linkedin.com/in/kaileimao">Kailei Mao</a>, <a href="https://www.linkedin.com/in/arreyaahrom">Arreya Ahrom</a>,
        <a href="https://www.linkedin.com/in/olivia-rine"> Olivia Rine</a>, <a href="https://www.linkedin.com/in/zhaozhong-qi-64403b118">Dennis Qi</a>, 
        and <a href="https://www.linkedin.com/in/jake-ediger-373933129">Jake Ediger</a>. Our project could not have been nearly as successful as it was without the help of our amazing team.
      </p>
      <Typography variant="h5" className="subtitle">What problem did the app solve?</Typography>
      <p>
        Buckle needed a way to provide a unified and appropriate social brand that protected the brand's image. Because they have so many stores across the US (449 to be exact),
        it proved to be impractical to field and service each stores' one-off requests for approving social media content. In order to solve this, Buckle wanted a mobile app that
        allowed their marketing department to provide approved social media content for their teammates to use nationwide.
      </p>
      <p>
        Our team's solution enlisted a content management system, Drupal, to house the marketing department's approved content. From there, individual pieces of content were assigned 
        start and end dates for the content to run through, and valid posts were pulled down to our iOS application and shown to a user in a feed visually similar to Instagram. Users could then
        share these approved social media posts to a variety of different social media channels, including Facebook, Instagram, Twitter, and LinkedIn with ease.
      </p>
      <p>
        This allowed their marketing department to create approved content complete with images, preloaded captions, and hashtags for their employees to share. It allowed each store to
        showcase uniform content across the board and remediate individual store managers' worries about what content they were going to have to come up with on their own. It also created a 
        universal system for running discounts, promotions, and special events.
      </p>
      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <p>
        Working on this project was an absolutely amazing experience due to the wealth of knowledge I was able to take away from it. For instance, in my position in charge of the project,
        I learned how to do things like manage a team of developers, elicit requirements effectively, collaborate in a team environment, communicate with non-technical 
        stakeholders, and partition tasks productively. My work on Buckle Advocacy opened up brand new career opportunities for me in Product Management leveraging the skills I sharpened
        over the course of a year, and also aided me in sharpening my leadership capabilities.
      </p>
      <p>
        On the development aspect of things, I learned how to develop iOS applications and the steps it takes to deploy on a live device - it's more complicated than you think! I learned
        how to leverage a brand new technology, SwiftUI, and took on learning the Swift programming language, Apple's new flagship development language.
      </p>
      <Typography variant="h5" className="subtitle">What would I change next time?</Typography>
      <p>
        Reflecting back on this experience, there is plenty of room for me to improve in my abilities as both a software engineer and a product manager. If I started this project over
        from scratch, I definitely would not have utilized Drupal as our content management system due to how outdated the technology felt while in use. On the flip side of that, I 
        also would have allowed SwiftUI to mature more as a framework before committing to working on a project as large-scale as this in such an up-and-coming technology.
      </p>
    </ProjectModal>
  );

  const vrGame = (
    <ProjectModal
      title="VR Space Explorer"
      toggleModal={toggleVRModal}
      stack={["C#", "Unity", "SteamVR", "Visual Studio", "GitHub"]}
      banner={spaceExplorer2}
      bannerAlt="Virtual Reality Space Explorer Minigames"
      github="https://github.com/ethan309/mmi-vr-minigames"
    >
      <p>
        The University of Nebraska-Lincoln offers a technical elective every spring entitled "Exploring Virtual Reality" that pairs computer science and software engineering students
        with emerging arts students to create virtual reality games. The course follows a sandbox format where they basically give you a quick introduction to developing games with
        C#, Unity, and SteamVR, and then they set you loose to break into teams and spend the semester developing your own virtual reality game. Our team decided to spend the semester
        creating a VR Space Explorer game in which you explore alien worlds to play different minigames.
      </p>
      <p>
        Unfortunately, due to the start of the COVID-19 pandemic, our VR laboratory access was understandably revoked in order to slow the spread of coronavirus. As our university shifted
        to remote learning, our team was unable to effectively test our code and develop the product we originally envisioned, despite our increased efforts to collaborate productively 
        due to remote circumstances. As no one on our team owned their own VR headset, development was hindered substantially as testing became increasingly harder.
      </p>
      <p>
        I worked on this project with <a href="https://www.linkedin.com/in/ethan-d-butt">Ethan Bütt</a>, <a href="https://www.linkedin.com/in/conner-hallett-8737a11a2">Conner Hallett</a>, 
        and <a href="https://www.linkedin.com/in/megan-whisenhunt-8b9156175">Megan Whisenhunt</a>.
      </p>
      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <p>
        Through this course I learned the basics of modern game development, specifically with regards to virtual reality. It turns out that developing virtual reality games is not nearly as 
        complicated as it seems out to be, thanks to existing technologies and frameworks such as Unity and SteamVR. I also got to work side-by-side with emerging arts students to 
        understand the underlying effort that goes into rendering digital assets, and again sharpen my skills working in a collaborative environment.
      </p>
      <Typography variant="h5" className="subtitle">Features</Typography>
      <p>
        <ul>
          <li>Rebuild a high-power telescope using pieces scattered across the observatory</li>
          <li>Gaze into the night-sky with your repaired telescope and search for alien planets to visit and overcome</li>
          <li>Explore a vast planet where the sun doesn't shine and search for stardust remnants to fuel your lightbeam</li>
        </ul>
      </p>
    </ProjectModal>
  );

  const careTracking = (
    <ProjectModal
      title="Care Tracking App"
      toggleModal={toggleCareModal}
      stack={["Python", "MySQL", "Kivy", "SQLAlchemy", "PyCharm", "GitLab"]}
      banner={software}
      bannerAlt="University of Nebraska-Lincoln Student Resource Center"
    >
      <p>
        My Care Tracking Application was a class project for SOFT 161 (Software Engineering II) at the end of my freshman year at the University of Nebraska-Lincoln. Over a five week period, I worked on 
        an application that allowed a user to input patient data through a graphical user interface, parse that data into a MySQL database, and then read it back out. The
        care tracking application was a basic CRUD (create, read, update, destroy) application at its core, and proved to be my first substantial software development project
        that I had ever taken on.
      </p>
      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <p>
        I picked up the Python programming language specifically for this course and was also learning the basics of database development in parallel. Our coursework taught us 
        basic SQL concepts such as one-to-many relationships, join tables, and how to use ORMs to form associations between software and persistent storage. We also learned how to 
        create user interfaces in code for the first time using a cross-platform Python framework called Kivy. The class, as well as the project, served as an important stepping stone
        in my software engineering career as I learned the foundations of front-end development and backend development with a basic, student-friendly set of tools.
      </p>
      <Typography variant="h5" className="subtitle">Features</Typography>
      <p>
        <ul>
          <li>Login as an existing patient, or create a new one</li>
          <li>Persistent previous patient based on a JSON store</li>
          <li>Update a patient's medical fields, drug intake, and other data</li>
          <li>View all of a patient's previous visit data</li>
          <li>Remove existing patient data from the database</li>
        </ul>
      </p>
    </ProjectModal>
  );

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
            Buckle. The app consolidated all of their marketing 
            department's potential social media posts into one 
            place for easier sharing of corporate promotions.
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
            The university offered an amazing special topics course last spring entitled 
            "Exploring Virtual Reality." We learned how to use tools like C#, 
            Unity, and SteamVR to develop interactive virtual reality games 
            while partnering up with Emerging Arts students at the university.
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
        <>
          {pokemon}
        </>
      </Modal>

      <Modal
        open={openSite}
        onClose={toggleSiteModal}
      >
        <>
          {personalWebsite}
        </>
      </Modal>

      <Modal
        open={openBuckle}
        onClose={toggleBuckleModal}
      >
        <>
          {socialMediaMarketing}
        </>
      </Modal>

      <Modal
        open={openVR}
        onClose={toggleVRModal}
      >
        <>
          {vrGame}
        </>
      </Modal>

      <Modal
        open={openCare}
        onClose={toggleCareModal}
      >
        <>
          {careTracking}
        </>
      </Modal>
      <br/>
    </div>
  );
};
  
export default Projects;