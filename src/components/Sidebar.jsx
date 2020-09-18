import React from "react";

// Components
import {
  Grid,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "@material-ui/core";
import { GitHub, LinkedIn, Description } from "@material-ui/icons";
import { Link } from "react-router-dom";

// Utilities
import { makeStyles } from "@material-ui/core";
import { MenuItems } from "../utils/menu-items";
import nav from "../utils/enums";

// Assets
import headshot from "../resources/RyanLe.png"

const Sidebar = ({ 
  mobileOpen,
  handleDrawerToggle,
  selected,
  setSelected
}) => {
  const classes = useStyles();

  const sidebar = (
    <>
      <Grid 
        container 
        justify="center" 
        alignItems="center" 
        className={classes.profile}
      >
        <img
          src={headshot}
          width="70%"
          height="auto"
          alt="Ryan Le Headshot - Spring 2020"
          style={{ borderRadius: "50%" }}
        />
      </Grid>
      <div style={{ textAlign: "center" }}>
        <Typography variant="h5" className={classes.whiteText}>Ryan Le</Typography>
        <Typography variant="body2" className={classes.whiteText}>Software Engineer</Typography>
        <Typography variant="body2" className={classes.whiteText}>University of Nebraska-Lincoln</Typography>
      </div>
      <p/>

      <Divider className={classes.divider}/>

      {/* Navigation */}
      <List component="nav">
        {MenuItems.map(({ path, title, icon}, index) => (
          <div key={index}>
            <ListItem
              button
              component={Link}
              to={path}
              className={title === selected ? classes.active : classes.listItem}
              onClick={() => {
                setSelected(title);
                if (mobileOpen) handleDrawerToggle();
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={title} />
            </ListItem>
          </div>
        ))}
      </List>

      <Divider className={classes.divider}/>

      {/* Social Media */}
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item>
          <Grid container direction="column" justify="center" alignItems="center">
            <IconButton aria-label="GitHub">
              <a href="https://github.com/ryansle"><GitHub className={classes.linkIcon}/></a>
            </IconButton>
            <Typography variant="caption" className={classes.whiteText}>GitHub</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" justify="center" alignItems="center">
            <IconButton aria-label="GitHub">
              <a href="https://www.linkedin.com/in/ryansle/"><LinkedIn className={classes.linkIcon}/></a>
            </IconButton>
            <Typography variant="caption" className={classes.whiteText}>LinkedIn</Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container direction="column" justify="center" alignItems="center">
            <IconButton aria-label="GitHub">
              <Link to="/resume">
                <Description className={classes.linkIcon}/>
              </Link>
            </IconButton>
            <Typography variant="caption" className={classes.whiteText}>Resume</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );

  const mobileSidebar = (
    <>
      <div style={{ textAlign: "center", margin: 15, }}>
        <Typography variant="h5" className={classes.whiteText}>Ryan Le</Typography>
        <Typography variant="body1" className={classes.whiteText}>Software Engineer</Typography>
        <br />
        <Typography variant="body1" className={classes.whiteText}>Hey, nice phone!</Typography>
      </div>
      <p/>

      <Divider className={classes.divider}/>

      {/* Navigation */}
      <List component="nav" className={classes.whiteText}>
      {MenuItems.map(({ path, title, icon}, index) => (
        <div key={index}>
          <ListItem
            button
            component={Link}
            to={path}
            className={title === selected ? classes.active : classes.listItem}
            onClick={() => {
              setSelected(title);
              if (mobileOpen) handleDrawerToggle();
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        </div>
      ))}
      </List>

      <Divider className={classes.divider}/>

      <Typography variant="body1" className={classes.whiteText} style={{ textAlign: "center", paddingTop: 10 }}>Other Platforms</Typography>

      <List component="nav" className={classes.whiteText}>
        <a href="https://github.com/ryansle" className={classes.link}>
          <ListItem button>
          <ListItemIcon><GitHub className={classes.linkIcon}/></ListItemIcon>
            <ListItemText primary="GitHub"/>
          </ListItem>
        </a>
        <a href="https://linkedin.com/in/ryansle" className={classes.link}>
          <ListItem button>
          <ListItemIcon><LinkedIn className={classes.linkIcon}/></ListItemIcon>
            <ListItemText primary="LinkedIn"/>
          </ListItem>
        </a>
        <Link className={classes.link} to="/resume">
          <ListItem button 
            classes={{ selected: classes.active }}
            onClick={() => {setSelected(nav.RESUME)}}
            selected={selected === nav.RESUME}
          >
          <ListItemIcon><Description className={classes.linkIcon}/></ListItemIcon>
            <ListItemText primary="Resume" />
          </ListItem>
        </Link>
      </List>

      <Divider className={classes.divider}/>
    </>
  );

  if (mobileOpen) {
    return (
      <>
        {mobileSidebar}
      </>
    );
  } else {
    return (
      <>
        {sidebar}
      </>
    );
  }
};

const useStyles = makeStyles(() => ({
  profile: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  whiteText: {
    color: "white",
  },
  listItem: {
    backgroundColor: "#363740",
    borderLeft: "4px solid #363740",
    color: "#9fa2b4 !important",
  },
  active: {
    backgroundColor: "#3e4049 !important",
    color: "white",
    borderLeft: "4px solid white",
  },
  divider: {
    height: 5,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  linkIcon: {
    color: "white",
    height: 34,
    width: "auto",
    padding: "0px 5px 0px 5px",
  },
}));

export default Sidebar;