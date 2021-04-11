import React from "react";
import { render } from "@testing-library/react";

import Notification from "./";

describe("Notification", () => {
  it("render the component", () => {
    const component = <Notification message="message_1" />;
    const { asFragment } = render(component);

    // @ts-ignore
    expect(asFragment(component)).toMatchSnapshot();
  });
});
