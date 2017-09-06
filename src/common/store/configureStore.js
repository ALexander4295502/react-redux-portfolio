import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from '../api/promiseMiddleware';
import rootReducer from '../reducers';
import {composeWithDevTools} from 'redux-devtools-extension';


const middlewareBuilder = () => {
  let universalMiddleware = [thunk, promiseMiddleware];
  let middleware = applyMiddleware(...universalMiddleware);
  return middleware;
};

export default createStore(
  rootReducer,
  composeWithDevTools(
    middlewareBuilder()
  )
);