import React from "react";
import {
  Typography,
  Grid,
  Chip,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import relogic from "../resources/experience/re-logic.png";
import credits from "../resources/experience/credits.png";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "12vw",
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontWeight: "bold",
  },
  position: {
    color: "#757575",
  },
  dateRange: {
    fontStyle: "italic",
    color: "#757575",
    marginBottom: 20,
  },
  media: {
    maxWidth: "90%",
    height: "auto",
  },
  tech: {
    margin: 5,
  }
}));

const ReLogic = () => {
  const classes = useStyles();

  return (
    <div>
      <section className={classes.container}>
        <p align="middle">
          <a href="https://re-logic.com/">
            <img 
              className={classes.media}
              src={relogic}
              alt="Re-Logic Games"
            />
          </a>
        </p>
        <Grid container justify="space-between">
          <Grid item>
            <Typography variant="h5" className={classes.position}>Quality Assurance Game Tester</Typography>
            <Typography variant="h5" className={classes.dateRange}>January 2011 - June 2015</Typography>
          </Grid>
          <Grid item>
            <Chip
              className={classes.tech}
              label="Jira"
            />
            <Chip
              className={classes.tech}
              label="Slack"
            />
            <Chip
              className={classes.tech}
              label="XChat"
            />
            <Chip
              className={classes.tech}
              label="C#"
            />
            <Chip
              className={classes.tech}
              label="Microsoft XNA"
            />
          </Grid>
        </Grid>

        <Typography variant="body1">
          <a href="https://re-logic.com/">Company Website</a>
        </Typography>
        <br/>

        <Typography variant="body1">
          Re-Logic is an American independent game developer and publisher based in Indiana. 
          It was founded by Andrew Spinks in 2011. The company is best known for developing and publishing Terraria, 
          a 2D action-adventure sandbox video game. In addition, the company has also published indie side-scrollers 
          <i> Pixel Piracy</i> (2015) and <i>Pixel Privateers</i> (2017). Prior to the success of Terraria, the company
          (which was unofficial at the time) was known for developing popular fangame Super Mario Brothers X.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Responsibilities</Typography>
        <Typography variant="body1">
          <ul>
            <li>Evaluated beta versions of Terraria in order to catch bugs before shipping out major community updates.</li>
            <li>Brainstormed ideas for new additions to Terraria and gameplay improvements.</li>
            <li>Reported directly to developers regarding gameplay, mechanics, bugs, etc.</li>
            <li>Participated in remote meetings with the development team to address the current state of progress.</li>
          </ul>
        </Typography>
        <Typography variant="body1">
          Okay, I recognize that if you are actually reading through this page, you probably have a lot of questions.
          Let's address the frequently asked questions, and if you have any more, feel free to <Link to="/contact-me">contact me!</Link>
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>What is Terraria?</Typography>
        <br/>
        <Typography variant="body1">
          Terraria is a 2D sandbox game with gameplay that revolves around exploration, 
          building, crafting, combat, and mining, playable in both single-player and 
          multiplayer modes. The game has a 2D sprite tile-based graphical style 
          reminiscent of the 16-bit sprites found on the Super NES. 
          The game is noted for its classic exploration-adventure style of gameplay, 
          similar to games such as the Metroid series and Minecraft.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>How on Earth did I find myself with a job here at age 12?</Typography>
        <br/>
        <Typography variant="body1">
          When I was younger, I was really, really into Nintendo games. One of my favorite things
          to do was create my own Super Mario levels in a decade-old fan game that some people
          might be familiar with called Super Mario Flash. Around this same time, I discovered a
          different, much improved Mario fan game entitled Super Mario Brothers X (SMBX for short).
        </Typography>
        <br/>
        <Typography variant="body1">
          SMBX was an independent development project that had absolutely no ties
          to Nintendo, and it had a sole developer named Andrew Spinks - or 'Redigit', online. The game
          managed to become popular enough to become the center of its own online community at 
          <a href="supermariobrothers.org"> supermariobrothers.org</a>, which has now been repossessed by 
          Nintendo. I was an active member in this community 
          since I enjoyed creating my own Mario levels, which eventually turned me into a prominent member
          of the small community. As I became better and better friends with those that shared this same interest 
          as me, I was eventually invited to join Andrew Spinks and other members of the community
          to playtest beta versions of the game prior to shipping major community updates.
        </Typography>
        <br/>
        <Typography variant="body1">
          But as time went on, Andrew Spinks began to lose interest in continued development of SMBX.
          This, coupled with increasing pressure from Nintendo via contact from their lawyers, eventually 
          caused him to cease development of the game in late 2010, but the community lived on.
        </Typography>
        <br/>
        <Typography variant="body1">
          Just a few short months later, I received a message on Facebook from one of my former team members
          on SMBX about "Andrew's newest project," and how they wanted me involved again. Without having the slightest
          idea of what I was signing myself up for, I agreed to rejoin the team and was quickly reintegrated into all 
          of the team's secret IRC channels, email chains, Dropbox file storages, etc. I was given a rundown of Andrew's new 
          game that he was entitling "Terraria", given a download link, and told to just start playing around with the game.
          For how little content there was at the time, it was incredible, and quickly became the main way I would spend my free time.
        </Typography>
        <Typography variant="h5" className={classes.subtitle}>How did Terraria get so big?</Typography>
        <br/>
        <Typography variant="body1">
          Originally, Terraria was just meant as a pet project that would be the new topic of the old SMBX community. Much of the original base game
          was borrowed from a variety of other games - a lot of which is still prevalant today. In the beginning, many of the sprites were borrowed over
          from Final Fantasy 5, mechanics over from SMBX, and inspiration from games like Minecraft. These were non-issues initially as Terraria was intended
          to be a spin-off successor to SMBX that capitalized on the gameplay that members of that community were most interested in. However, after releasing
          the initial game trailers, Terraria started to garner a lot more attention than we ever anticipated - we got the attention of 
          <b> Mojang Studios,</b> the creators of Minecraft (which was currently one of the most popular games in existence),
          and they gave us a shoutout on Twitter. I would go so far as to say this is the sole reason Terraria got as big as it did. With the entirety of the Minecraft
          communities' eyes on us, we started recieving criticism after criticism about how similar the game was to Minecraft, how it was just a "2D clone," and how
          our game was just completely uninspired. As much as this bothered our team, we pushed on with development and worked on
          setting ourselves apart from Minecraft.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>What exactly did I do?</Typography>
        <br/>
        <Typography variant="body1">
          My role on the team was as a <b>Quality Assurance Game Tester.</b> This means most of my time was spent playtesting the game searching
          for bugs, glitches, and other unexpected behaviors. On top of this, I also had to continuously evaluate: was I having fun playing the game? Could certain aspects of the game
          be better? Was there anything that could be added that could enhance the user experience? I like to think I was pretty good at my job, because a lot of things 
          I petitioned for actually made it into the base game. When the team was developing the initial v1.1 Hardmode Update, I was perhaps the most vocal of new additions 
          to the game such as swapping out pickaxes and drills for drills and chainsaws, specific new NPCs during the Blood Moon Event such as the Clown, NPC names, flamethrowers,
          and a variety of other small gameplay mechanics.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Is Terraria still alive?</Typography>
        <br/>
        <Typography variant="body1">
          Yes, very much so! While I'm not an active part of the team anymore, those who remain just wrapped up work on the 1.4 Journey's End Update, which has added thousands of
          new improvements to the base game. Legend has it that 1.4 is the "final update to Terraria," but if you want to take it from someone who worked for Re-Logic for 
          four years, I doubt that is actually the case. Andrew and his team of developers liked to call many previous updates the "final update" to the game, yet here they are
          still working on the game today. If I had to make an educated guess, I would say that the game will be ripe with major updates to come in the distant future.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Why did I leave the team?</Typography>
        <br/>
        <Typography variant="body1">
          I was 12 years old when I started this position. I worked in it until the summer of 2015, wrapping up my time with Re-Logic immediately following the official release
          of 1.3, the Endgame Update. As I was now only 16 years old, I wanted time to spend with my friends and family, and just time to spend being a kid. In those four years, I
          racked up around 1200 hours of game time, and that's only what's been tracked on Steam. I've had tens, if not hundreds, of beta versions of the game installed straight to my
          machine prior to launching on Steam and throughout the years. If I had to pinpoint a true estimate to how many hours I've spent on Terraria, I would estimate it's closer to 1800.
          That's nearly 2.5 <span style={{ fontWeight: "bolder" }}>months</span> of game time - as you can see, I was quite dedicated to my position.
        </Typography>
        <br/>
        <Typography>
          But I couldn't spend all of my time playing the game forever. So, I finally said goodbye to the Re-Logic team back in high school so I could focus on my friends and family.
          Sometimes, I still wonder what it would be like if I had stayed. Now that I'm majoring in Software Engineering, and have a basis in computer programming, could I have 
          contributed to the Re-Logic team in a different medium? Could I have turned Re-Logic Games into a full-time opportunity? I suppose I will never know, now that I'm so far
          removed from it all. All good things must come to an end.
        </Typography>
        <br/>
        <Typography variant="h5" className={classes.subtitle}>Do you have any proof of your involvement?</Typography>
        <br/>
        <Typography variant="body1">
          Certainly. You can see my name appear <a href="https://terraria.org/credits">here</a> as
          Ryan "Namyrr" Le under the Beta/QA Testers section, <a href="https://www.youtube.com/watch?v=laKrQ9nvhW4">here</a> again 
          in the end credits that appear when you beat the game, and once 
          again <a href="https://terraria.gamepedia.com/Re-Logic">here</a> under the official game wiki. Although,
          the wiki has refused to acknowledge my request to update my age from 30 years old to 21 years old. You can also find Andrew Spinks,
          CEO of Re-Logic Games, within my LinkedIn connections. 
        </Typography>
        <br/>
        <p align="middle">
          <img
            className={classes.media}
            src={credits}
            alt="Terraria credits with my name attached"
          />
        </p>
      </section>
    </div>
  );
};

export default ReLogic;