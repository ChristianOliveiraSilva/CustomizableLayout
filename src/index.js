import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import App from "./Pages/App/index.js";

import "./style.css"

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route exact path="/">
                <App />
            </Route>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
