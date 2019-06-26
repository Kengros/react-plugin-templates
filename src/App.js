import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import PipComponent from './templates/pip/pip.component';
import ConfiguratorComponent from './components/configurator/configurator.component';
import TemplateLoaderComponent from './components/template-loader/template-loader.component'

import SiteContainer from './components/site/site.component';

// import ZoneComponent from './components/zone/zone.component';
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/">Default</Link>
            </li>
            <li>
              <Link to="/pip/countertops">Countertops</Link>
            </li>
            <li>
              <Link to="/pip/windows">Windows</Link>
            </li>
          </ul>
        </nav>
        <Switch>          
          <Route path="/pip/:productLine" component={WaitingComponent(SiteContainer(PipComponent))} />
          <Route path="/pip/" component={WaitingComponent(SiteContainer(PipComponent))} />
          <Route exact path="/configurator/" component={WaitingComponent(SiteContainer(ConfiguratorComponent))} />
          <Route path="/:site/estimatebuilder/" component={WaitingComponent(SiteContainer(TemplateLoaderComponent))} />
          <Route path="/estimatebuilder/" component={WaitingComponent(SiteContainer(TemplateLoaderComponent))} />
          <Redirect from="*" to="/estimatebuilder/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function WaitingComponent(Component) {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <Component {...props} />
    </Suspense>
  );
}

export default App;
