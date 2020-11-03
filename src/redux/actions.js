import { SET_LOGGED, SET_CURRENT_PAGE_OF_USERS_LIST } from "./actionTypes";

export const setLogged = (token) => ({
  type: SET_LOGGED,
  payload: token
});

export const setCurrentPageOfUsersList = (page) => ({
  type: SET_CURRENT_PAGE_OF_USERS_LIST,
  payload: page
})