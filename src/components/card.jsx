import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    return (
      <section className="section-box">
        <h2 className="section-title">About me</h2>
        <p>
          I am passionate about every technology, from basic C to Android to
          Machine Learning. I constantly learn latest technologies to stay
          closer to the edge of innovation and apply best industry practices in
          software development.
        </p>
      </section>
    );
  }
}

export default Card;
