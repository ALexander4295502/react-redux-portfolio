import React from "react";
import { Route, Switch } from 'react-router-dom';

import HomePage from "./containers/HomePage";
import App from './containers/App';

import Resume from "./components/Resume";
import error404 from './components/404';
import ProjectsPage from "./containers/ProjectsPage";

export default (
      <App>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="*" component={error404}/>
        </Switch>
      </App>
)