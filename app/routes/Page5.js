/**
 *
 * Page5
 *
 */

import React, { Component } from "react";

import { Auth } from "modules/Templates";
import { Button } from "modules/MUI";

class Page5 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Auth
        open={true}
        step={1}
        showRegForm={true}
        allowPasswordRecovery={true}
      >
        <Button raised={true}><span>Button</span></Button>
      </Auth>
    ); // eslint-disable-line
  }
}

export default Page5;
