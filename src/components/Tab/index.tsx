import React from "react";

import { StyledNavLink } from "./style";
import { ITab } from "../../type";

const Tab: React.FC<ITab> = ({ path, name }) => (
  <StyledNavLink exact to={path} activeClassName="selected">
    {name}
  </StyledNavLink>
);

export default Tab;
