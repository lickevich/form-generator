import React from "react";

import { StyledButtonsGroup } from "./style";

const ButtonsGroup: React.FC<React.ReactNode> = ({ children }) => (
  <StyledButtonsGroup>{children}</StyledButtonsGroup>
);

export default ButtonsGroup;
