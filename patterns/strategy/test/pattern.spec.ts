import { describe, it, expect, beforeEach } from "vitest";
import { ShippingStrategy } from "../src/pattern/index.js";
import { ShippingCalculator, ShippingQuote } from "../src/pattern/shipping-calculator.js";
import {
  ExpressShipping,
  StandardShipping,
  EconomyShipping,
  StorePickup,
} from "../src/pattern/strategies/index.js";

describe("Strategy Pattern - Shipping Calculator", () => {
  // ═══════════════════════════════════════════════════════════════
  // Interface Contract Tests
  // ═══════════════════════════════════════════════════════════════

  describe("ShippingStrategy Interface", () => {
    const strategies: ShippingStrategy[] = [
      new ExpressShipping(),
      new StandardShipping(),
      new EconomyShipping(),
      new StorePickup(),
    ];

    it.each(strategies.map((s) => [s.name, s]))(
      "%s should implement all required properties",
      (_name, strategy) => {
        expect(strategy).toHaveProperty("name");
        expect(strategy).toHaveProperty("description");
        expect(typeof strategy.name).toBe("string");
        expect(typeof strategy.description).toBe("string");
      }
    );

    it.each(strategies.map((s) => [s.name, s]))(
      "%s should implement calculateCost method",
      (_name, strategy) => {
        expect(typeof strategy.calculateCost).toBe("function");
        const cost = strategy.calculateCost(1, 100);
        expect(typeof cost).toBe("number");
        expect(cost).toBeGreaterThanOrEqual(0);
      }
    );

    it.each(strategies.map((s) => [s.name, s]))(
      "%s should implement estimateDeliveryDays method",
      (_name, strategy) => {
        expect(typeof strategy.estimateDeliveryDays).toBe("function");
        const days = strategy.estimateDeliveryDays(100);
        expect(typeof days).toBe("number");
        expect(days).toBeGreaterThan(0);
      }
    );
  });

  // ═══════════════════════════════════════════════════════════════
  // Express Shipping Tests
  // ═══════════════════════════════════════════════════════════════

  describe("ExpressShipping", () => {
    let express: ExpressShipping;

    beforeEach(() => {
      express = new ExpressShipping();
    });

    it("should have correct name and description", () => {
      expect(express.name).toBe("express");
      expect(express.description).toContain("Express");
    });

    it("should calculate cost with base + weight + distance", () => {
      const cost = express.calculateCost(2, 100);
      // BASE (15) + WEIGHT (2 * 3.5 = 7) + DISTANCE (100 * 0.08 = 8) = 30
      expect(cost).toBe(30);
    });

    it("should return 1 day for short distances", () => {
      expect(express.estimateDeliveryDays(100)).toBe(1);
      expect(express.estimateDeliveryDays(500)).toBe(1);
    });

    it("should return 2 days for long distances", () => {
      expect(express.estimateDeliveryDays(501)).toBe(2);
      expect(express.estimateDeliveryDays(1000)).toBe(2);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // Standard Shipping Tests
  // ═══════════════════════════════════════════════════════════════

  describe("StandardShipping", () => {
    let standard: StandardShipping;

    beforeEach(() => {
      standard = new StandardShipping();
    });

    it("should have correct name and description", () => {
      expect(standard.name).toBe("standard");
      expect(standard.description).toContain("Standard");
    });

    it("should calculate cost cheaper than express", () => {
      const standardCost = standard.calculateCost(2, 100);
      const expressCost = new ExpressShipping().calculateCost(2, 100);
      expect(standardCost).toBeLessThan(expressCost);
    });

    it("should estimate 3-5 days based on distance", () => {
      expect(standard.estimateDeliveryDays(50)).toBe(3);
      expect(standard.estimateDeliveryDays(100)).toBe(3);
      expect(standard.estimateDeliveryDays(200)).toBe(4);
      expect(standard.estimateDeliveryDays(500)).toBe(4);
      expect(standard.estimateDeliveryDays(600)).toBe(5);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // Economy Shipping Tests
  // ═══════════════════════════════════════════════════════════════

  describe("EconomyShipping", () => {
    let economy: EconomyShipping;

    beforeEach(() => {
      economy = new EconomyShipping();
    });

    it("should have correct name and description", () => {
      expect(economy.name).toBe("economy");
      expect(economy.description).toContain("Economy");
    });

    it("should be the cheapest paid option", () => {
      const economyCost = economy.calculateCost(2, 100);
      const standardCost = new StandardShipping().calculateCost(2, 100);
      const expressCost = new ExpressShipping().calculateCost(2, 100);

      expect(economyCost).toBeLessThan(standardCost);
      expect(economyCost).toBeLessThan(expressCost);
    });

    it("should estimate 7-10 days based on distance", () => {
      expect(economy.estimateDeliveryDays(100)).toBe(7);
      expect(economy.estimateDeliveryDays(200)).toBe(7);
      expect(economy.estimateDeliveryDays(500)).toBe(8);
      expect(economy.estimateDeliveryDays(800)).toBe(8);
      expect(economy.estimateDeliveryDays(1000)).toBe(10);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // Store Pickup Tests
  // ═══════════════════════════════════════════════════════════════

  describe("StorePickup", () => {
    let pickup: StorePickup;

    beforeEach(() => {
      pickup = new StorePickup();
    });

    it("should have correct name and description", () => {
      expect(pickup.name).toBe("pickup");
      expect(pickup.description).toContain("Pickup");
    });

    it("should always be free", () => {
      expect(pickup.calculateCost(1, 100)).toBe(0);
      expect(pickup.calculateCost(100, 10000)).toBe(0);
    });

    it("should always estimate 1 day", () => {
      expect(pickup.estimateDeliveryDays(0)).toBe(1);
      expect(pickup.estimateDeliveryDays(10000)).toBe(1);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // ShippingCalculator (Context) Tests
  // ═══════════════════════════════════════════════════════════════

  describe("ShippingCalculator", () => {
    let calculator: ShippingCalculator;

    beforeEach(() => {
      calculator = new ShippingCalculator(new StandardShipping());
    });

    it("should create with initial strategy", () => {
      expect(calculator.getStrategy()).toBeInstanceOf(StandardShipping);
    });

    it("should allow changing strategy at runtime", () => {
      expect(calculator.getStrategy().name).toBe("standard");

      calculator.setStrategy(new ExpressShipping());
      expect(calculator.getStrategy().name).toBe("express");

      calculator.setStrategy(new EconomyShipping());
      expect(calculator.getStrategy().name).toBe("economy");
    });

    it("should calculate quote using current strategy", () => {
      const quote = calculator.calculateQuote(2, 100);

      expect(quote).toMatchObject({
        strategyName: "standard",
        weightKg: 2,
        distanceKm: 100,
      });
      expect(quote.cost).toBeGreaterThan(0);
      expect(quote.estimatedDays).toBeGreaterThan(0);
    });

    it("should round cost to 2 decimal places", () => {
      const quote = calculator.calculateQuote(1.5, 150);
      const decimalPlaces = (quote.cost.toString().split(".")[1] || "").length;
      expect(decimalPlaces).toBeLessThanOrEqual(2);
    });

    it("should throw error for zero or negative weight", () => {
      expect(() => calculator.calculateQuote(0, 100)).toThrow(
        "Weight must be greater than zero"
      );
      expect(() => calculator.calculateQuote(-1, 100)).toThrow(
        "Weight must be greater than zero"
      );
    });

    it("should throw error for negative distance", () => {
      expect(() => calculator.calculateQuote(1, -1)).toThrow(
        "Distance cannot be negative"
      );
    });

    it("should allow zero distance (local pickup scenario)", () => {
      const quote = calculator.calculateQuote(1, 0);
      expect(quote.distanceKm).toBe(0);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // Strategy Comparison Tests
  // ═══════════════════════════════════════════════════════════════

  describe("Strategy Comparison", () => {
    it("should compare multiple strategies", () => {
      const strategies = [
        new ExpressShipping(),
        new StandardShipping(),
        new EconomyShipping(),
        new StorePickup(),
      ];

      const quotes = ShippingCalculator.compareStrategies(strategies, 2, 500);

      expect(quotes).toHaveLength(4);
      expect(quotes.map((q) => q.strategyName)).toEqual([
        "express",
        "standard",
        "economy",
        "pickup",
      ]);
    });

    it("should return quotes sorted by strategy order (not cost)", () => {
      const strategies = [
        new EconomyShipping(),
        new ExpressShipping(),
      ];

      const quotes = ShippingCalculator.compareStrategies(strategies, 2, 500);

      expect(quotes[0]?.strategyName).toBe("economy");
      expect(quotes[1]?.strategyName).toBe("express");
    });

    it("should calculate different costs for different strategies", () => {
      const strategies = [
        new ExpressShipping(),
        new StandardShipping(),
        new EconomyShipping(),
      ];

      const quotes = ShippingCalculator.compareStrategies(strategies, 5, 300);
      const costs = quotes.map((q) => q.cost);

      // All costs should be unique
      expect(new Set(costs).size).toBe(costs.length);

      // Express > Standard > Economy
      expect(costs[0]).toBeGreaterThan(costs[1] ?? 0);
      expect(costs[1]).toBeGreaterThan(costs[2] ?? 0);
    });
  });

  // ═══════════════════════════════════════════════════════════════
  // Quote Structure Tests
  // ═══════════════════════════════════════════════════════════════

  describe("ShippingQuote", () => {
    it("should contain all required fields", () => {
      const calculator = new ShippingCalculator(new StandardShipping());
      const quote: ShippingQuote = calculator.calculateQuote(3, 250);

      expect(quote).toHaveProperty("strategyName");
      expect(quote).toHaveProperty("description");
      expect(quote).toHaveProperty("cost");
      expect(quote).toHaveProperty("estimatedDays");
      expect(quote).toHaveProperty("weightKg");
      expect(quote).toHaveProperty("distanceKm");
    });

    it("should preserve input values in quote", () => {
      const calculator = new ShippingCalculator(new ExpressShipping());
      const quote = calculator.calculateQuote(7.5, 1200);

      expect(quote.weightKg).toBe(7.5);
      expect(quote.distanceKm).toBe(1200);
    });
  });
});
