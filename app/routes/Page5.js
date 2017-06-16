/**
 *
 * Page5
 *
 */

import React, { Component } from "react";

import { Auth } from "modules/Matryoshki";

class Page5 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return <Auth open={true} />; // eslint-disable-line
  }
}

export default Page5;
