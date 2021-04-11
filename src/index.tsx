import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import { GlobalStyle } from "./style";
import ContextProvider from "./context";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Router>
    <GlobalStyle />
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
