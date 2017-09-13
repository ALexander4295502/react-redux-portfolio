import { EMAIL_SEND_REQUEST, EMAIL_SEND_SUCCESS, EMAIL_SEND_FAILURE } from '../actions/contact';

const initState = {
  isSending: false,
  error: {},
  results: ""
};

export function contactEmail(state = initState, action) {
  switch (action.type) {
    case EMAIL_SEND_REQUEST:
      return Object.assign({}, state, {
        isSending: true,
      });
    case EMAIL_SEND_SUCCESS:
      let data = action.req.data;
      return Object.assign({}, state, {
        isSending: false,
        results: data,
        error: {}
      });
    case EMAIL_SEND_FAILURE:
      return Object.assign({}, state, {
        isSending: false,
        results: "",
        error: {
          status: action.error.status,
          statusText: "Sorry, we cannot send your message this time, please try again."
        }
      });
    default:
      return state;
  }
}