import type { FC } from 'react';
import { Card } from '@/shared/ui';

export const PriceChart: FC = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Price Chart</h2>
      <div className="h-64 flex items-center justify-center text-gray-400">
        Chart placeholder
      </div>
    </Card>
  );
};
