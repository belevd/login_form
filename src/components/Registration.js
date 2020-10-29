import React from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { setLogged } from "../redux/actions";
import { useHistory } from "react-router-dom";

import axios from "axios";

export default function Registration() {
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

  function handleSubmit(event) {
    event.preventDefault();
    const userData = {
      email: login,
      password: password,
    };
    const instance = axios.create({
      baseURL: "https://reqres.in/",
      headers: { Accept: "application/json" },
    });
    instance({
      method: "post",
      url: "api/register",
      data: userData,
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
    <div>
      <Container>
        <h1 className="mt-5 text-center">Форма регистрации</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="logIn" className="mt-5">
            <Col sm="2"></Col>
            <Form.Label column sm="2">
              Введите логин (email)
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="email"
                placeholder="Введите email"
                onChange={handleLogin}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="password">
            <Col sm="2"></Col>
            <Form.Label column sm="2">
              Введите пароль
            </Form.Label>
            <Col sm="6">
              <Form.Control
                type="password"
                placeholder="Введите пароль"
                onChange={handlePassword}
              />
            </Col>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="outline-info" type="submit">
              Зарегистрироваться
            </Button>
          </div>
        </Form>
        {error && (
          <p className="text-center mt-4">Произошла ошибка : {error}</p>
        )}
      </Container>
    </div>
  );
}
