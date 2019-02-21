import React from "react";
import Logo from "../Logo";

describe("Logo", () => {
  test("smoke test", () => {
    const LogoWrapper = shallow(<Logo />);
    expect(LogoWrapper).toMatchSnapshot();
  });
});
