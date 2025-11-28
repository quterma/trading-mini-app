export interface PricePoint {
  timestamp: number;
  price: number;
}

export const mockPrices: PricePoint[] = Array.from({ length: 24 }, (_, i) => ({
  timestamp: Date.now() - (23 - i) * 3600 * 1000,
  price: 45000 + Math.random() * 5000,
}));
