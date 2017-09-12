import { EMAIL_SEND, EMAIL_SEND_SUCCESS, EMAIL_SEND_FAILURE } from '../actions/contact';

const initState = {
  isSending: false,
  error: {},
  results: []
};

export function reposByUser(state = initState, action) {
  switch (action.type) {
    case REPOS_GET_REQUEST:
      return Object.assign({}, state, {
        isSending: true,
      });
    case REPOS_GET_SUCCESS:
      let data = [];
      // if(action.req && action.req.data){
      //   data = action.req.data.sort((a,b) => {
      //     return new Date(b.pushed_at) - new Date(a.pushed_at);
      //   });
      // }
      console.log(action.req);
      return Object.assign({}, state, {
        isFetching: false,
        results: data,
        error: {}
      });
    case REPOS_GET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        results: [],
        error: {
          status: action.error.status,
          statusText: action.error.statusText
        }
      });
    default:
      return state;
  }
}