import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  html {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    color: black;
  }

  body {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: initial;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  max-width: 650px;
  height: 100%;
  margin: 0 auto;
`;

export const Main = styled.div`
  min-height: 650px;
  border: 1px solid black;
`;
