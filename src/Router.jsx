import React from "react";
import { Switch, Route } from "react-router-dom";
// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
// Subsections
import HoffmanStrategy from './sections/HoffmanStrategy';
import Nelnet from './sections/Nelnet';
import Raven from './sections/Raven';
import UNL from './sections/UNL';
import ReLogic from './sections/ReLogic';

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
      {/* Subsections */}
      <Route
        path="/experience/hoffman-strategy-group"
        exact
        component={HoffmanStrategy}
      />
      <Route
        path="/experience/nelnet"
        exact
        component={Nelnet}
      />
      <Route
        path="/experience/raven-industries"
        exact
        component={Raven}
      />
      <Route
        path="/experience/unl"
        exact
        component={UNL}
      />
      <Route
        path="/experience/relogic-games"
        exact
        component={ReLogic}
      />
    </Switch>
  );
}

export default Router;