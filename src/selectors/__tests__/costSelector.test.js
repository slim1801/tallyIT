import costSelector from "../costSelector";

describe("Cost Selector", () => {
  test("Entry and Exit Date Time not defined should charge 0", () => {
    const result = costSelector({
      form: { entryDateTime: "", exitDateTime: "" }
    });
    expect(result).toBe(0);
  });
  test("Just Entry Date Time not defined should charge 0", () => {
    const result = costSelector({
      form: { entryDateTime: "2000-01-01T04:20", exitDateTime: "" }
    });
    expect(result).toBe(0);
  });
  test("Just Exit Date Time not defined should charge 0", () => {
    const result = costSelector({
      form: { entryDateTime: "", exitDateTime: "2000-01-01T04:20" }
    });
    expect(result).toBe(0);
  });

  describe("Early Bird", () => {
    test("Enter at 6:00am, Exit at 4:00pm should charge $13", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T06:00",
          exitDateTime: "0001-01-01T16:00"
        }
      });
      expect(result).toBe(13);
    });
    test("Enter at 9:00am, Exit at 4:00pm should charge $13", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T09:00",
          exitDateTime: "0001-01-01T16:00"
        }
      });
      expect(result).toBe(13);
    });
    test("Enter at 8:00am, Exit at 3:30pm should charge $13", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T08:00",
          exitDateTime: "0001-01-01T15:30"
        }
      });
      expect(result).toBe(13);
    });
    test("Enter at 8:00am, Exit at 11:30pm should charge $13", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T08:00",
          exitDateTime: "0001-01-01T21:30"
        }
      });
      expect(result).toBe(13);
    });
  });

  describe("Night Rate", () => {
    test("Enter at 6:00pm Wed, Exit at 5:30am Thurs should charge $6.50", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-03T18:00", // Wednesday
          exitDateTime: "0001-01-04T05:30" // Thursday
        }
      });
      expect(result).toBe(6.5);
    });
    test("Enter at 6:00pm Fri, Exit at 5:30am Sat should charge $6.50", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-05T18:00", // Friday
          exitDateTime: "0001-01-06T05:30"
        }
      });
      expect(result).toBe(6.5);
    });
    test("Enter at midnight Mon, Exit at 5:30am Tues should charge $6.50", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-02T00:00", // Monday Midnight
          exitDateTime: "0001-01-02T05:30"
        }
      });
      expect(result).toBe(6.5);
    });
    test("Enter at at 7:00pm Fri, Exit at 6:00am Sat should charge $6.50", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-05T19:00",
          exitDateTime: "0001-01-06T06:00"
        }
      });
      expect(result).toBe(6.5);
    });
    test("Enter at at 7:00pm Thurs, Exit at 6:00am Fri should charge $6.50", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-04T19:00",
          exitDateTime: "0001-01-05T06:00"
        }
      });
      expect(result).toBe(6.5);
    });
  });

  describe("Weekend Rate", () => {
    test("Enter at Sat 12:01am, Exit at Sat 6pm should charge $10", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-06T00:01",
          exitDateTime: "0001-01-06T18:00"
        }
      });
      expect(result).toBe(10);
    });
    test("Enter at Sat 12:01am, Exit at Sat midnight should charge $10", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-06T00:01",
          exitDateTime: "0001-01-07T00:00"
        }
      });
      expect(result).toBe(10);
    });
    test("Enter at Sat 12:01am, Exit at Sun 11:59pm should charge $10", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-06T00:01",
          exitDateTime: "0001-01-07T23:59"
        }
      });
      expect(result).toBe(10);
    });
  });

  describe("Standard Rate", () => {
    test("parking from monday to sunday should return $140", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T00:01",
          exitDateTime: "0001-01-07T00:00"
        }
      });
      expect(result).toBe(140);
    });
    test("parking monday midnight to tuesday midnight should return $40", () => {
      const result = costSelector({
        form: {
          entryDateTime: "0001-01-01T00:00",
          exitDateTime: "0001-01-02T00:00"
        }
      });
      expect(result).toBe(40);
    });
  });
});
