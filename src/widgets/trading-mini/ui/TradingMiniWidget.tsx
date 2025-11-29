import { ConnectWallet } from '../features/connect-wallet'
import { PriceChart } from '../features/price-chart'

export function TradingMiniWidget() {
  return (
    <div className="space-y-4">
      <ConnectWallet />
      <PriceChart />
    </div>
  )
}
