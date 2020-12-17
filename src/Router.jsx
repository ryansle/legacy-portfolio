import React from "react";
import { Switch, Route } from "react-router-dom";
// containers
import Home from "./containers/Home";
import About from "./containers/About";
import Experience from "./containers/Experience";
import Skills from "./containers/Skills";
import Projects from "./containers/Projects";
import Contact from "./containers/Contact";
import Resume from "./containers/Resume";
import NotFound from "./containers/NotFound";
// Subcontainers
import HoffmanStrategy from "./containers/experience/HoffmanStrategy";
import Nelnet from "./containers/experience/Nelnet";
import Raven from "./containers/experience/Raven";
import UNL from "./containers/experience/UNL";
import ReLogic from "./containers/experience/ReLogic";

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
      {/* Subcontainers */}
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