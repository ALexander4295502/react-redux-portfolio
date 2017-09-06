import React, { Component } from 'react';
import ResumeAbout from './resume/resume-about';
import ResumeEducation from './resume/resume-education';
import ResumeWork from './resume/resume-work';
import ResumeSkills from './resume/resume-skills';
import ResumeProfile from './resume/resume-profile';
import '../../styles/resume.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
const json = require('./resume/resume.json');

class Resume extends Component {

  render() {

    const profileData = json.basics;
    const aboutData = profileData.summary;
    const workData = json.work;
    const skillData = json.skills;
    const educationData = json.education;

    return (
      <div className="container">
        <div className="row">
          <aside className="col-md-4">
            <div className="inner">
              <ResumeProfile profileData={profileData}/>
            </div>
          </aside>
          <main className="col-md-8">
            <div className="inner">
              <ResumeAbout aboutData={aboutData}/>
              <ResumeEducation educationData={educationData}/>
              <ResumeWork workData={workData}/>
              <ResumeSkills skillsData={skillData}/>
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default Resume;