import React from "react";

import { App as TemplatesApp } from "modules/Templates";

import Page10 from "./Page10";
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
  indexRoute: { component: Page10 },
  childRoutes: [
    {
      path: "/",
      name: "/",
      component: Page10
    },
    {
      path: "*",
      name: "notfound",
      component: Page10
    }
  ]
};
