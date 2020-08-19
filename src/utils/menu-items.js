import React from "react";
import {
  Home,
  Person,
  Work,
  Code,
  Computer, 
  Email,
  Description
} from "@material-ui/icons";

export const MenuItems = [
  {
    path: "/",
    title: "Home",
    icon: <Home className="menu-icon" />,
  },
  {
    path: "/about",
    title: "About Me",
    icon: <Person className="menu-icon" />,
  },
  {
    path: "/experience",
    title: "Work Experience",
    icon: <Work className="menu-icon" />,
  },
  {
    path: "/skills",
    title: "My Skillsets",
    icon: <Code className="menu-icon" />,
  },
  {
    path: "/projects",
    title: "Projects I've Worked On",
    icon: <Computer className="menu-icon" />,
  },
  {
    path: "/contact",
    title: "Contact Me!",
    icon: <Email className="menu-icon" />,
  },
  {
    path: "/resume",
    title: "My Resume",
    icon: <Description className="menu-icon" />,
  },
];
