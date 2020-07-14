import React, { useState } from 'react';
import { 
  Box,
  Grid,
  Drawer, 
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
} from '@material-ui/core';
import { 
  Home, 
  Person, 
  Work,
  Code, 
  Computer,
  Email, 
  Instagram, 
  Facebook, 
  LinkedIn, 
  GitHub,
  Description, 
  Menu
} from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery } from "@material-ui/core";

import headshot from "../resources/RyanLe.png"

const fullSidebarWidth = 325;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  fullSidebar: {
    width: fullSidebarWidth,
    flexShrink: 0,
  },
  fullSidebarLinks: {
    background: '#363740',
    [theme.breakpoints.up('sm')]: {
      width: fullSidebarWidth,
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
    color: 'white',
  },
  navIcon: {
    color: 'white',
    height: 34,
    width: 'auto',
  },
  otherPlatforms: {
    color: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkIconGroup: {
    marginTop: 20,
    marginLeft: 2,
    marginRight: 2,
  },
  linkIcon: {
    color: 'white',
    height: 34,
    width: 'auto',
  },
  iconCol: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 11,
  },
  active: {
    backgroundColor: '#3e4049 !important',
    color: 'white',
    borderLeft: '4px solid white',
  },

  
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: fullSidebarWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${fullSidebarWidth}px)`,
      marginLeft: fullSidebarWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: theme.spacing(15),
    paddingRight: theme.spacing(15),
    paddingTop: theme.spacing(5)
  },
}));

const Sidebar = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { window } = props;

  const container = window !== undefined ? () => window().document.body : undefined;

  const nav = {
    HOME: 'Home',
    ABOUT: 'About',
    EXPERIENCE: 'Experience',
    SKILLS: 'Skills',
    PROJECTS: 'Projects',
    CONTACT: 'Contact',
  }
  const [selected, setSelected] = useState(nav.HOME);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
  
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
          width="60%"
          height="auto"
          alt="Ryan Le Headshot - Spring 2020"
          style={{ borderRadius: "50%" }}
        />
      </Grid>

      <Typography variant="h5" className={classes.whiteText}>Ryan Le</Typography>
      <Typography variant="paragraph" className={classes.whiteText}>Software Engineering Student at the University of Nebraska-Lincoln</Typography>
      <p/>

      <Divider className={classes.divider}/>

      <List component="nav" className={classes.whiteText}>
        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/"
          onClick={() => {setSelected(nav.HOME)}}
          selected={selected === nav.HOME}
        >
          <ListItemIcon><Home className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Home"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/about-me"
          onClick={() => {setSelected(nav.ABOUT)}}
          selected={selected === nav.ABOUT}
        >
          <ListItemIcon><Person className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="About"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/experience"
          onClick={() => {setSelected(nav.EXPERIENCE)}}
          selected={selected === nav.EXPERIENCE}
        >
          <ListItemIcon><Work className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Experience"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/skills"
          onClick={() => {setSelected(nav.SKILLS)}}
          selected={selected === nav.SKILLS}
        >
          <ListItemIcon><Code className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Skills"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/projects"
          onClick={() => {setSelected(nav.PROJECTS)}}
          selected={selected === nav.PROJECTS}
        >
          <ListItemIcon><Computer className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Projects"/>
        </ListItem>

        <ListItem button
          classes={{ selected: classes.active }}
          // component={Link}
          // to="/contact-me"
          onClick={() => {setSelected(nav.CONTACT)}}
          selected={selected === nav.CONTACT}
        >
          <ListItemIcon><Email className={classes.navIcon}/></ListItemIcon>
          <ListItemText primary="Contact"/>
        </ListItem>
        
      </List>

      <Divider className={classes.divider}/>

      <Box className={classes.otherPlatforms}>
        <Box className={classes.iconCol}>
          <IconButton aria-label="Facebook" className={classes.linkIconGroup}>
            <a href="https://www.facebook.com/ryansple"><Facebook className={classes.linkIcon}/></a>
          </IconButton>
          Facebook
        </Box>

        <Box className={classes.iconCol}>
          <IconButton aria-label="Instagram" className={classes.linkIconGroup}>
            <a href="https://www.instagram.com/ryansle/"><Instagram className={classes.linkIcon}/></a>
          </IconButton>
          Instagram
        </Box>

        <Box className={classes.iconCol}>
          <IconButton aria-label="GitHub" className={classes.linkIconGroup}>
            <a href="https://github.com/ryansle"><GitHub className={classes.linkIcon}/></a>
          </IconButton>
          GitHub
        </Box>

        <Box className={classes.iconCol}>
          <IconButton aria-label="LinkedIn" className={classes.linkIconGroup}>
            <a href="https://www.linkedin.com/in/ryansle/"><LinkedIn className={classes.linkIcon}/></a>
          </IconButton>
          LinkedIn
        </Box>

        {/* TODO: Upload updated resume to my website and route this button to it */}
        <Box className={classes.iconCol}>
          <IconButton aria-label="LinkedIn" className={classes.linkIconGroup}>
            <a href="https://www.linkedin.com/in/ryansle/"><Description className={classes.linkIcon}/></a>
          </IconButton>
          Résumé
        </Box>

      </Box>
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
          <Typography variant="h6" noWrap>
            Responsive Sidebar
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="navigation menu">
        <Hidden smUp implementation="css">
          <Drawer
            className={classes.fullSidebar}
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.fullSidebarLinks,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {sidebar}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.fullSidebar}
            classes={{
              paper: classes.fullSidebarLinks,
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
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}

export default Sidebar;