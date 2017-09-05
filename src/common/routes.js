import { Route } from "react-router";
import React from "react";

import App from "./containers/App";

import AboutPage from "./containers/AboutPage";
import HomePage from "./containers/HomePage";

import PortfolioPage from "./components/Portfolio";
import ServicesPage from "./components/Services";
import error404 from './components/404';

export default (
  <Route name="app" path="/" compo>
    <Route path="home" component={HomePage} />
    <Route path="portfolio" component={PortfolioPage} />
    <Route path="services" component={ServicesPage} />
    <Route path="about" component={AboutPage} />
    <Route path="*" component={error404}/>
  </Route>
)