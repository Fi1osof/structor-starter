import React from "react";

import { App as TemplatesApp } from "modules/Templates";

import Page49 from "./Page49";
import Page203 from "./Page203";
import Page5 from "./Page5";
import Page8 from "./Page8";
import Page9 from "./Page9";
import Page18 from "./Page18";
import Page24 from "./Page24";
import Page30 from "./Page30";
import Page37 from "./Page37";
import Page43 from "./Page43";

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
  indexRoute: { component: Page49 },
  childRoutes: [
    {
      path: "/",
      name: "/",
      component: Page49
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
      path: "/recording-sheet",
      name: "/recording-sheet",
      component: Page9
    },
    {
      path: "/reports",
      name: "/reports",
      component: Page18
    },
    {
      path: "/billing",
      name: "/billing",
      component: Page24
    },
    {
      path: "/canceled",
      name: "/canceled",
      component: Page30
    },
    {
      path: "/info",
      name: "/info",
      component: Page37
    },
    {
      path: "/addresses",
      name: "/addresses",
      component: Page43
    },
    {
      path: "*",
      name: "notfound",
      component: Page49
    }
  ]
};
