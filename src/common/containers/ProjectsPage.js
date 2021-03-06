import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as AboutActions from '../actions/about';
import Projects from "../components/Projects";

Projects.need = [
  AboutActions.fetchRepos
];

function mapStateToProps(state) {
  const {
    isFetching,
    lastUpdated,
    error,
    results
  } = state.repos || {
    isFetching: true,
    error: false,
    results: []
  };

  return {
    isFetching,
    lastUpdated,
    error,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AboutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Projects);