import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Repos extends Component {

  openNewPage(e){
    e.preventDefault();
    window.open(e.target.href,'_blank')
  }

  render() {
    return (
      <div>
        {this.props.results.filter(repo => repo.description !== null).map((repo, i) =>
          <div className="repo-item" key={i}>
            <a href={repo.html_url} onClick={this.openNewPage}>{repo.name}</a><br/>
            <p>{repo.description}</p>
          </div>
        )}
      </div>
    )
  }
};

Repos.propTypes = {
  results: PropTypes.array.isRequired
};