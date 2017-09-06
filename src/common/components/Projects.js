import React, { Component} from 'react';
import Loader from './layout/Loader';
import Repos from './about/Repos';
import PropTypes from 'prop-types';

class Projects extends Component {

  componentDidMount() {
    this.props.fetchReposIfNeeded();
  }

  openNewPage(e){
    e.preventDefault();
    window.open(e.target.href,'_blank')
  }


  render () {
    const { results, isFetching, error } = this.props;
    return (
      <div>

        <div className="about">

          <h3>My forum</h3>

          <p>Now I am working on a forum built by myself. And I use <strong>Angular</strong> to build front-end and use <strong>Node.js</strong> and <strong>MongoDB</strong> as back-end.</p>
          <p>Also there are a lot of feature in it, one of my favorite part is a chatbot by using a <strong>Django</strong> API server to analyse users' input and give the 'human like' feedback.</p>
          <p>You can access my forum by <a href="https://github.com/caljrimmer/portfolio-redux-app">my forum</a>. </p>
          <p>Feel free to add posts and comments if you want to say something.</p>

        </div>

        <div className="repos">
          <h3>Some of <a href="https://github.com/caljrimmer?tab=repositories" onClick={this.openNewPage}>My GitHub</a> Repos</h3>
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