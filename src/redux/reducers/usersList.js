import { SET_CURRENT_PAGE_OF_USERS_LIST } from "../actionTypes";

const initialState = {
  page: undefined,
};

export const setCurrentPageOfUsersList = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE_OF_USERS_LIST: {
      const currentPage = action.payload;
      return {
        page: currentPage,
      };
    }
    default:
      return state;
  }
};
