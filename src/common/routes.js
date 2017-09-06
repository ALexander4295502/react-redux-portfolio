import React from "react";
import { HashRouter, Route, Switch } from 'react-router-dom';

import HomePage from "./containers/HomePage";
import App from './containers/App';

import Resume from "./components/Resume";
import error404 from './components/404';
import About from "./components/About";
import ProjectsPage from "./containers/ProjectsPage";

export default (
      <App>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/resume" component={Resume} />
          <Route path="/Project" component={ProjectsPage} />
          <Route path="/about" component={About} />
          <Route path="*" component={error404}/>
        </Switch>
      </App>
)