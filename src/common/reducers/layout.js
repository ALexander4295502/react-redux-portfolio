import { TOGGLE_SIDEBAR } from '../actions/layout';

const initState = {
  sidebarOpen: false
};

export default function layout(state = initState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        sidebarOpen: action.value
      };
    default:
      return state;
  }
}