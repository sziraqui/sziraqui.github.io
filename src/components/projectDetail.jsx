import React, { Component } from "react";

class ProjectDetail extends Component {
  constructor() {
    super();
    this.setOptionalHighlights = setOptionalHighlights.bind(this);
  }

  render() {
    return (
      <div>
        <h3 className="subtitle1">{this.props.title}</h3>
        <h4 className="subtitle2">{this.props.subtitle}</h4>
        {this.setOptionalHighlights()}
      </div>
    );
  }
}

function setOptionalHighlights() {
  if (this.props.highlights.length > 0)
    return (
      <React.Fragment>
        <h5 class="optional-title">Project highlights</h5>
        <ul>
          {this.props.highlights.map(work => (
            <li className="short-desc">{work}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  else return null;
}

export default ProjectDetail;
