import React, {Component} from 'react';
import 'devicon-2.2/devicon.min.css';

class ResumeSkills extends Component {

  render() {
    const getSkills = this.props.skillsData.map(function(skill, index) {
      return <ul key={index} className="skills-list list-inline">
        <h4>
          <i className={skill.icon} aria-hidden="true"></i> {skill.name}:
        </h4> <br/> {skill.keywords.map(function (item, _index) {
        return (<li key={_index}><i className={item}></i></li>);
      })}</ul>
    });

    return (
      <section className="skills">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-laptop"></i> Skills</h2>
        {getSkills}
      </section>
    );
  }
}

export default ResumeSkills;