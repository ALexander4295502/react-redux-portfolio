import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Error404 extends Component {

  constructor(props){
    super(props);
    this.eventCloseSidebar = this.eventCloseSidebar.bind(this);
  }

  eventCloseSidebar (e) {
    this.props.toggleSidebar(false);
  }

  render() {
    return (
      <div className="page">
        <h1 className="page-title">404: Page not found</h1>
        <p className="lead">Sorry, we've misplaced that URL or it's pointing to something that does not exist.</p>
        <p><NavLink to="/home" className="sidebar-nav-item" activeClassName="active" onClick={this.eventCloseSidebar}>&gt; Head back home</NavLink></p>
      </div>
    );
  }
}

export default Error404;
