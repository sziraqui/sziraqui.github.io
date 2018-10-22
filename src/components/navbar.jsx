import React, { Component } from "react";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <header>
        <h1 id="full-name">Sarfaraz Iraqui</h1>
        <span className="tagline">
          Passionate to build awesome software products and automate everything
        </span>
      </header>
    );
  }
}

export default Navbar;
