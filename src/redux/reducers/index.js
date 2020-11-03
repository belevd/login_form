import { combineReducers } from "redux";
import { login } from './login';
import { setCurrentPageOfUsersList } from './usersList'

export default combineReducers({ login, setCurrentPageOfUsersList });