import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Tab from "./";

describe("Tab", () => {
  it("render the component", () => {
    const component = (
      <Router>
        <Tab path="/" name="Tab" />
      </Router>
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
