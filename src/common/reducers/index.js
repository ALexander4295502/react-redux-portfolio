import {combineReducers} from 'redux';
import {routerStateReducer} from 'redux-router';

import layout from './layout';
import { reposByUser } from './about';
import { contactEmail } from './contact';

const rootReducer = combineReducers({
  layout: layout,
  repos: reposByUser,
  contact: contactEmail,
  router: routerStateReducer
});

export default rootReducer;