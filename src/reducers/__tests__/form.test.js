import formReducer, {
  onEntryDateTimeChanged,
  onExitDateTimeChanged
} from "../form";

describe("Form Reducer Tests", () => {
  test("initial state", () => {
    const initState = formReducer(undefined, { type: "__INIT" });
    expect(initState.entryDateTime).toBe("");
    expect(initState.exitDateTime).toBe("");
  });

  test("entry date time changed", () => {
    const initState = formReducer(undefined, { type: "__INIT" });
    const state1 = formReducer(
      initState,
      onEntryDateTimeChanged("0001-01-01T01:01")
    );
    expect(state1.entryDateTime).toBe("0001-01-01T01:01");
    expect(state1.exitDateTime).toBe("");
  });
  test("exit date time changed", () => {
    const initState = formReducer(undefined, { type: "__INIT" });
    const state1 = formReducer(
      initState,
      onExitDateTimeChanged("1991-05-10T01:02")
    );
    expect(state1.entryDateTime).toBe("");
    expect(state1.exitDateTime).toBe("1991-05-10T01:02");
  });
});
