import { useMemo } from 'react'
import { mockPrices } from '@/mocks'
import type { PricePoint, PriceStats } from './types'
import { computePriceStats } from './utils'

export const usePriceData = () => {
  const points: PricePoint[] = mockPrices

  const stats: PriceStats = useMemo(() => computePriceStats(points), [points])

  return { points, stats }
}
