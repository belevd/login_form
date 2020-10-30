import { post } from "api";
import { setLogged } from "../../redux/actions";

export const SendData = (url, login, password, dispatch) => {
  const userData = {
    email: login,
    password: password,
  };
  const token = post(url, userData).then(data => data.token);
  dispatch(setLogged(token));
}
