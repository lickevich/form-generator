import React from "react";
import { render } from "@testing-library/react";

import FormInputGroup from "./";

describe("FormInputGroup", () => {
  const props = {
    type: "radio",
    groupLabel: "radio",
    items: [
      { label: "radio1", name: "radio", value: "1" },
      { label: "radio2", name: "radio", value: "2" },
    ],
  };

  it("render the component", () => {
    const component = <FormInputGroup {...props} />;
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
