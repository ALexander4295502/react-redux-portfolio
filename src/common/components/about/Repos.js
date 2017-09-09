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
            <ul className="tags">
              <li>
                <a href={`https://github.com/ALexander4295502/${repo.name}/search?l=${repo.language}`}
                   className="tag"
                   onClick={this.openNewPage}
                >
                  {repo.language === "HTML" ? "JavaScript" : repo.language}
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    )
  }
};

Repos.propTypes = {
  results: PropTypes.array.isRequired
};