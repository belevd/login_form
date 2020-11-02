import axios from "axios";

const BASE_URL = "https://reqres.in/"

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json"
  },
});

export const get = (url, params = {}) => instance.get(url, params).then(({ data }) => data)
export const post = (url, data = {}) => instance.post(url, data).then(({ data }) => data)