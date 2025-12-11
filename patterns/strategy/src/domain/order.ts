import { Address } from "./address.js";
import { ShippingQuote } from "../pattern/shipping-calculator.js";

/**
 * Order Item
 */
export interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  pricePerUnit: number;
  weightKg: number;
}

/**
 * Order Entity
 *
 * Represents a customer order with items and shipping details
 */
export class Order {
  readonly id: string;
  readonly items: OrderItem[];
  readonly shippingAddress: Address;
  private selectedShipping?: ShippingQuote;

  constructor(id: string, items: OrderItem[], shippingAddress: Address) {
    this.id = id;
    this.items = items;
    this.shippingAddress = shippingAddress;
  }

  /**
   * Calculates total weight of all items in the order
   */
  getTotalWeight(): number {
    return this.items.reduce(
      (total, item) => total + item.weightKg * item.quantity,
      0
    );
  }

  /**
   * Calculates subtotal (items only, no shipping)
   */
  getSubtotal(): number {
    return this.items.reduce(
      (total, item) => total + item.pricePerUnit * item.quantity,
      0
    );
  }

  /**
   * Sets the selected shipping option
   */
  setShipping(quote: ShippingQuote): void {
    this.selectedShipping = quote;
  }

  /**
   * Gets the selected shipping option
   */
  getShipping(): ShippingQuote | undefined {
    return this.selectedShipping;
  }

  /**
   * Calculates order total including shipping
   */
  getTotal(): number {
    const subtotal = this.getSubtotal();
    const shipping = this.selectedShipping?.cost ?? 0;
    return subtotal + shipping;
  }

  /**
   * Returns order summary
   */
  getSummary(): string {
    const lines = [
      `Order #${this.id}`,
      `─────────────────────────────`,
      ...this.items.map(
        (item) =>
          `${item.quantity}x ${item.name} - $${(
            item.pricePerUnit * item.quantity
          ).toFixed(2)}`
      ),
      `─────────────────────────────`,
      `Subtotal: $${this.getSubtotal().toFixed(2)}`,
    ];

    if (this.selectedShipping) {
      lines.push(
        `Shipping (${
          this.selectedShipping.description
        }): $${this.selectedShipping.cost.toFixed(2)}`
      );
      lines.push(
        `Estimated Delivery: ${this.selectedShipping.estimatedDays} business days`
      );
    }

    lines.push(`─────────────────────────────`);
    lines.push(`Total: $${this.getTotal().toFixed(2)}`);

    return lines.join("\n");
  }
}
