import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  padding: 10px 50px 5px;
  border: 1px solid black;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:first-child {
    border-right: none;
  }

  &:hover {
    text-decoration: underline;
  }

  &.selected {
    background-color: lightgray;
  }
`;
