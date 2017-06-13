import React from "react";
import Page6 from "./Page6";
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
  indexRoute: { component: Page6 },
  childRoutes: [
    {
      path: "/home",
      name: "/home",
      component: Page6
    },
    {
      path: "/templates/main-layout",
      name: "/templates/main-layout",
      component: Page203
    },
    {
      path: "*",
      name: "notfound",
      component: Page6
    }
  ]
};
