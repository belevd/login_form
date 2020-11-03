import { get } from "api";
import { setCurrentPageOfUsersList } from "../../redux/actions";

const url = "/api/users";

export const loadUsers = (page) => {
  const params = {
    params: {
      page: page,
    },
  };
  return get(url, params);
};


export const loadUser = (id) => {
  const url = "/api/users/" + id;
  return get(url);
};

export const saveCurrent = (page) => {
  return (dispatch) => dispatch(setCurrentPageOfUsersList(page));
};
