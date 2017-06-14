/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

import { MainLayout, Auth } from "modules/Templates";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <MainLayout><Auth /></MainLayout>

      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
