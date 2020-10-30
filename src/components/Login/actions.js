import { post } from "api";
import { setLogged } from "../../redux/actions";

export const SendData = (url, data) => {
  return (dispatch) =>
    post(url, data).then((data) => dispatch(setLogged(data.token)));
};
