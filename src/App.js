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
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
              <a className="navbar-brand" href="/home">
                <img src="logo192.png" alt="" width="30" height="30"></img>
                <span className="px-2 text-white">Flash Learning</span>
              </a>
            </div>
            <div className="container">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <form className="d-flex">
                    <input type="text" style={{width: '500px'}} placeholder="Search for more tutorials" />
                    <span className="px-2"></span>
                    <button className="btn btn-outline-success">Search</button>
                  </form>
                </div>
              </div>
            </div>

            <a href="#">
              <img className="rounded-circle" alt="100x100" src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true" width="35" height="35"></img></a>
            <span className="px-2"></span>
          </nav>

          </div>

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






