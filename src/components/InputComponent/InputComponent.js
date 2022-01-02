import React from "react";
import {
  BlackLink,
  Container,
  Input,
  PreviewButton,
} from "./StyledInputComponent";

export const InputComponent = () => {
  const type = "password";
  return (
    <Container>
      <Input type={type} />
      <PreviewButton>My Preview Button</PreviewButton>
      <BlackLink>im a black link</BlackLink>
    </Container>
  );
};
