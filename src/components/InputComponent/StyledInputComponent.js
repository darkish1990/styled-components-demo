import styled from "styled-components";
import { CommandButton, Link } from "@fluentui/react";

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

export const PreviewButton = styled(CommandButton)`
  background-color: yellow;
  color: blue;
`;

export const BlackLink = styled(Link)`
  color: black;
`;
