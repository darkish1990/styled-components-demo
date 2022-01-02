import React, { useState } from "react";
import { InputComponent } from "../../components/InputComponent/InputComponent";
import {
  AnimationComponent,
  MainPageContainer,
  Button,
  Title,
  SubTitle,
} from "./StyledMainPage";

export const MainPage = () => {
  const [isPrimary, setIsPrimary] = useState(true);
  return (
    <MainPageContainer>
      <Title>My Title</Title>
      <SubTitle>My SubTitle</SubTitle>
      <AnimationComponent />
      <Button
        primary={isPrimary}
        onClick={() => {
          setIsPrimary((prev) => !prev);
        }}
      >
        MyButton
      </Button>
      <InputComponent />
    </MainPageContainer>
  );
};
