import React, { useState } from "react";

// Components
import {
  TextField,
  Button, 
  Backdrop,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { Send } from "@material-ui/icons";

// Utilities
import { makeStyles } from "@material-ui/core";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const classes = useStyles();

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
    <>
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
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  field: {
    marginBottom: "3vh",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default ContactForm;