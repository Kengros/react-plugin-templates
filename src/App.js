import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import PipComponent from './components/pip/pip.component';
import ConfiguratorComponent from './components/configurator/configurator.component';
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Switch>          
          <Route path="/pip/:productLine" component={WaitingComponent(PipComponent)} />
          <Route path="/pip/" component={WaitingComponent(PipComponent)} />
          <Route exact path="/configurator/" component={ConfiguratorComponent} />
          <Route exact path="/" component={ConfiguratorComponent} />
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
