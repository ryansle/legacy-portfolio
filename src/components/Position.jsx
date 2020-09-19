import React from "react";

// Components
import {
  Grid,
  Typography,
  Chip,
  Button,
  Avatar,
  useMediaQuery
} from "@material-ui/core";
import { Link } from "react-router-dom";

// Utilities
import { makeStyles } from "@material-ui/core/styles";
import { renderIcon } from "../utils/render-avatars";

const Position = ({ 
  company, 
  title, 
  dateRange, 
  stack, 
  link, 
  image,
  alt,
  children 
}) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1440px)");

  const route = `/experience/${link}`;

  return (
    <Grid container direction="column">
      <Typography variant="h5">
        {company}
      </Typography>
      <Typography variant="subtitle1" className={classes.position} color="textSecondary">
        {title}
      </Typography>
      <Typography variant="subtitle1" className={classes.dateRange} color="textSecondary">
        {dateRange}
      </Typography>
      <Grid container wrap="wrap-reverse">
        <Grid item xs={isSmallScreen ? 12 : 6}>  
          {children}
          {
            stack.map((tech, index) =>
              <Chip
                key={index}
                className={classes.tech}
                label={tech}
                avatar={<Avatar src={renderIcon(tech)} />}
              />
            )
          }
          <Button 
            className={classes.learnMore}
            size="medium"
            variant="contained"
            color="primary"
            component={Link}
            to={route}
          >
            Learn More
          </Button>
        </Grid>
        <Grid item xs={isSmallScreen ? 12 : 6}>
          <p align="middle">
            <img 
              className={isSmallScreen ? classes.responsiveMedia : classes.media}
              src={image}
              alt={alt}
            />
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  dateRange: {
    fontStyle: "italic",
    marginBottom: 20,
  },
  tech: {
    margin: 5,
  },
  learnMore: {
    float: "right",
    margin: 6,
  },
  media: {
    width: "100%",
    height: "auto",
    paddingLeft: 20,
  },
  responsiveMedia: {
    width: "70%",
    height: "auto",
    textAlign: "center",
  },
}));

export default Position;