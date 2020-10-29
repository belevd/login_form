import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import LogIn from "./LogIn";
import Registration from "./Registration";

export default function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!useSelector((state) => state.login.token) ? (
            <Redirect to="/login" component={LogIn} />
          ) : (
            <Home />
          )}
        </Route>
        <Route path="/login">
          {useSelector((state) => state.login.token) ? (
            <Redirect to="/" component={Home} />
          ) : (
            <LogIn />
          )}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
}
