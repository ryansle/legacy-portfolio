import React from "react";

// Components
import { 
  Card, 
  CardMedia,
  CardContent, 
  CardActions,
  Grid, 
  Button,
  Typography,
  useMediaQuery 
} from "@material-ui/core";
import { 
  House, 
  Person,
  Work, 
  Code, 
  Computer, 
  Email, 
  Description,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  full: {
    width: "100%",
    "&:hover": {
      boxShadow: "0px 2px 3px 1px #555",
    },
    "& a": {
      textDecoration: "none",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  half: {
    width: "49%",
    "&:hover": {
      boxShadow: "0px 2px 3px 1px #555",
    },
    "& a": {
      textDecoration: "none",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  third: {
    width: "32%",
    "&:hover": {
      boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
    },
    "& a": {
      textDecoration: "none",
    },
    "& span": {
      fontWeight: "bold",
    },
  },
  icon: {
    height: 30,
    width: "auto",
    paddingRight: 7,
  },
  media: {
    width: "100%",
    objectFit: "cover",
    height: 200,
    objectPosition: "50% 20%"
  },
}));

const NavCard = ({ image, icon, title, description, link, linkText }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");
  const isNotLargeScreen = useMediaQuery("(max-width: 1578px)");

  const renderIcon = (icon) => {
    switch(icon) {
      case "home":
        return <House className={classes.icon}/>;
      case "about":
        return <Person className={classes.icon}/>;
      case "experience":
        return <Work className={classes.icon}/>;
      case "skills":
        return <Code className={classes.icon}/>;
      case "projects":
        return <Computer className={classes.icon}/>;
      case "contact":
        return <Email className={classes.icon}/>;
      case "resume":
        return <Description className={classes.icon}/>;
      default:
        return;
    }
  };

  return (
    <Card 
      className={
        isSmallScreen ? classes.full : 
          isNotLargeScreen ? classes.half : classes.third
      }
      style={{
        height: "auto",
        marginBottom: 20,
        border: "1px solid #9fa2b4",
      }}
    >
      <CardMedia className={classes.media} image={image} title={title}/>
      <CardContent>
        <Grid container>
          {renderIcon(icon)}
          <Typography variant="h5">
            {title}
          </Typography>
        </Grid>
        <Typography variant="body1" color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={link}>
          <Button size="small" color="primary">
            {linkText}
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default NavCard;