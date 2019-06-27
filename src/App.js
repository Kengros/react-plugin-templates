import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
import SiteContainer from './components/site/site.component';
// import logo from './logo.svg';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/chuck/countertops/project">Chuck</Link>
            </li>
            <li>
              <Link to="/mandi/countertops/project">Mandi</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/:site/:productLine/:page/" component={SuspendedComponent()} />
          <Redirect from="*" to="/chuck/countertops/project/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

function SuspendedComponent() {
  return props => (
    <Suspense fallback={<div>Loading...</div>}>
      <SiteContainer {...props} />
    </Suspense>
  );
}

export default App;
