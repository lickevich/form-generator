import React from "react";
import { render } from "@testing-library/react";

import Button from "./";

describe("Button", () => {
  it("render the component", () => {
    const component = <Button type="button" value="OK" />;
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
