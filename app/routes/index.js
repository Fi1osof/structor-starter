import React from "react";

import { App as TemplatesApp } from "modules/Templates";

import HomePage from "./HomePage";
import Page203 from "./Page203";
import Page5 from "./Page5";
import Page8 from "./Page8";

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
      path: "/templates/main-layout",
      name: "/templates/main-layout",
      component: Page203
    },
    {
      path: "/templates/auth",
      name: "/templates/auth",
      component: Page5
    },
    {
      path: "/templates/menu",
      name: "/templates/menu",
      component: Page8
    },
    {
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
