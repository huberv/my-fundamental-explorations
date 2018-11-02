import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { routes } from "./router/routes";

import "./App.css";

class App extends Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Switch>
          {Object.keys(routes).map((key, index) => {
            const route = routes[key];
            return (
              <Route
                key={key}
                path={route.location.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
