/**
 * Address Entity
 *
 * Represents a shipping address with location details
 */
export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

/**
 * Creates a formatted address string
 */
export function formatAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.state} ${address.zipCode}, ${address.country}`;
}

/**
 * Calculates approximate distance between two addresses
 * In a real application, this would use a geolocation API
 */
export function calculateDistance(from: Address, to: Address): number {
  // Simplified distance calculation based on state difference
  // In production, use Google Maps API, OpenStreetMap, etc.
  if (from.state === to.state) {
    return 50; // Same state: ~50km
  }
  if (from.country === to.country) {
    return 500; // Same country, different state: ~500km
  }
  return 2000; // International: ~2000km
}
