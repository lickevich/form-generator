import React from "react";
import { render } from "@testing-library/react";

import Col from "./";

describe("Col", () => {
  it("render the component", () => {
    const component = (
      <Col>
        <label htmlFor="123">Label</label>
        <input type="text" id="123" />
      </Col>
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
