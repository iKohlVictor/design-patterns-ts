import { ShippingStrategy } from "../index.js";

/**
 * Store Pickup Strategy
 *
 * Free option where customer picks up at a physical location.
 * No shipping cost, customer handles transportation.
 */
export class StorePickup implements ShippingStrategy {
  readonly name = "pickup";
  readonly description = "Store Pickup (same day if ordered before 2pm)";

  calculateCost(_weightKg: number, _distanceKm: number): number {
    // Pickup is always free
    return 0;
  }

  estimateDeliveryDays(_distanceKm: number): number {
    // Ready for pickup within 1 business day
    return 1;
  }
}

