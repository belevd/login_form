import { SET_LOGGED } from "../actionTypes";

const initialState = {
  token: '',
};

export default function login (state = initialState, action) {
  switch (action.type) {
    case SET_LOGGED: {
      const token = action.payload;
      return {
        token: token,
      };
    }
    default:
      return state;
  }
}
