import React from "react";

// Components
import {
  Button,
  Grid,
  Typography,
  Chip,
  IconButton,
  useMediaQuery
} from "@material-ui/core";
import { Clear, GitHub } from "@material-ui/icons";
import Banner from "./Banner";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  exitButton: {
    margin: 5,
    position: "absolute",
    zIndex: 1,
    right: 0,
  },
  scrollable: {
    overflow: "scroll",
    maxHeight: "55vh",
  },
  description: {
    paddingLeft: 70,
    paddingRight: 70,
    paddingBottom: 15,
    scrollPadding: -15,
  },
  responsiveDescription: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 15,
    scrollPadding: -15,
  },
  tech: {
    margin: 4,
  },
  overlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%) !important",
    background: "white",
    width: "70%",
  },
  responsiveOverlay: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    width: "90%",
  },
}));

const ProjectModal = React.forwardRef(
  (
    { 
      title, 
      toggleModal,
      stack, 
      banner, 
      bannerAlt, 
      github="", 
      children 
    },
    ref
  ) => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery("(max-width: 1100px)");

    return (
      <div className={isSmallScreen ? classes.responsiveOverlay : classes.overlay} ref={ref}>
        <Button
          className={classes.exitButton}
          size="small"
          variant="contained"
          color="secondary"
          onClick={toggleModal}
        >
          <Clear/>
        </Button>
        <Banner
          image={banner}
          alt={bannerAlt}
          screenHeight="30"
        />
        <div className={classes.scrollable}>
          <section className={isSmallScreen ? classes.responsiveDescription : classes.description}>
            <br/>
            <Grid container justify="space-between" style={{ flexWrap: "wrap" }}>
              <Grid item>
                <Typography variant="h4" className={"title"}>
                  {title}
                </Typography>
              </Grid>
              <Grid item>
                {
                  stack.map((tech) =>
                    <Chip
                      className={classes.tech}
                      label={tech}
                    />
                  )
                }
                {
                  github !== "" && 
                    <IconButton className={classes.tech}>
                      <a href={github}><GitHub/></a>
                    </IconButton>
                }

              </Grid>
            </Grid>

            {children}

          </section>
        </div>
      </div>
    );
  }
);

export default ProjectModal;