import React from "react";

import { StyledRow } from "./style";

const Row: React.FC<React.ReactNode> = ({ children }) => (
  <StyledRow>{children}</StyledRow>
);

export default Row;
