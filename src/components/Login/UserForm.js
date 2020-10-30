import React from "react";
import { Col, Form, Row } from "react-bootstrap";

export const UserForm = ({handleLogin, handlePassword}) => {
  return (
    <div>
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
    </div>
  );
}
