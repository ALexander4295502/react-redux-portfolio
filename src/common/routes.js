import React from "react";
import { Route, Switch, HashRouter } from 'react-router-dom';

import HomePage from "./containers/HomePage";
import App from './containers/App';

import Resume from "./components/Resume";
import NotFoundPage from './containers/404Page';
import ProjectsPage from "./containers/ProjectsPage";
import ContactPage from "./containers/ContactPage";

export default (
  <HashRouter>
      <App>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/home" component={HomePage} />
            <Route path="/resume" component={Resume} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="*" component={NotFoundPage} />
          </Switch>
      </App>
  </HashRouter>
)