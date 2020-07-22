import React from "react";
import { Switch, Route } from "react-router-dom";
// Sections
import Home from "./sections/Home";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";
import Thanks from "./sections/Thanks";
import NotFound from "./sections/NotFound";
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
        path="/about"
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
        path="/contact"
        exact
        component={Contact}
      />
      <Route
        path="/resume"
        exact
        component={Resume}
      />
      <Route
        path="/thanks"
        exact
        component={Thanks}
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
      {/* Catch all unmatched routes */}
      <Route component={NotFound}/>
    </Switch>
  );
}

export default Router;