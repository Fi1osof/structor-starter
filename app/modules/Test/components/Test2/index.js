/**
*
* Test2
*
*/

import React, { Component } from "react";

import { Link } from 'react-router'

import PropTypes from "prop-types";

const style = {
  display: "flex",
  justifyContent: "center",
  height: "100px",
  alignItems: "center",
  backgroundColor: "#fcecd7",
  borderRadius: "4px"
};

class Test2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    const { exampleValue } = this.state; // eslint-disable-line
    const { exampleProp } = this.props; // eslint-disable-line
    return (
      <div>
 
        <div style={style}><span>Test 2</span></div>

      </div>
    );
  }
}

Test2.propTypes = {
  exampleProp: PropTypes.string
};
Test2.defaultProps = {
  exampleProp: ""
};

export default Test2;
