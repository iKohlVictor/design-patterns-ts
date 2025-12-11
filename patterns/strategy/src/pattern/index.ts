/**
 * Strategy Pattern - Shipping Strategy Interface
 *
 * Defines the contract for all shipping calculation strategies.
 * Each concrete strategy implements a different shipping method
 * with its own pricing logic.
 */
export interface ShippingStrategy {
  /**
   * Unique identifier for the strategy
   */
  readonly name: string;

  /**
   * Human-readable description of the shipping method
   */
  readonly description: string;

  /**
   * Calculates the shipping cost based on weight and distance
   * @param weightKg - Package weight in kilograms
   * @param distanceKm - Distance to destination in kilometers
   * @returns Shipping cost in currency units
   */
  calculateCost(weightKg: number, distanceKm: number): number;

  /**
   * Estimates delivery time in business days
   * @param distanceKm - Distance to destination in kilometers
   * @returns Estimated delivery time in business days
   */
  estimateDeliveryDays(distanceKm: number): number;
}
