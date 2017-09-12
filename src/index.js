import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import configureStore from './common/store/configureStore';
import routes from './common/routes';
import './styles/index.css';
import './index.css';

const store = configureStore;
const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
      {routes}
  </Provider>,
  rootElement
);

registerServiceWorker();
