import React from "react";
import DateTimePicker from "../DateTimePicker";

describe("DateTimePicker", () => {
  test("smoke test", () => {
    const DateTimePickerWrapper = shallow(<DateTimePicker />);
    expect(DateTimePickerWrapper).toMatchSnapshot();
  });
});
