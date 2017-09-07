import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Error404 from '../components/404';
import * as LayoutActions from '../actions/layout';

function mapStateToProps(state) {
  return {
    layout: state.layout
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LayoutActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Error404);