import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Tabs from "./";

describe("Tabs", () => {
  const routes = [
    {
      id: "config",
      path: "/",
      name: "Config",
    },
    {
      id: "result",
      path: "/result",
      name: "Result",
    },
  ];

  it("render the component", () => {
    const component = (
      <Router>
        <Tabs routes={routes} />
      </Router>
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
