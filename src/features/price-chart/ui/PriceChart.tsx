import type { FC } from 'react'
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, Button } from '@/shared/ui'
import { usePriceData, useRealtimePrices } from '@/features/price-chart'

export const PriceChart: FC = () => {
  const { points: basePoints } = usePriceData()
  const { points, stats, isLive, toggleLive, reset } = useRealtimePrices(basePoints)

  const chartData = points.map((point) => ({
    time: new Date(point.timestamp).toLocaleTimeString('ru-RU', {
      hour: '2-digit',
      minute: '2-digit',
    }),
    price: point.price,
  }))

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">График цены</h2>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={reset}>
            Сброс
          </Button>
          <Button onClick={toggleLive}>{isLive ? 'Пауза' : 'Старт'}</Button>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-2xl font-bold">${stats.currentPrice.toFixed(2)}</div>
        <div className={`text-sm ${stats.changePercent >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {stats.changePercent >= 0 ? '+' : ''}
          {stats.changePercent.toFixed(2)}%
        </div>
      </div>

      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis domain={['auto', 'auto']} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorPrice)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  )
}
