import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserList } from "./UserList/UserList";
import { LogIn } from "./Login/LogIn";
import { Registration } from "./Login/Registration";

export const Main = () => {
  let token = useSelector((state) => state.login.token);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!token ? <Redirect to="/login" component={LogIn} /> : <UserList />}
        </Route>
        <Route path="/login">
          {token ? <Redirect to="/" component={UserList} /> : <LogIn />}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};