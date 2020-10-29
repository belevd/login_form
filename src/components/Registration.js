import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Container, Form } from "react-bootstrap";
import { setLogged } from "../redux/actions";
import { useHistory } from "react-router-dom";
import UserForm from "./UserForm";

export default function Registration() {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const dispatch = useDispatch();
  const instance = useSelector((state) => state.consts.instance);

  function handleLogin(event) {
    setLogin(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    instance({
      method: "post",
      url: "api/register",
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
    <div>
      <Container>
        <h1 className="mt-5 text-center">Форма регистрации</h1>
        <Form onSubmit={handleSubmit}>
          <UserForm handleLogin={handleLogin} handlePassword={handlePassword} />
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
