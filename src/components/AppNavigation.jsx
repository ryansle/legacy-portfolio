import React, { useState, useEffect } from "react";

// Components
import { 
  Drawer,
  SwipeableDrawer,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Hidden,
  CssBaseline
} from "@material-ui/core";
import { 
  Home,
  Person,
  Work,
  Code,
  Computer,
  Email,
  Menu
} from "@material-ui/icons";
import { useLocation } from "react-router-dom";
import Router from "../Router";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

// Utilities
import { makeStyles, useTheme } from "@material-ui/core/styles";
import nav from "../utils/enums";
import { MenuItems } from "../utils/menu-items";

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
  icon: {
    height: 34,
    width: "auto",
    marginRight: 10,
  }
}));

const AppNavigation = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  
  const [selected, setSelected] = useState(nav.HOME);
  const [headline, setHeadline] = useState(nav.HOME);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const location = useLocation();
  // Check current path to make sure file remembers page on page reload
  useEffect(() => {
    const currentPath = location.pathname.split("/")[1];
    const currentItem = MenuItems.find(
      (item) => item.path === `/${currentPath}`
    );
    if (currentItem) {
      setSelected(currentItem.title);
      setHeadline(currentItem.headline);
    }
  }, [location]);

  const renderIcon = (title) => {
    switch(title) {
      case "Home":
        return <Home className={classes.icon} />;
      case "About":
        return <Person className={classes.icon} />;
      case "Experience":
        return <Work className={classes.icon} />;
      case "Skills":
        return <Code className={classes.icon} />;
      case "Projects":
        return <Computer className={classes.icon} />;
      case "Contact":
        return <Email className={classes.icon} />;
      default:
        return;
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
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
          {renderIcon(selected)}
          <Typography variant="h5" noWrap>{headline}</Typography>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer} aria-label="navigation menu">
        <Hidden smUp implementation="css">
          <SwipeableDrawer
            className={classes.sidebar}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onOpen={handleDrawerToggle}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.sidebarLinks,
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <Sidebar
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              selected={selected}
              setSelected={setSelected}
            />
            {/* {mobileSidebar} */}
          </SwipeableDrawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            className={classes.sidebar}
            classes={{
              paper: classes.sidebarLinks
            }}
            variant="permanent"
            open
          >
            <Sidebar
              mobileOpen={mobileOpen}
              handleDrawerToggle={handleDrawerToggle}
              selected={selected}
              setSelected={setSelected}
            />
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* Main Content of the site */}
        <Router/>
        <Footer/>
      </main>
    </div>
  );
}

export default AppNavigation;