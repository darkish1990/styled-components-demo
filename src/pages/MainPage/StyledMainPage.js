import styled, { css, keyframes } from "styled-components";

const someCss = css`
  background-color: red;
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${someCss}//this will put the background-color: red; here
`;

export const Button = styled.button.attrs({
  onmouseover: () => {
    console.log("onmouseovered");
  },
})`
  height: 30px;
  width: 200px;

  background-color: ${({ primary }) => (primary ? "green" : "blue")};
`;

export const Title = styled.h1``;
export const SubTitle = styled.h2``;

const animation = keyframes`
  0% {
    opacity: 0;
  }

  100 {
    opacity: 1;
  }
`;

const animationRule = css`
  ${animation} 1s infinite alternate;
`;

export const AnimationComponent = styled.div`
  animation: ${animationRule};
  height: 100px;
  width: 100px;
`;
