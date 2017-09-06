import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.eventCloseSidebar = this.eventCloseSidebar.bind(this);
  }

  eventCloseSidebar (e) {
    this.props.toggleSidebar(!this.props.layout.sidebarOpen);
  }

  render() {

    return (

      <div className="sidebar">

        <div className="sidebar-item sidebar-footer">
          <p>I built this site with Redux and React. You can get the <a href="https://github.com/ALexander4295502/react-redux-portfolio" target="_blank">source code here</a></p>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/home" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">Home</NavLink>
          <NavLink to="/resume" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Resume</NavLink>
          <NavLink to="/projects" className="sidebar-nav-item" onClick={this.eventCloseSidebar} activeClassName="active">My Projects</NavLink>
        </nav>

        <div className="sidebar-item sidebar-footer">

          <p>
            Visit <a href="https://github.com/ALexander4295502" target="_blank">My GitHub Repo</a><br/>
          </p>

        </div>

      </div>
    );
  }

}

export default Sidebar;