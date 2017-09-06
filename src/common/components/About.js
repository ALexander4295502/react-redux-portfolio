import React, { Component } from 'react';
import Banner from './layout/Banner';

class About extends Component {

  render () {
    // const { results, isFetching, lastUpdated, error } = this.props;
    return (
      <div>

        <Banner />

        <div className="about">

          <h3>About Me</h3>
        </div>

      </div>
    );
  }
}

export default About;