import { useState, useEffect } from 'react';
import { mockPrices, PricePoint } from '@/mocks/prices';

export const usePriceData = () => {
  const [prices, setPrices] = useState<PricePoint[]>(mockPrices);

  useEffect(() => {
    setPrices(mockPrices);
  }, []);

  return { prices };
};
