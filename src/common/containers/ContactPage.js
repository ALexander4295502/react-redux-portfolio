import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Contact from '../components/Contact';
import * as ContactActions from '../actions/contact';

Contact.need = [
  ContactActions.sendEmail
];

function mapStateToProps(state) {
  const {
    isSending,
    error,
    results
  } = state.contact || {
    isSending: true,
    error: false,
    results: ""
  };

  return {
    isSending,
    error,
    results
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ContactActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);