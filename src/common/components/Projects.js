import React, { Component} from 'react';
import Banner from './layout/Banner';
import Loader from './layout/Loader';
import Repos from './about/Repos';
import PropTypes from 'prop-types';

class Projects extends Component {

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }


  render () {
    const { results, isFetching, error } = this.props;
    return (
      <div>

        <Banner />

        <div className="about">

          <h3>About Site</h3>

          <p>This site is a single page web app built with React and Redux. It is Isomorphic (all the code renders on the server and well as the browser) which has the advantage of initially rendering quicker and being indexed by search engines.</p>
          <p>I built the site as a simple example of what can be built with React and Redux. You can get the code base forfrom <a href="https://github.com/caljrimmer/portfolio-redux-app">my github repo</a>.</p>
          <p>Feel free to use this sites code for whatever you want. I hope it inspires you to build something awesome or learn something new</p>

        </div>

        <div className="repos">
          <h3>Some of <a href="https://github.com/caljrimmer?tab=repositories" target="_blank">My GitHub</a> Repos</h3>
          {isFetching && results.length === 0 &&
          <Loader />
          }
          {!isFetching && error && results.length === 0 &&
          <h3 className="post-error">There has been an Error</h3>
          }
          {!isFetching && !error && results.length === 0 &&
          <h3>Empty</h3>
          }
          {results.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Repos results={results} />
          </div>
          }
        </div>

      </div>
    );
  }
}

Projects.propTypes = {
  results: PropTypes.array.isRequired,
  error: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired
};

export default Projects;