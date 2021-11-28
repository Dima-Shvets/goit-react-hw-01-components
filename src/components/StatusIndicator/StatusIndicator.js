import styled, { css } from "styled-components";

export const StatusIndicator = styled.span`
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;
  overflow: hidden;

  ${(props) =>
    props.isOnline &&
    css`
      background: green;
    `}
`;
//
