import { ConnectWallet } from '@/features/connect-wallet';
import { PriceChart } from '@/features/price-chart';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-2xl font-bold text-center mb-6">Trading Mini App</h1>
        <ConnectWallet />
        <PriceChart />
      </div>
    </div>
  );
}

export default App;
