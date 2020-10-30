import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Home } from "./Home";
import { LogIn } from "./Login/LogIn";
import { Registration } from "./Login/Registration";

export const Main = () => {
  let isLogged = useSelector((state) => state.login.token);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!isLogged ? <Redirect to="/login" component={LogIn} /> : <Home />}
        </Route>
        <Route path="/login">
          {isLogged ? <Redirect to="/" component={Home} /> : <LogIn />}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};