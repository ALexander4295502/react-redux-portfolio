import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';
import configureStore from './common/store/configureStore';
import routes from './common/routes';
import './styles/index.css';
import './index.css';

const store = configureStore;
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <HashRouter children={routes}/>
  </Provider>,
  rootElement
);

registerServiceWorker();
