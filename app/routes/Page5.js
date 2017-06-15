/**
 *
 * Page5
 *
 */

import React, { Component } from "react";

import { Auth } from "modules/Templates";

class Page5 extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>

        <Auth
          open={true}
          step={1}
          showRegForm={true}
          allowPasswordRecovery={true}
        />

      </div>
    ); // eslint-disable-line
  }
}

export default Page5;
