import React from "react";

// Components
import {
  Grid,
  Typography,
  Chip,
  Button,
  Avatar,
  Link as Anchor,
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
  children,
  website
}) => {
  const classes = useStyles();
  const tabletScreen = useMediaQuery("(max-width: 1500px)");

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
        {/* Content */}
        <Grid item xs={tabletScreen ? 12 : 7}>
          {children} 

          <Grid container alignItems="flex-end">
            <Grid item xs={tabletScreen ? 12 : 9}>
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
            </Grid>

            <Grid item xs>
              <p align="middle">
                <Button 
                  className={tabletScreen ? classes.fullWidth: classes.learnMore}
                  size="medium"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={route}
                >
                  Learn More
                </Button>
              </p>
            </Grid>
          </Grid>
        </Grid>

        {/* Image */}
        <Grid item xs={tabletScreen ? 12 : 5}>
          <p align="middle">
            <Anchor href={website}>
              <img
                className={tabletScreen ? classes.responsiveMedia : classes.media}
                src={image}
                alt={alt}
              />
            </Anchor>
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
  fullWidth: {
    width: "95%",
    margin: "20px 6px 6px 6px",
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
  spacer: {
    margin: "0px 0px 20px 0px"
  }
}));

export default Position;