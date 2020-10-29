import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { setLogged } from "../redux/actions";
import { useHistory } from "react-router-dom";
import UserForm from "./UserForm";

export default function LogIn() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  function handleLogin(event) {
    setLogin(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  const dispatch = useDispatch();
  const instance = useSelector((state) => state.consts.instance);

  function handleSubmit(event) {
    event.preventDefault();
    instance({
      method: "post",
      url: "api/login",
      data: {
        email: login,
        password: password,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(setLogged(response.data.token));
          handleClick();
        }
      })
      .catch((error) => {
        setError(error.toString());
      });
  }

  return (
    <>
      <Container>
        <h1 className="mt-5 text-center">Пожалуйста, войдите на сайт</h1>
        <Form onSubmit={handleSubmit}>
          <UserForm handleLogin={handleLogin} handlePassword={handlePassword} />
          <div className="d-flex justify-content-center">
            <Button variant="outline-info" type="submit">
              Войти
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-success"
              className="mt-3"
              href="/registration"
            >
              Зарегистрироваться
            </Button>
          </div>
        </Form>
        {error && (
          <p className="text-center mt-4">Произошла ошибка : {error}</p>
        )}
      </Container>
    </>
  );
}
