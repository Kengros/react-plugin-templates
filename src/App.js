import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import PipComponent from './components/pip/pip.component';
import ConfiguratorComponent from './components/configurator/configurator.component';
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
          <Route path="/pip/:productLine" component={WaitingComponent(PipComponent)} />
          <Route path="/pip/" component={WaitingComponent(PipComponent)} />
          <Route exact path="/configurator/" component={ConfiguratorComponent} />
          <Redirect from="*" to="/pip/" />
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
