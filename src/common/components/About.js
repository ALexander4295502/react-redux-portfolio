import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Banner from './layout/Banner';

class About extends Component {

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

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

About.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default About;