import styled from "styled-components";

export const StyledCol = styled.div`
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:first-child {
    width: 200px;
    padding-right: 10px;
  }
`;
