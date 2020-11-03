import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserList } from "./UserList/UserList";
import { SingleUser } from "./UserList/SingleUser";
import { LogIn } from "./Login/LogIn";
import { Registration } from "./Login/Registration";

export const Main = () => {
  let token = useSelector((state) => state.login.token);

  if (!token) {
    return (
      <Router>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/login" component={LogIn} />
          <Route path="/registration" component={Registration} />
          <Route component={LogIn} />
        </Switch>
      </Router>
    );
  } else {
    return (
      <Router>
        <Switch>
          <Redirect exact from='/' to="/users" />
          <Route exact path="/users" component={UserList} />
          <Route path="/users/:id" component={SingleUser} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </Router>
    );
  }
};
