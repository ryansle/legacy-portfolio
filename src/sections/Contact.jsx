import React from "react";

// Components
import {
  Typography,
  Grid,
  useMediaQuery
} from "@material-ui/core";
import ContactForm from "../components/ContactForm";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

// Assets
import contact from "../resources/contact.svg";

const Contact = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1300px)");

  return (
    <div className={isSmallScreen ? classes.responsiveContainer : classes.container}>
      <Typography className="title" variant="h4">Let's Talk!</Typography>
      <Grid container>
        <Grid item xs={isSmallScreen ? 12 : 7}>
          <Typography variant="body1">
            Like what you see here? Need a dedicated new team member to collaborate with, or have a million dollar idea to discuss? 
            Send me a message and let's get in touch.
          </Typography>
          <br/>
          <Typography variant="body1">
            You can contact me on <a href="https://www.linkedin.com/in/ryansle/">LinkedIn</a> or use the form below.
            I am always on the lookout for exciting new opportunities, as well as the chance to expand my network and meet new people.
          </Typography>
          <br/>
        </Grid>

        {!isSmallScreen && <Grid item xs={1}/>}
        
        <Grid item xs={isSmallScreen ? 12 : 4}>
          <p align="middle">
            <img 
              src={contact} 
              className={isSmallScreen ? classes.responsiveImage : classes.image}
              alt="Get in contact!"
            />
          </p>
        </Grid>
      </Grid>
      <br/>

      <ContactForm/>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: 40,
    paddingLeft: "20vw",
    paddingRight: "20vw",
    minHeight: "calc(90vh + 10px)",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: "12vw",
    paddingRight: "15vw",
    minHeight: "calc(90vh + 10px)",
  },
  responsiveImage: {
    width: "80%",
    height: "auto",
  },
  image: {
    width: "100%",
    height: "auto",
  },
}));
  
export default Contact;