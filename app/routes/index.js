import React from "react";
import HomePage from "./HomePage";
import Page203 from "./Page203";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
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
      path: "*",
      name: "notfound",
      component: HomePage
    }
  ]
};
