import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Sections
import Home from "./sections/Home"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          component={Home}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;