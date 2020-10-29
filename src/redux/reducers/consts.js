import axios from "axios";

const instance = axios.create({
  baseURL: "https://reqres.in/",
  headers: { Accept: "application/json" },
});

const initialState = {
  instance: instance,
};

export default function setConsts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
