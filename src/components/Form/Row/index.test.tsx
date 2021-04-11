import React from "react";
import { render } from "@testing-library/react";

import Row from "./";

describe("Row", () => {
  it("render the component", () => {
    const component = (
      <Row>
        <label htmlFor="123">Label</label>
        <input type="text" id="123" />
      </Row>
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
