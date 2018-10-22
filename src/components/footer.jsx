import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <h4 className="subtitle1">Connect with me</h4>
        <a href="https://stackoverflow.com/users/6699069/sziraqui">
          <img
            className="flair"
            src="https://stackoverflow.com/users/flair/6699069.png?theme=clean"
            alt="StackOverflow user flair"
            title="Profile for sziraqui at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
          />
        </a>
        <a href="httpS://github.com/sziraqui">
          <img
            className="social-logo"
            src="media/github-sign.png"
            alt="GitHub"
          />
        </a>
        <a href="https://linkedin.com/in/sziraqui">
          <img
            className="social-logo"
            src="media/linkedin.png"
            alt="Linkedin"
          />
        </a>
        <h5 id="copyright">&copy; 2018 Sarfaraz Iraqui</h5>
      </footer>
    );
  }
}

export default Footer;
