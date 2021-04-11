import React from "react";
import { render } from "@testing-library/react";

import FormInput from "./";

describe("FormInput", () => {
  it("render the component", () => {
    const component = (
      <FormInput index="0" type="text" label="Label_input" autoComplete="on" />
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
