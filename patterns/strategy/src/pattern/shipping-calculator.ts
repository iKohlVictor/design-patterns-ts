import { ShippingStrategy } from "./index.js";

/**
 * Shipping Quote - Result of a shipping calculation
 */
export interface ShippingQuote {
  strategyName: string;
  description: string;
  cost: number;
  estimatedDays: number;
  weightKg: number;
  distanceKm: number;
}

/**
 * Shipping Calculator (Context)
 *
 * The Context class that uses a ShippingStrategy to calculate shipping costs.
 * It doesn't implement the algorithm itself but delegates to the strategy.
 *
 * This is the key element of the Strategy pattern - the Context is decoupled
 * from the concrete algorithms and can work with any strategy that implements
 * the ShippingStrategy interface.
 */
export class ShippingCalculator {
  private strategy: ShippingStrategy;

  constructor(strategy: ShippingStrategy) {
    this.strategy = strategy;
  }

  /**
   * Changes the shipping strategy at runtime
   * This is one of the main benefits of the Strategy pattern
   */
  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  /**
   * Gets the current strategy
   */
  getStrategy(): ShippingStrategy {
    return this.strategy;
  }

  /**
   * Calculates a shipping quote using the current strategy
   */
  calculateQuote(weightKg: number, distanceKm: number): ShippingQuote {
    if (weightKg <= 0) {
      throw new Error("Weight must be greater than zero");
    }
    if (distanceKm < 0) {
      throw new Error("Distance cannot be negative");
    }

    const cost = this.strategy.calculateCost(weightKg, distanceKm);
    const estimatedDays = this.strategy.estimateDeliveryDays(distanceKm);

    return {
      strategyName: this.strategy.name,
      description: this.strategy.description,
      cost: Math.round(cost * 100) / 100, // Round to 2 decimal places
      estimatedDays,
      weightKg,
      distanceKm,
    };
  }

  /**
   * Compares quotes from multiple strategies
   * Useful for showing shipping options to customers
   */
  static compareStrategies(
    strategies: ShippingStrategy[],
    weightKg: number,
    distanceKm: number
  ): ShippingQuote[] {
    return strategies.map((strategy) => {
      const calculator = new ShippingCalculator(strategy);
      return calculator.calculateQuote(weightKg, distanceKm);
    });
  }
}

