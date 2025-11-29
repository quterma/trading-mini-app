import { PriceChart } from '../features/price-chart'
import { WidgetHeader } from './WidgetHeader'
import { TokenRow } from './TokenRow'

interface TradingMiniWidgetProps {
  onClose: () => void
}

export function TradingMiniWidget({ onClose }: TradingMiniWidgetProps) {
  return (
    <div className="flex flex-col p-0 w-[390px] min-w-[390px] bg-[#1B1B1B] shadow-lg overflow-hidden border border-gray-200">
      <WidgetHeader onClose={onClose} />
      <TokenRow />
      <PriceChart />
    </div>
  )
}
