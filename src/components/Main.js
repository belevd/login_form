import React from "react";
import { useSelector, useDispatch } from "react-redux";
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
  console.log(useSelector((state) => state));
  const dispatch = useDispatch();
  <button onClick={() => dispatch({ type: "SET_LOGGED" })}>Залогиниться</button>
  console.log(useSelector((state) => state.login));
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
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
}
