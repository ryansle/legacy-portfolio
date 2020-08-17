import React from "react";

// Components
import { 
  Card, 
  CardContent, 
  Grid, 
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
} from "@material-ui/icons";
import { Link } from "react-router-dom";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  nav: {
    width: "32%",
    height: "auto",
    marginBottom: 20,
    boxShadow: "0px 3px 4px 0px #555",
    border: "1px solid #9fa2b4",
    textDecoration: "none",
  },
  responsiveNav: {
    width: "100%",
    height: "auto",
    marginBottom: 20,
    boxShadow: "0px 3px 4px 0px #555",
    border: "1px solid #9fa2b4",
    textDecoration: "none",
  },
  icon: {
    height: 30,
    width: "auto",
    paddingRight: 7,
  },
  subtitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
}));

const NavCard = ({ link, icon, title, description }) => {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 1100px)");

  const route = `/${link}`;

  const renderIcon = (icon) => {
    switch(icon) {
      case "home":
        return <House className={classes.icon}/>;
      case "about":
        return <Person className={classes.icon}/>;;
      case "experience":
        return <Work className={classes.icon}/>;;
      case "skills":
        return <Code className={classes.icon}/>;; 
      case "projects":
        return <Computer className={classes.icon}/>;;
      case "contact":
        return <Email className={classes.icon}/>;;
      default:
        return;
    }
  };

  return (
    <>
      <Card 
        className={isSmallScreen ? classes.responsiveNav : classes.nav} 
        component={Link} 
        to={route}
      >
        <CardContent>
          <Grid container>
            {renderIcon(icon)}
            <Typography variant="h5" className={classes.subtitle}>
              {title}
            </Typography>
          </Grid>
          <Typography variant="body1">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default NavCard;