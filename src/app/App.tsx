import { TradingMiniWidget } from '@/widgets/trading-mini'
import './index.css'

import { useState } from 'react'

function App() {
  const [isTradingMiniWidgetOpen, setIsTradingMiniWidgetOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col">
      <h1 className="text-2xl font-bold text-center mb-6">Trading Dashboard</h1>

      <div className="flex justify-center">
        {isTradingMiniWidgetOpen ? (
          <TradingMiniWidget onClose={() => setIsTradingMiniWidgetOpen(false)} />
        ) : (
          <button
            onClick={() => setIsTradingMiniWidgetOpen(true)}
            className="p-[10px] bg-[#4a90e2] text-[#ffffff] text-[20px] font-semibold rounded-[12px] shadow-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Open widget
          </button>
        )}
      </div>
    </div>
  )
}

export default App
