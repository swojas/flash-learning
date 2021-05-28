import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import AngularJS from './pages/angular.jsx';
import NodeJS from './pages/nodejs.jsx';
import Home from './pages/home.jsx';
import NoMatch from './pages/404.jsx';

export default function App() {
  return (
    <Router>
      <>
        <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand " href="/home">
      <img src="logo.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />
      <span className="px-3">Flash Learning</span>
    </a>
  </div>
</nav>

    <div>
<ul className="nav nav-tabs justify-content-start bg-white px-2 py-1">
        
          <li className="border border-dark rounded-pill text-dark px-2 py-1">
            <Link to="/angularjs">AngularJS</Link>
          </li>
          <div className="px-1"></div>
          <li className="border border-dark rounded-pill text-dark px-2 py-1">
            <Link to="/nodejs">NodeJS</Link>
          </li>

      </ul>
</div>
        
        <Switch>
          <Route exact path="/nodejs" component={NodeJS} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/angularjs" component={AngularJS} />
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    </Router>
  );
}






