/**
 *
 * HomePage
 *
 */

import React, { Component } from "react";

class HomePage extends Component {
  // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100px",
            alignItems: "center",
            backgroundColor: "#fcecd7",
            borderRadius: "4px"
          }}
        >
          <span>Empty div</span>
        </div>
      </div>
    ); // eslint-disable-line
  }
}

export default HomePage;
