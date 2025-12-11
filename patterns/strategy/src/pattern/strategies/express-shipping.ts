import { ShippingStrategy } from "../index.js";

/**
 * Express Shipping Strategy
 *
 * Premium shipping option with fastest delivery times.
 * Higher cost but guaranteed quick delivery.
 */
export class ExpressShipping implements ShippingStrategy {
  readonly name = "express";
  readonly description = "Express Delivery (1-2 business days)";

  private readonly BASE_COST = 15.0;
  private readonly COST_PER_KG = 3.5;
  private readonly COST_PER_KM = 0.08;

  calculateCost(weightKg: number, distanceKm: number): number {
    const weightCost = weightKg * this.COST_PER_KG;
    const distanceCost = distanceKm * this.COST_PER_KM;

    return this.BASE_COST + weightCost + distanceCost;
  }

  estimateDeliveryDays(distanceKm: number): number {
    // Express is always 1-2 days regardless of distance
    return distanceKm > 500 ? 2 : 1;
  }
}
