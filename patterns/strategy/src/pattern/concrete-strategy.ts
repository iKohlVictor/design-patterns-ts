import { IStrategy } from "./index.js";

/**
 * Concrete implementation of Strategy
 */
export class ConcreteStrategy implements IStrategy {
  execute(): void {
    console.log("Executing Strategy pattern...");
  }
}
