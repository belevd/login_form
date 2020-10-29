import { combineReducers } from "redux";
import login from './login';
import consts from './consts'

export default combineReducers({ login, consts });