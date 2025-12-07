import { describe, it, expect } from "vitest";
import { resolveParams } from "./resolveParams";

describe("resolveParams", () => {
  it("returns the value when given a direct value", async () => {
    const value = { uid: "abc" };
    const result = await resolveParams(value);
    expect(result).toEqual(value);
  });

  it("resolves a promise to the value", async () => {
    const value = { uid: "xyz" };
    const promise = Promise.resolve(value);
    const result = await resolveParams(promise);
    expect(result).toEqual(value);
  });
});
