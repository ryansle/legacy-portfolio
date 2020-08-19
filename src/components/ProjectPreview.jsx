import React from "react";

// Components
import { 
  Card, 
  CardContent, 
  Typography, 
  Chip, 
  Button, 
  useMediaQuery 
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  project: {
    minHeight: 425,
    minWidth: 355,
    maxHeight: "30vw",
    maxWidth: "25vw",
    boxShadow: "0px 3px 6px 0px #555",
    margin: 10,
  },
  responsiveProject: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 3px 6px 0px #555",
    margin: 10,
  },
  media: {
    height: "auto",
    width: "100%",
  },
  contents: {
    padding: 10,
  },
  
  tech: {
    margin: 4,
  },
  learnMore: {
    float: "right",
    margin: 6,
  },
}));

const ProjectPreview = React.forwardRef(
  (
    {
      title,
      toggleModal,
      banner,
      bannerAlt,
      stack,
      children,
    }, 
    ref
  ) => {
    const classes = useStyles();
    const isSmallScreen = useMediaQuery("(max-width: 1100px)");

    return (
      <Card className={isSmallScreen ? classes.responsiveProject : classes.project} ref={ref}>
        <img 
          className={classes.media}
          src={banner}
          alt={bannerAlt}
        />
        <div className={classes.contents}>
          <CardContent>
            <Typography className="title" variant="h5">
              {title}
            </Typography>
            {children}
          </CardContent>
          {
            stack.map((tech, index) =>
              <Chip
                key={index}
                className={classes.tech}
                label={tech}
              />
            )
          }
          <Button 
            className={classes.learnMore}
            size="small"
            variant="contained"
            color="primary"
            onClick={toggleModal}
          >
            Learn More
          </Button>
        </div>
      </Card>
    )
  }
);

export default ProjectPreview;