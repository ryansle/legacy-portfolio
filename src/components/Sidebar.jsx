import React, { useState } from "react";
import { 
  Grid,
  Drawer,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Hidden,
} from "@material-ui/core";
import { 
  Home, 
  Person, 
  Work,
  Code, 
  Computer,
  Email, 
  LinkedIn, 
  GitHub,
  Description, 
  Menu
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import Router from "../Router";
import { makeStyles, useTheme } from "@material-ui/core/styles";
// Assets
import headshot from "../resources/RyanLe.png"

const sidebarWidth = 225;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  sidebar: {
    width: sidebarWidth,
    flexShrink: 0,
  },
  sidebarLinks: {
    background: "#363740",
    [theme.breakpoints.up("sm")]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  divider: {
    height: 5,
  },
  profile: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  whiteText: {
    color: "white",
  },
  navIcon: {
    color: "white",
    height: 34,
    width: "auto",
  },
  linkIcon: {
    color: "white",
    height: 34,
    width: "auto",
  },
  active: {
    backgroundColor: "#3e4049 !important",
    color: "white",
    borderLeft: "4px solid white",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: sidebarWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: sidebarWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  }
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;
  
  const nav = {
    HOME: "Homebase - Welcome.",
    ABOUT: "About Me",
    EXPERIENCE: "Work Experience",
    SKILLS: "My Skillsets",
    PROJECTS: "Projects I've Worked On",
    CONTACT: "Contact Me!",
  }
  const [selected, setSelected] = useState(nav.HOME);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  const sidebar = (
    <div>
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
      <List component="nav" className={classes.whiteText}>
        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/"
          onClick={() => {setSelected(nav.HOME)}}
          selected={selected === nav.HOME}
        >
          <ListItemIcon><Home className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/about-me"
          onClick={() => {setSelected(nav.ABOUT)}}
          selected={selected === nav.ABOUT}
        >
          <ListItemIcon><Person className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/experience"
          onClick={() => {setSelected(nav.EXPERIENCE)}}
          selected={selected === nav.EXPERIENCE}
        >
          <ListItemIcon><Work className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Experience"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/skills"
          onClick={() => {setSelected(nav.SKILLS)}}
          selected={selected === nav.SKILLS}
        >
          <ListItemIcon><Code className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Skills"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/projects"
          onClick={() => {setSelected(nav.PROJECTS)}}
          selected={selected === nav.PROJECTS}
        >
          <ListItemIcon><Computer className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Projects"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/contact-me"
          onClick={() => {setSelected(nav.CONTACT)}}
          selected={selected === nav.CONTACT}
        >
          <ListItemIcon><Email className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Contact"/>
        </ListItem>
        
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
              <a href=""><Description className={classes.linkIcon}/></a>
            </IconButton>
            <Typography variant="caption" className={classes.whiteText}>Résumé</Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );

  const mobileSidebar = (
    <div>
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
        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/"
          onClick={() => {setSelected(nav.HOME)}}
          selected={selected === nav.HOME}
        >
          <ListItemIcon><Home className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/about-me"
          onClick={() => {setSelected(nav.ABOUT)}}
          selected={selected === nav.ABOUT}
        >
          <ListItemIcon><Person className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/experience"
          onClick={() => {setSelected(nav.EXPERIENCE)}}
          selected={selected === nav.EXPERIENCE}
        >
          <ListItemIcon><Work className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Experience"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/skills"
          onClick={() => {setSelected(nav.SKILLS)}}
          selected={selected === nav.SKILLS}
        >
          <ListItemIcon><Code className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Skills"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/projects"
          onClick={() => {setSelected(nav.PROJECTS)}}
          selected={selected === nav.PROJECTS}
        >
          <ListItemIcon><Computer className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Projects"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          component={Link}
          to="/contact-me"
          onClick={() => {setSelected(nav.CONTACT)}}
          selected={selected === nav.CONTACT}
        >
          <ListItemIcon><Email className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Contact"/>
        </ListItem>
        
      </List>

      <Divider className={classes.divider}/>

      <Typography variant="body1" className={classes.whiteText} style={{ textAlign: "center", paddingTop: 10 }}>Other Platforms</Typography>

      <List component="nav" className={classes.whiteText}>
        <a href="https://github.com/ryansle" className={classes.link}>
          <ListItem button>
          <ListItemIcon><GitHub className={classes.navIcon}/></ListItemIcon>
            <ListItemText primary="GitHub"/>
          </ListItem>
        </a>
        <a href="https://linkedin.com/in/ryansle" className={classes.link}>
          <ListItem button>
          <ListItemIcon><LinkedIn className={classes.navIcon}/></ListItemIcon>
            <ListItemText primary="LinkedIn"/>
          </ListItem>
        </a>
        <a href="/" className={classes.link}>
          <ListItem button>
          <ListItemIcon><Description className={classes.navIcon}/></ListItemIcon>
            <ListItemText primary="Résumé"/>
          </ListItem>
        </a>
      </List>

      <Divider className={classes.divider}/>
      
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open sidebar"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <Menu />
          </IconButton>
          <Typography variant="h5" noWrap>{selected}</Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="navigation menu">
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            className={classes.sidebar}
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.sidebarLinks,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {mobileSidebar}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.sidebar}
            classes={{
              paper: classes.sidebarLinks,
            }}
            variant="permanent"
            open
          >
            {sidebar}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Main Content of the site */}
        <Router/>
      </main>
    </div>
  );
}

export default Sidebar;