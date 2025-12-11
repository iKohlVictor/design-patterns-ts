/**
 * Strategy Pattern - Client Example
 *
 * This example demonstrates the Strategy pattern in a real-world scenario:
 * calculating shipping costs for an e-commerce order.
 *
 * The Strategy pattern allows us to:
 * 1. Define a family of algorithms (shipping methods)
 * 2. Encapsulate each one in its own class
 * 3. Make them interchangeable at runtime
 */

import { ShippingCalculator } from "../pattern/shipping-calculator.js";
import {
  ExpressShipping,
  StandardShipping,
  EconomyShipping,
  StorePickup,
} from "../pattern/strategies/index.js";
import { Order, Address, calculateDistance } from "../domain/index.js";

function main() {
  console.log("\n🎨 Strategy Pattern - Shipping Calculator Example\n");
  console.log("=".repeat(60));

  // Create sample addresses
  const warehouseAddress: Address = {
    street: "100 Warehouse Way",
    city: "São Paulo",
    state: "SP",
    zipCode: "01000-000",
    country: "Brazil",
  };

  const customerAddress: Address = {
    street: "456 Customer Ave",
    city: "Rio de Janeiro",
    state: "RJ",
    zipCode: "20000-000",
    country: "Brazil",
  };

  // Create a sample order
  const order = new Order(
    "ORD-2024-001",
    [
      { id: "PROD-1", name: "Mechanical Keyboard", quantity: 1, pricePerUnit: 149.99, weightKg: 0.8 },
      { id: "PROD-2", name: "Gaming Mouse", quantity: 1, pricePerUnit: 79.99, weightKg: 0.15 },
      { id: "PROD-3", name: "USB-C Cable (3-pack)", quantity: 2, pricePerUnit: 19.99, weightKg: 0.1 },
    ],
    customerAddress
  );

  const distanceKm = calculateDistance(warehouseAddress, customerAddress);
  const weightKg = order.getTotalWeight();

  console.log("\n📦 Order Details");
  console.log("-".repeat(60));
  console.log(`Total Weight: ${weightKg.toFixed(2)} kg`);
  console.log(`Distance: ${distanceKm} km`);
  console.log(`From: ${warehouseAddress.city}, ${warehouseAddress.state}`);
  console.log(`To: ${customerAddress.city}, ${customerAddress.state}`);

  // ═══════════════════════════════════════════════════════════════
  // STRATEGY PATTERN IN ACTION
  // ═══════════════════════════════════════════════════════════════

  // Create all available shipping strategies
  const strategies = [
    new ExpressShipping(),
    new StandardShipping(),
    new EconomyShipping(),
    new StorePickup(),
  ];

  // Compare all shipping options
  console.log("\n🚚 Available Shipping Options");
  console.log("-".repeat(60));

  const quotes = ShippingCalculator.compareStrategies(strategies, weightKg, distanceKm);

  quotes.forEach((quote, index) => {
    console.log(`\n${index + 1}. ${quote.description}`);
    console.log(`   Cost: $${quote.cost.toFixed(2)}`);
    console.log(`   Delivery: ${quote.estimatedDays} business day(s)`);
  });

  // ═══════════════════════════════════════════════════════════════
  // CHANGING STRATEGY AT RUNTIME
  // ═══════════════════════════════════════════════════════════════

  console.log("\n" + "=".repeat(60));
  console.log("🔄 Changing Strategy at Runtime");
  console.log("-".repeat(60));

  // Create calculator with default strategy
  const calculator = new ShippingCalculator(new StandardShipping());
  console.log(`\nInitial strategy: ${calculator.getStrategy().name}`);

  let quote = calculator.calculateQuote(weightKg, distanceKm);
  console.log(`Cost with Standard: $${quote.cost.toFixed(2)}`);

  // Customer wants faster shipping - change strategy!
  calculator.setStrategy(new ExpressShipping());
  console.log(`\nCustomer wants faster shipping...`);
  console.log(`Changed strategy to: ${calculator.getStrategy().name}`);

  quote = calculator.calculateQuote(weightKg, distanceKm);
  console.log(`Cost with Express: $${quote.cost.toFixed(2)}`);

  // Customer decides to save money - change strategy again!
  calculator.setStrategy(new EconomyShipping());
  console.log(`\nCustomer prefers to save money...`);
  console.log(`Changed strategy to: ${calculator.getStrategy().name}`);

  quote = calculator.calculateQuote(weightKg, distanceKm);
  console.log(`Cost with Economy: $${quote.cost.toFixed(2)}`);

  // ═══════════════════════════════════════════════════════════════
  // COMPLETE ORDER FLOW
  // ═══════════════════════════════════════════════════════════════

  console.log("\n" + "=".repeat(60));
  console.log("🛒 Complete Order with Shipping");
  console.log("-".repeat(60));

  // Customer selects standard shipping
  const selectedStrategy = new StandardShipping();
  const shippingCalculator = new ShippingCalculator(selectedStrategy);
  const shippingQuote = shippingCalculator.calculateQuote(weightKg, distanceKm);

  order.setShipping(shippingQuote);

  console.log("\n" + order.getSummary());

  console.log("\n" + "=".repeat(60));
  console.log("✅ Strategy Pattern executed successfully!\n");
}

main();
