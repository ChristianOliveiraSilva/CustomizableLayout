import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import App from "./Pages/App/";
import Admin from "./Pages/Admin/";

import "./style.css"
import "./base.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
            <Route exact path="/AdminPageConfiguration">
                <Admin />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
