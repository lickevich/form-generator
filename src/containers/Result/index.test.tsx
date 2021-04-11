import React from "react";
import { render, cleanup } from "@testing-library/react";

import { ContextProvider } from "../../context";
import Result from "./";

const renderWithContext = (component: JSX.Element) => {
  return {
    ...render(<ContextProvider>{component}</ContextProvider>),
  };
};

afterEach(cleanup);

describe("Result Page", () => {
  it("render the component", () => {
    const component = renderWithContext(<Result />);
    const { asFragment } = component;

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
