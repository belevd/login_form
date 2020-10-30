import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { UserForm } from "./UserForm";
import { SendData } from "./actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export const LogIn = () => {
  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleLogin(event) {
    setLogin(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  let history = useHistory();
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    const url = "api/login";
    SendData(url, login, password, dispatch);
    history.push("/");
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
      </Container>
    </>
  );
};
