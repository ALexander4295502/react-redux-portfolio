import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./containers/HomePage";
import App from './containers/App';

import Resume from "./components/Resume";
import NotFoundPage from './containers/404Page';
import ProjectsPage from "./containers/ProjectsPage";

export default (
      <App>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </App>
)