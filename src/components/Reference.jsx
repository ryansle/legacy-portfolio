import React from "react";

// Components
import { Card, Typography, Grid, CardMedia, useMediaQuery } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  responsiveReference: {
    display: "flex",
    boxShadow: "1px 3px 6px 1px #555",
    width: "100%",
    height: "auto",
    marginTop: 10,
    marginBottom: 10,
  },
  reference: {
    display: "flex",
    boxShadow: "1px 3px 6px 1px #555",
    width: "29vw",
    height: "25vh",
    margin: 7,
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

const Reference = ({ name, title, company, email, phone="", image, alt }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
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
          <Typography variant="subtitle2">
            {title}
          </Typography>
          <Typography variant="subtitle2">
            {company}
          </Typography>
          <br/>
          <a href={mailto}>
            <Grid container>
              <Mail className={classes.referenceIcon}/>
              <Typography variant="subtitle2">
                {email}
              </Typography>
            </Grid>
          </a>
          {phone !== "" &&
            <a href={tel}>
              <Grid container>
                <Phone className={classes.referenceIcon}/>
                <Typography variant="subtitle2">
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