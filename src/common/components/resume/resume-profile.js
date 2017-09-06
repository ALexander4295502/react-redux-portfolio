import React, {Component} from 'react';
import favicon from '../../../styles/favicon.ico';

class ResumeProfile extends Component {

  openNewPage(e){
    e.preventDefault();
    window.open(e.target.href,'_blank')
  }

  render() {
    const profileObj = this.props.profileData;
    return (
      <div className="resume-profile">
        <div className="profileImg"><img role="presentation" className="img-circle center-block" src={favicon} alt="profile-avatar" width="200" /></div>
        <h1 className="text-center">{profileObj.name}</h1>
        <h2 className="text-center">{profileObj.label}</h2>
        <div className="divider"></div>
        <ul className="list-unstyled contact-links text-center">
          <li><i className="fa fa-lg fa-location-arrow"></i> {profileObj.location.city}, {profileObj.location.region}, {profileObj.location.countryCode} </li>
          <li><i className="fa fa-lg fa-envelope"></i><a href={`mailto:${profileObj.email}`} onClick={this.openNewPage}> {profileObj.email} </a></li>
        </ul>
        <div className="divider"></div>
        <ul className="profileLinks list-inline text-center">
          <li><a className="fa fa-linkedin-square fa-2x" href={'https://www.linkedin.com/in/'+profileObj.profiles[0].username} onClick={this.openNewPage}> </a></li>
          <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[1].username} onClick={this.openNewPage}> </a></li>
        </ul>
        <div className="divider"></div>
      </div>
    );
  }
}

export default ResumeProfile;