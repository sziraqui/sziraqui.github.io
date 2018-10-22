import React, { Component } from "react";

class Tag extends Component {
  state = {};
  render() {
    return <li className="skill-tag">{this.props.value}</li>;
  }
}

export default Tag;
