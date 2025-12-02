import { describe, it, expect } from "vitest";
import { ConcreteStrategy } from "../src/pattern/concrete-strategy.js";

describe("Strategy Pattern", () => {
  it("should execute the pattern correctly", () => {
    const pattern = new ConcreteStrategy();

    expect(() => pattern.execute()).not.toThrow();
  });

  it("should implement the IStrategy interface", () => {
    const pattern = new ConcreteStrategy();

    expect(pattern).toHaveProperty("execute");
    expect(typeof pattern.execute).toBe("function");
  });
});
