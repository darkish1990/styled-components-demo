import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled(FlexRow)`
  background: red;
`;

export const Input = styled.input.attrs(({ type }) => ({
  type: type || "text",
}))``;
