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
    return <MainLayout><Snackbar open={true} message="wefwefwe" /></MainLayout>; // eslint-disable-line
  }
}

export default Page203;
