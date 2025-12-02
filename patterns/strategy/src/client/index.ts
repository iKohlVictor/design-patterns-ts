import { ConcreteStrategy } from "../pattern/concrete-strategy.js";
import { Example } from "../domain/example.js";

/**
 * Client code demonstrating Strategy pattern usage
 */
function main() {
  console.log("\n🎨 Strategy Pattern Example\n");

  const example = new Example("1", "Example Entity");
  console.log(`Domain Entity: ${example.name}`);

  const pattern = new ConcreteStrategy();
  pattern.execute();

  console.log("\n✅ Pattern executed successfully!\n");
}

main();
