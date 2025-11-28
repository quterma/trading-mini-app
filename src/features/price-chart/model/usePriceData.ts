import { useState } from 'react';
import { mockPrices, type PricePoint } from '@/mocks/prices';

export const usePriceData = () => {
  const [prices] = useState<PricePoint[]>(mockPrices);

  return { prices };
};
