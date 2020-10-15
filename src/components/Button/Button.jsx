import React from "react";

import * as Styled from "./Button.styled";

export const Button = ({
  disabled = false,
  onClick,
  type = "button",
  children,
}) => (
  <Styled.Button disabled={disabled} onClick={onClick} type={type}>
    {children}
  </Styled.Button>
);
