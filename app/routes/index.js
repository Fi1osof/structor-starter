import React from "react";

import { App as TemplatesApp } from "modules/Templates";

import HomePage from "./HomePage";

class App extends React.Component {
  render() {
    return (
      <TemplatesApp {...this.props}>
        {this.props.children}
      </TemplatesApp>
    );
  }
}

export default {
  path: "/",
  component: App,
  indexRoute: { component: HomePage },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: HomePage
    },
    {
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
