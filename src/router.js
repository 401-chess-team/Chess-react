import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './components/about/about-us.js';
import App from './App.js';

export default function() {
  return (
    <Router>
      <div>
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Resume Game</Link>
          </li>

          <li>
            <Link to="/about">About The Devs</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/about">
            <About />
            </Route>
          <Route path="/Chess-react">
            <App />
          </Route>
          <Route exact path="https://401-chess-team.github.io/Chess-react/">
            <App />
          </Route>'
          <Route exact path="/Chess-react/">
            <App />
          </Route>
          <Route exact path="https://401-chess-team.github.io/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
