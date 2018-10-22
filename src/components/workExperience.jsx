import React, { Component } from "react";

class WorkExperience extends Component {
  constructor() {
    super();
    this.setOptionalContributions = setOptionalContributions.bind(this);
  }

  render() {
    return (
      <div>
        <h3 className="subtitle1">{this.props.post}</h3>
        <span className="work-period">
          {this.props.from} - {this.props.to}
        </span>
        <h4 className="subtitle2">{this.props.name}</h4>
        {this.setOptionalContributions()}
      </div>
    );
  }
}

function setOptionalContributions() {
  if (this.props.contributions.length > 0)
    return (
      <React.Fragment>
        <h5 class="optional-title">Major contributions</h5>
        <ul>
          {this.props.contributions.map(work => (
            <li className="short-desc">{work}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  else return null;
}

export default WorkExperience;
