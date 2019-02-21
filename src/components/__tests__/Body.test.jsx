import React from "react";
import { Body } from "../Body";

describe("Body", () => {
  test("smoke test", () => {
    const BodyWrapper = shallow(<Body />);
    expect(BodyWrapper).toMatchSnapshot();
  });

  test("cost is displayed correct", () => {
    const BodyWrapper = shallow(<Body cost={10000} />);
    expect(BodyWrapper.find(".__total").text()).toBe("$10,000");
  });
});
