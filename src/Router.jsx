import React from "react";
import { Switch, Route } from "react-router-dom";
// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const Router = () => {
  return (
    <Switch>
      <Route
        path="/"
        exact
        component={Home}
      />
      <Route
        path="/about-me"
        exact
        component={About}
      />
      <Route
        path="/experience"
        exact
        component={Experience}
      />
      <Route
        path="/skills"
        exact
        component={Skills}
      />
      <Route
        path="/projects"
        exact
        component={Projects}
      />
      <Route
        path="/contact-me"
        exact
        component={Contact}
      />
    </Switch>
  );
}

export default Router;