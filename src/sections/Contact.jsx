import React, { useState } from "react";

// Components
import {
  Typography,
  TextField,
  Button,
  Grid,
  CircularProgress,
  Backdrop,
  Snackbar,
  useMediaQuery
} from "@material-ui/core";
import {
  Alert,
  AlertTitle,
} from "@material-ui/lab";
import {
  Send,
} from "@material-ui/icons";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";

// Assets
import contact from "../resources/contact.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 40,
    paddingLeft: "20vw",
    paddingRight: "20vw",
  },
  responsiveContainer: {
    paddingTop: 40,
    paddingLeft: '5vw',
    paddingRight: '5vw',
  },
  title: {
    fontWeight: "bold",
    marginBottom: 20,
  },
  field: {
    marginBottom: "3vh",
  },
  responsiveImage: {
    width: "80%",
    height: "auto",
  },
  image: {
    width: "100%",
    height: "auto",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Contact = () => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1300px)");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [openLoader, setOpenLoader] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleNameChange = (e) => { setName(e.target.value); };
  const handleEmailChange = (e) => { setEmail(e.target.value); };
  const handleSubjectChange = (e) => { setSubject(e.target.value); };
  const handleMessageChange = (e) => { setMessage(e.target.value); };
  const handleLoaderToggle = () => { setOpenLoader(!openLoader); };
  const closeLoader = () => { setOpenLoader(false); };
  const handleSubmission = (e) => {
    // open the loader
    handleLoaderToggle();

    // display the loader for a few seconds and then send the email and display the components (so that the user is convinced it actually happened)
    setTimeout(() => {
      closeLoader();

      const params = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      const templateId = "template_kc7wVwGF";
      const userId = "user_VSAtF1KGalm3o5auz1ofo";

      emailjs.send(
        "gmail",
        templateId,
        params,
        userId,
      );

      setOpenAlert(true);
      resetForm();
    }, 1300);
  };
  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") return;
    setOpenAlert(false);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <div>
      <section className={isSmallScreen ? classes.responsiveContainer : classes.container}>
        <Typography className={classes.title} variant="h4">Let's Talk!</Typography>
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

        <form name="contact">
          <input type="hidden" name="form-name" value="contact" />
          <TextField
            className={classes.field}
            label="Name"
            type="text"
            variant="outlined"
            fullWidth
            onChange={handleNameChange}
            value={name}
            required
          />
          <TextField
            className={classes.field}
            label="Email Address"
            type="email"
            variant="outlined"
            fullWidth
            onChange={handleEmailChange}
            value={email}
            required
          />
          <TextField
            className={classes.field}
            label="Subject"
            type="text"
            variant="outlined"
            fullWidth
            onChange={handleSubjectChange}
            value={subject}
            required
          />
          <TextField
            className={classes.field}
            label="Message"
            type="text"
            variant="outlined"
            multiline
            rows={6}
            rowsMax={15}
            fullWidth
            onChange={handleMessageChange}
            value={message}
            required
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<Send/>}
            disabled={!(name !== "" && email !== "" && subject !== "" && message !== "")}
            onClick={handleSubmission}
            size="large"
          >
            Send
          </Button>
        </form>

        <Backdrop className={classes.backdrop} open={openLoader}>
          <CircularProgress color="inherit"/>
        </Backdrop>
        <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleAlertClose}>
          <Alert onClose={handleAlertClose} severity="success" variant="filled">
            <AlertTitle>Message sent successfully!</AlertTitle>
            Expect an email back from me at <b>ryanle@live.com</b> soon!
          </Alert>
        </Snackbar>

      </section>
    </div>
  );
}
  
export default Contact;