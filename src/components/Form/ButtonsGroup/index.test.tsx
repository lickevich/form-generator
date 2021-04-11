import React from "react";
import { render } from "@testing-library/react";

import ButtonsGroup from "./";

describe("ButtonsGroup", () => {
  it("render the component", () => {
    const component = (
      <ButtonsGroup>
        <input type="button" value="OK" />
        <input type="reset" value="RESET" />
      </ButtonsGroup>
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
