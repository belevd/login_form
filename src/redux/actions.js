import { SET_LOGGED } from "./actionTypes";

export const setLogged = (token) => ({
  type: SET_LOGGED,
  payload: token
});
