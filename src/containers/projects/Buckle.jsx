import React from "react";

// Components
import { Typography } from "@material-ui/core";
import ProjectModal from "../../components/ProjectModal";

// Assets
import buckleSVG from "../../resources/projects/buckle.svg";

const Buckle = ({ toggle }) => {

  return (
    <ProjectModal
      title="Social Media Marketing"
      toggleModal={toggle}
      stack={["Swift", "SwiftUI", "Alamofire", "Kingfisher", "Drupal", "TestFlight", "GitHub"]}
      banner={buckleSVG}
      bannerAlt="The Buckle"
    >
      <br />
      <Typography variant="body1">
        The Social Media Marketing app, also known as Buckle Advocacy, was a year-long project through my university's Senior Design program which pairs computer science and software
        engineering students to industry sponsors. Once paired, the course works similarly to an internship where students will work on the project throughout the year and deliver weekly
        status reports to their project stakeholders and follow agile methodologies while communicating effectively. While enrolled in this class, I took on a leadership position
        for my team and was the Squad Lead and Product Manager for our senior design team, which had me focusing on defining our product vision, leading our weekly meetings, creating our
        presentation materials, and effectively capitalizing on my teammates' skillsets in order to run a successful project.
      </Typography>
      <Typography variant="body1">
        I worked on this project alongside <a href="https://www.linkedin.com/in/kaileimao">Kailei Mao</a>, <a href="https://www.linkedin.com/in/arreyaahrom">Arreya Ahrom</a>,
        <a href="https://www.linkedin.com/in/olivia-rine"> Olivia Rine</a>, <a href="https://www.linkedin.com/in/zhaozhong-qi-64403b118">Dennis Qi</a>, 
        and <a href="https://www.linkedin.com/in/jake-ediger-373933129">Jake Ediger</a>. Our project could not have been nearly as successful as it was without the help of our amazing team.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What problem did the app solve?</Typography>
      <Typography variant="body1">
        Buckle needed a way to provide a unified and appropriate social brand that protected the brand's image. Because they have so many stores across the US (449 to be exact),
        it proved to be impractical to field and service each stores' one-off requests for approving social media content. In order to solve this, Buckle wanted a mobile app that
        allowed their marketing department to provide approved social media content for their teammates to use nationwide.
      </Typography>
      <Typography variant="body1">
        Our team's solution enlisted a content management system, Drupal, to house the marketing department's approved content. From there, individual pieces of content were assigned 
        start and end dates for the content to run through, and valid posts were pulled down to our iOS application and shown to a user in a feed visually similar to Instagram. Users could then
        share these approved social media posts to a variety of different social media channels, including Facebook, Instagram, Twitter, and LinkedIn with ease.
      </Typography>
      <Typography variant="body1">
        This allowed their marketing department to create approved content complete with images, preloaded captions, and hashtags for their employees to share. It allowed each store to
        showcase uniform content across the board and remediate individual store managers' worries about what content they were going to have to come up with on their own. It also created a 
        universal system for running discounts, promotions, and special events.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What did I learn?</Typography>
      <Typography variant="body1">
        Working on this project was an absolutely amazing experience due to the wealth of knowledge I was able to take away from it. For instance, in my position in charge of the project,
        I learned how to do things like manage a team of developers, elicit requirements effectively, collaborate in a team environment, communicate with non-technical 
        stakeholders, and partition tasks productively. My work on Buckle Advocacy opened up brand new career opportunities for me in Product Management leveraging the skills I sharpened
        over the course of a year, and also aided me in sharpening my leadership capabilities.
      </Typography>
      <Typography variant="body1">
        On the development aspect of things, I learned how to develop iOS applications and the steps it takes to deploy on a live device - it's more complicated than you think! I learned
        how to leverage a brand new technology, SwiftUI, and took on learning the Swift programming language, Apple's new flagship development language.
      </Typography>
      <br /> <br />

      <Typography variant="h5" className="subtitle">What would I change next time?</Typography>
      <Typography variant="body1">
        Reflecting back on this experience, there is plenty of room for me to improve in my abilities as both a software engineer and a product manager. If I started this project over
        from scratch, I definitely would not have utilized Drupal as our content management system due to how outdated the technology felt while in use. On the flip side of that, I 
        also would have allowed SwiftUI to mature more as a framework before committing to working on a project as large-scale as this in such an up-and-coming technology.
      </Typography>
    </ProjectModal>
  );
};

export default Buckle;