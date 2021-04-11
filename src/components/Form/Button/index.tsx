import React from "react";

import { StyledInput } from "./style";
import { IButton } from "../../../type";

const Button: React.FC<IButton> = ({ type, value, ...rest }) => (
  <StyledInput type={type} value={value} {...rest} />
);

export default Button;
