import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import App from "./Pages/App/";
import Admin from "./Pages/Admin/";
import Course from "./Pages/Course/";
import PageNotFound from "./Pages/PageNotFound/";

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
            <Route exact path="/course">
                <Course />
            </Route>
            <Route path="/course/:id">
                <Course />
            </Route>
            <Route path="/">
                <PageNotFound />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
