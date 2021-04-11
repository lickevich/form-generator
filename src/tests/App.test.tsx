import React from "react";
import { render, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "../context";
import App from "../App";

const renderWithContext = (component: JSX.Element) => {
  return {
    ...render(<ContextProvider>{component}</ContextProvider>),
  };
};

afterEach(cleanup);

describe("App", () => {
  it("render the component", () => {
    const component = renderWithContext(
      <Router>
        <App />
      </Router>
    );
    const { asFragment } = component;

    // @ts-ignoreq
    expect(asFragment(component)).toMatchSnapshot();
  });
});
