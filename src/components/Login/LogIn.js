import React from "react";
import { Button, Container } from "react-bootstrap";
import { UserForm } from "./UserForm";

export const LogIn = () => {
  const url = "api/login";
  return (
    <>
      <Container>
        <h1 className="mt-5 text-center">Пожалуйста, войдите на сайт</h1>
        <UserForm buttonText="Войти" url={url} />
        <div className="d-flex justify-content-center">
          <Button
            variant="outline-success"
            className="mt-3"
            href="/registration"
          >
            Зарегистрироваться
          </Button>
        </div>
      </Container>
    </>
  );
};
