/**
 *
 * Page203
 *
 */

import React, { Component } from "react";

import { MainLayout, Snackbar } from "modules/Templates";

class Page203 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <MainLayout><Snackbar open={true} message="rg ergergerg" /></MainLayout>

      </div>
    ); // eslint-disable-line
  }
}

export default Page203;
