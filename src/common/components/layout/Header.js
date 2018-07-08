import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  constructor(props){
    super(props);
    this.eventCloseSidebar = this.eventCloseSidebar.bind(this);
  }

  eventCloseSidebar (e) {
    this.props.toggleSidebar(false);
  }

  render() {
    return (
      <div className="masthead">
        <div className="container">
          <h3 className="masthead-title">
            <NavLink to='/home' onClick={this.eventCloseSidebar} style={{ textDecoration: 'none' }}>Zheng Yuan</NavLink>
          </h3>
        </div>
      </div>
    )
  }
}

export default Header;