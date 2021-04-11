import { isString, isObject, isIncludedValue } from "../helpers";

describe("isString", () => {
  it("should return true if type is string", () => {
    expect(isString("string")).toEqual(true);
  });

  it("should return false if type is not string", () => {
    expect(isString(1)).toEqual(false);
    expect(isString(true)).toEqual(false);
    expect(isString({})).toEqual(false);
    expect(isString([])).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString(undefined)).toEqual(false);
  });
});

describe("isObject", () => {
  it("should return true if type is object", () => {
    expect(isObject({})).toEqual(true);
  });

  it("should return false if type is not object", () => {
    expect(isObject(1)).toEqual(false);
    expect(isObject(true)).toEqual(false);
    expect(isObject("string")).toEqual(false);
    expect(isObject([])).toEqual(false);
    expect(isObject(null)).toEqual(false);
    expect(isObject(undefined)).toEqual(false);
  });
});

describe("isIncludedValue", () => {
  const items = ["qwerty1", "qwerty2"];

  it("should return true if value found", () => {
    expect(isIncludedValue(items, "qwerty1")).toEqual(true);
  });

  it("should return false if value not found", () => {
    expect(isIncludedValue(items, "qwerty3")).toEqual(false);
    expect(isIncludedValue([], "")).toEqual(false);
  });
});
