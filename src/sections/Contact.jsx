import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  useMediaQuery
} from "@material-ui/core";
import {
  Send,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
// Assets
import contact from "../resources/contact.svg";

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
  formContainer: {
    marginLeft: "10%",
    marginRight: "10%",
  },
  field: {
    marginBottom: "3vh",
  },
  responsiveImage: {
    width: "80%",
    height: "auto",
  },
  image: {
    width: "30%",
    height: "auto",
  }
}));

const Contact = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <section className={classes.container}>
        <Typography className={classes.title} variant="h4">Let's Talk!</Typography>
        <Typography variant="body1">
          Liking what you see? Need to staff someone to work on your projects, or have an opportunity you think I would be interested in?
          Let's talk about any of these things and more! I am always open for a good conversation and expanding my network.
        </Typography>
        <br/>
        <Typography variant="body1">
          You can contact me on <a href="https://www.linkedin.com/in/ryansle/">LinkedIn</a> or use the form below to get in touch, because I am always open to exciting new opportunities!
        </Typography>
        <br/>
        <Typography variant="body1">
          Note: this contact form is currently a work in progress. <b>It is not functional yet</b>, so in the mean time, please reach out to me on LinkedIn or
          at <a href="mailto:ryanle@live.com">ryanle@live.com</a>. I aim to have to this functionality finished within the week! (7/26/20)
        </Typography>
        <br/>
        <p align="middle">
          <img 
            src={contact} 
            className={isSmallScreen ? classes.responsiveImage : classes.image}
            alt="Get in contact!"
          />
        </p>
        <br/> <br/>

        <form className={classes.formContainer}>
          <TextField
            id="name"
            className={classes.field}
            label="Name"
            variant="outlined"
            fullWidth
            onChange={handleNameChange}
            value={name}
          />
          <TextField
            id="email"
            className={classes.field}
            label="Email Address"
            variant="outlined"
            fullWidth
            onChange={handleEmailChange}
            value={email}
          />
          <TextField
            id="subject"
            className={classes.field}
            label="Subject"
            variant="outlined"
            fullWidth
            onChange={handleSubjectChange}
            value={subject}
          />
          <TextField
            id="message"
            className={classes.field}
            label="Message"
            variant="outlined"
            multiline
            rows={6}
            rowsMax={15}
            fullWidth
            onChange={handleMessageChange}
            value={message}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send/>}
          >
            Send
          </Button>
        </form>
      </section>
    </div>
  );
}
  
export default Contact;