import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import PipComponent from './templates/pip/pip.component';
import ConfiguratorComponent from './components/configurator/configurator.component';
import TemplateLoaderComponent from './components/template-loader/template-loader.component'

import SiteContainer from './components/site/site.component';

import ZoneComponent from './components/zone/zone.component';
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
      <nav>
          <ul>
            <li>
              {/* <Link to="/chuck/countertops/project">Chuck</Link> */}
              <a href="/chuck/countertops/project">Chuck</a>
            </li>
            <li>
              {/* <Link to="/mandi/countertops/project">Mandi</Link> */}
              <a href="/mandi/countertops/project">Mandi</a>
            </li>
          </ul>
        </nav>
        <Switch>          
          {/* <Route path="/pip/:productLine" component={SuspendedComponent(SiteContainer(PipComponent))} />
          <Route path="/pip/" component={SuspendedComponent(SiteContainer(PipComponent))} />
          <Route exact path="/configurator/" component={SuspendedComponent(SiteContainer(ConfiguratorComponent))} />
          <Route path="/:site/estimatebuilder/" component={SuspendedComponent(SiteContainer(TemplateLoaderComponent))} /> */}
          <Route path="/estimatebuilder/" component={SuspendedComponent(SiteContainer(TemplateLoaderComponent))} />
          <Route path="/:site/:productLine/:page/" component={SuspendedComponent(SiteContainer(TemplateLoaderComponent))} />
          <Redirect from="*" to="/chuck/countertops/project/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function SuspendedComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
