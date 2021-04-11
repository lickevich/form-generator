import React from "react";

import { StyledCol } from "./style";

const Col: React.FC<React.ReactNode> = ({ children }) => (
  <StyledCol>{children}</StyledCol>
);

export default Col;
