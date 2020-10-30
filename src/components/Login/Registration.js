import React from "react";
import { Container } from "react-bootstrap";
import { UserForm } from "./UserForm";

export const Registration = () => {
  const url = "api/register";

  return (
    <div>
      <Container>
        <h1 className="mt-5 text-center">Форма регистрации</h1>
        <UserForm buttonText="Зарегистрироваться" url={url} />
      </Container>
    </div>
  );
};
