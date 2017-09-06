import React, {Component} from 'react';

class ResumeAbout extends Component {
  render() {
    return (
      <section className="resume-about">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-user"></i> About</h2>
        <div>{this.props.aboutData}</div>
      </section>
    )
  }
}

export default ResumeAbout;