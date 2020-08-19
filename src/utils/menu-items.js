import React from "react";
import {
  Home,
  Person,
  Work,
  Code,
  Computer, 
  Email,
} from "@material-ui/icons";

export const MenuItems = [
  {
    path: "/",
    title: "Home",
    headline: "Home",
    icon: <Home className="menu-icon" />,
  },
  {
    path: "/about",
    title: "About",
    headline: "About Me",
    icon: <Person className="menu-icon" />,
  },
  {
    path: "/experience",
    title: "Experience",
    headline: "Work Experience",
    icon: <Work className="menu-icon" />,
  },
  {
    path: "/skills",
    title: "Skills",
    headline: "My Skillsets",
    icon: <Code className="menu-icon" />,
  },
  {
    path: "/projects",
    title: "Projects",
    headline: "Projects I've Worked On",
    icon: <Computer className="menu-icon" />,
  },
  {
    path: "/contact",
    title: "Contact",
    headline: "Contact Me!",
    icon: <Email className="menu-icon" />,
  },
];
