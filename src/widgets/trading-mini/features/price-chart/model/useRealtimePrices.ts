import { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { mockPrices } from '@/mocks'
import type { PricePoint, PriceStats } from './types'
import { computePriceStats } from './utils'

const INTERVAL_MS = 2000

const generateNextPoint = (lastPoint: PricePoint): PricePoint => {
  const changePercent = (Math.random() - 0.5) * 2
  const newPrice = lastPoint.price * (1 + changePercent / 100)

  return {
    timestamp: Date.now(),
    price: newPrice,
  }
}

export const useRealtimePrices = (initialPoints: PricePoint[] = mockPrices) => {
  const [points, setPoints] = useState<PricePoint[]>(() => [...initialPoints])
  const [isLive, setIsLive] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const stats: PriceStats = useMemo(() => computePriceStats(points), [points])

  const toggleLive = useCallback(() => {
    setIsLive((prev) => !prev)
  }, [])

  const reset = useCallback(() => {
    setPoints([...initialPoints])
    setIsLive(false)
  }, [initialPoints])

  useEffect(() => {
    if (isLive) {
      intervalRef.current = setInterval(() => {
        setPoints((prev) => {
          const lastPoint = prev[prev.length - 1]
          const newPoint = generateNextPoint(lastPoint)
          return [...prev, newPoint]
        })
      }, INTERVAL_MS)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isLive])

  return { points, stats, isLive, toggleLive, reset }
}
