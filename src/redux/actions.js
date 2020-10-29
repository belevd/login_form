import { SET_LOGGED, SET_INSTANCE } from "./actionTypes";

export const setLogged = (token) => ({
  type: SET_LOGGED,
  payload: token
});

export const setInstance = (instance) => ({
  type: SET_INSTANCE,
  payload: instance
})