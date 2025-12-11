import { ShippingStrategy } from "../index.js";

/**
 * Standard Shipping Strategy
 *
 * Regular shipping option with balanced cost and delivery time.
 * Most common choice for non-urgent deliveries.
 */
export class StandardShipping implements ShippingStrategy {
  readonly name = "standard";
  readonly description = "Standard Delivery (3-5 business days)";

  private readonly BASE_COST = 8.0;
  private readonly COST_PER_KG = 1.5;
  private readonly COST_PER_KM = 0.03;

  calculateCost(weightKg: number, distanceKm: number): number {
    const weightCost = weightKg * this.COST_PER_KG;
    const distanceCost = distanceKm * this.COST_PER_KM;

    return this.BASE_COST + weightCost + distanceCost;
  }

  estimateDeliveryDays(distanceKm: number): number {
    if (distanceKm <= 100) return 3;
    if (distanceKm <= 500) return 4;
    return 5;
  }
}

