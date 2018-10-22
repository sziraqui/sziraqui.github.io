import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1 id="full-name">{this.props.title}</h1>
        <span className="tagline">{this.props.subtitle}</span>
      </header>
    );
  }
}

export default Navbar;
