import React from "react";

// Components
import { 
  Card, 
  CardContent,
  Typography, 
  Grid, 
  Link,
  CardMedia, 
  useMediaQuery 
} from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const Reference = ({ 
  name, 
  title, 
  company, 
  location, 
  email, 
  phone="", 
  image, 
  alt 
}) => {
  const classes = useStyles();
  const tabletScreen = useMediaQuery("(max-width: 1500px)");
  const phoneScreen = useMediaQuery("(max-width: 800px)");

  const mailto = `mailto:${email}`;
  const tel = `tel:1-${phone}`;
  const areaCode = phone.substring(0, 3);
  const middle = phone.substring(4, 7);
  const end = phone.substring(8);
  const formattedTel = `(${areaCode}) ${middle}-${end}`;

  return (
    <Card className={phoneScreen ? classes.phoneReference : classes.fullReference}>
      <CardContent className={classes.content}>
        <Typography variant={tabletScreen ? "body1" : "h6"}>
          {name}
        </Typography>
        <Typography 
          variant={tabletScreen ? "caption" : "body1"}
          color="textSecondary"
        >
          {title}
          <br />

          {company}
          <br />

          {location}
        </Typography>

        <Grid className={classes.contact} container alignItems="center">
          <Mail className={classes.icon} />
          <Link 
            href={mailto} 
            variant={tabletScreen ? "caption" : "body1"}
          >
            {email}
          </Link>
        </Grid>

        {
          phone !== "" && 
            <Grid container alignItems="center">
              <Phone className={classes.icon} />
              <Link 
                href={tel} 
                variant={tabletScreen ? "caption" : "body1"}
              >
                {formattedTel}
              </Link>
            </Grid>
        } 
      </CardContent>

      <CardMedia
        className={classes.headshot}
        image={image}
        alt={alt}
        title="name"
      />
    </Card> 
  );
};

const useStyles = makeStyles(() => ({
  fullReference: {
    display: "flex",
    margin: "0px 3px 20px 3px",
    width: "48%"
  },
  phoneReference: {
    display: "flex",
    margin: "0px 5px 20px 5px",
    width: "95%"
  },
  content: {
    width: "80%",
  },
  contact: {
    margin: "20px 0px 0px 0px",
  },
  icon: {
    color: "#3F51B5",
    margin: "0px 15px 0px 0px",
    width: 20,
    height: "auto",
  },
  headshot: {
    width: "46%",
    height: "100%",
  }
}));

export default Reference;