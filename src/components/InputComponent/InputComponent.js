import React from "react";
import { Container, Input } from "./StyledInputComponent";

export const InputComponent = () => {
  const type = "password";
  return (
    <Container>
      <Input type={type} />
    </Container>
  );
};
