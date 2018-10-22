import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.setOptionalDescription = setOptionalDescription.bind(this);
  }
  render() {
    return (
      <section className="section-box">
        <h2 className="section-title">{this.props.title}</h2>
        {this.setOptionalDescription()}
        {this.props.children}
      </section>
    );
  }
}

function setOptionalDescription() {
  if (this.props.desc) return <p>{this.props.desc}</p>;
  else return null;
}
export default Card;
