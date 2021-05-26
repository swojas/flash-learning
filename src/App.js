import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import AngularJS from './pages/angular.jsx';
import NodeJS from './pages/nodejs.jsx';


export default function App() {
  return (
    <Router>
      <>
        <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand " href="/home">
      <img src="logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
      <span class="px-3">Flash Learning</span>
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
          <Route path="/nodejs">
            <NodeJS />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/angularjs">
            <AngularJS />
          </Route>
        </Switch>
      </>
    </Router>
  );
}





function Home() {
  return <div className= "container-lg">
    <span className="px-1"></span>
       <md-card>
            <md-card-title>
                <md-card-title-text>
                <span className = "md-headline text-center"><h1>Want to Learn</h1><small>Click on one of the tutorials above</small></span>
                </md-card-title-text>
             </md-card-title>
        </md-card>
    </div>;
}
