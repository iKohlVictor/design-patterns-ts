import { ShippingStrategy } from "../index.js";

/**
 * Economy Shipping Strategy
 *
 * Budget-friendly shipping option with longer delivery times.
 * Ideal for non-urgent, cost-sensitive shipments.
 */
export class EconomyShipping implements ShippingStrategy {
  readonly name = "economy";
  readonly description = "Economy Delivery (7-10 business days)";

  private readonly BASE_COST = 4.0;
  private readonly COST_PER_KG = 0.8;
  private readonly COST_PER_KM = 0.01;

  calculateCost(weightKg: number, distanceKm: number): number {
    const weightCost = weightKg * this.COST_PER_KG;
    const distanceCost = distanceKm * this.COST_PER_KM;

    return this.BASE_COST + weightCost + distanceCost;
  }

  estimateDeliveryDays(distanceKm: number): number {
    if (distanceKm <= 200) return 7;
    if (distanceKm <= 800) return 8;
    return 10;
  }
}
