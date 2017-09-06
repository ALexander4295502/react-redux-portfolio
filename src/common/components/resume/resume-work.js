import React, {Component} from 'react';
import ResumeWorkItem from './resume-workItem';

class ResumeWork extends Component {

  render() {
    const getWorkExperience = () => {
      const workItems = [];
      this.props.workData.forEach((val, index) => {
        workItems.push(<ResumeWorkItem key={index} workItemData={val}/>);
      });
      return workItems;
    };

    return (
      <section className="work">
        <h2 className="text-uppercase"><i className="fa fa-lg fa-building"></i> Work experience</h2>
        {getWorkExperience()}
      </section>
    );
  };
}

export default ResumeWork;