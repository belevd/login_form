import React from "react";
import { useSelector } from "react-redux";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserList } from "./UserList/UserList";
import { SingleUser } from './UserList/SingleUser'
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
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={SingleUser} />
        <Route path="/login">
          {token ? <Redirect to="/users" component={UserList} /> : <LogIn />}
        </Route>
        <Route path="/registration" component={Registration} />
      </Switch>
    </Router>
  );
};