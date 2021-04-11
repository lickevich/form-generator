import React from "react";
import { render } from "@testing-library/react";

import FormTextarea from "./";

describe("FormTextarea", () => {
  it("render the component", () => {
    const component = (
      <FormTextarea index="1" label="Label_textarea" className="active" />
    );
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
