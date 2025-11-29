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
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors"
          >
            Open widget
          </button>
        )}
      </div>
    </div>
  )
}

export default App
