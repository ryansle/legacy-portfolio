import React from "react";

// Components
import { Card, Typography, Grid, CardMedia, useMediaQuery } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  responsiveReference: {
    display: "flex",
    width: "100%",
    height: "auto",
    marginTop: 10,
    marginBottom: 10,
    border: "1px solid #9fa2b4",
    "&:hover": {
      boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
  },
  reference: {
    display: "flex",
    width: "45%",
    margin: 7,
    border: "1px solid #9fa2b4",
    minWidth: 463,
    "&:hover": {
      boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    padding: 15,
    midWidth: 215,
  },
  referenceIcon: {
    marginRight: 10,
  },
  cover: {
    width: "40%",
  },
}));

const Reference = ({ name, title, company, location, email, phone="", image, alt }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1550px)");
  const mailto = `mailto:${email}`;
  const tel = `tel:1-${phone}`;
  const areaCode = phone.substring(0, 3);
  const middle = phone.substring(4, 7);
  const end = phone.substring(8);
  const formattedTel = `(${areaCode}) ${middle}-${end}`;

  return (
    <>
      <Card className={isSmallScreen ? classes.responsiveReference : classes.reference}>
        <div className={classes.details}>
          <Typography variant="h6">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {company}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {location}
          </Typography>
          <br/>
          <a href={mailto}>
            <Grid container>
              <Mail className={classes.referenceIcon}/>
              <Typography variant="subtitle1">
                {email}
              </Typography>
            </Grid>
          </a>
          {phone !== "" &&
            <a href={tel}>
              <Grid container>
                <Phone className={classes.referenceIcon}/>
                <Typography variant="subtitle1">
                  {formattedTel}
                </Typography>
              </Grid>
            </a>
          }
        </div>
        <CardMedia
          className={classes.cover}
          image={image}
          title={alt}
        />
      </Card> 
    </>
  )
}

export default Reference;