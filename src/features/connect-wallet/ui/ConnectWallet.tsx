import { FC } from 'react';
import { Card } from '@/shared/ui/Card';
import { Button } from '@/shared/ui/Button';

export const ConnectWallet: FC = () => {
  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Wallet</h2>
      <p className="text-gray-600 mb-4">Connect your wallet to start trading</p>
      <Button>Connect Wallet</Button>
    </Card>
  );
};
