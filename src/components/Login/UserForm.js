import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { SendData } from "./actions";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export const UserForm = ({ buttonText, url }) => {
  const { register, handleSubmit } = useForm();
  let history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    SendData(url, data, dispatch);
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
              type="email"
              placeholder="Введите email"
              name="email"
              ref={register({ required: true })}
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
              name="password"
              ref={register({ required: true })}
            />
          </Col>
        </Form.Group>
        <div className="d-flex justify-content-center">
          <Button variant="outline-info" type="submit">
            {buttonText}
          </Button>
        </div>
      </Form>
    </div>
  );
};
