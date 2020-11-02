import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { SendData } from "./actions";
import { useHistory } from "react-router-dom";
import { store } from "../../redux/store";

export const UserForm = ({ buttonText, url }) => {
  const { register, handleSubmit, formState, errors } = useForm({
    mode: "onChange",
  });
  let history = useHistory();
  const onSubmit = (data) => {
    store.dispatch(SendData(url, data));
    history.push("/");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group as={Row} controlId="logIn" className="mt-5">
          <Col sm="2"></Col>
          <Form.Label column sm="2">
            Введите логин (email)
          </Form.Label>
          <Col sm="6">
            <Form.Control
              placeholder="Введите email"
              name="email"
              ref={register({ required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })}
              isInvalid={errors.email}
            />
            <Form.Control.Feedback type="invalid">
              Введите корректный email.
            </Form.Control.Feedback>
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
              name="password"
              ref={register({ required: true, minLength: 6 })}
              isInvalid={errors.password}
            />
            <Form.Control.Feedback type="invalid">
              Пароль должен содержать не менее 6 символов.
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-info"
            type="submit"
            disabled={!formState.isValid}
          >
            {buttonText}
          </Button>
        </div>
      </Form>
    </div>
  );
};
