import { describe, test, expect } from 'vitest'
import { computePriceStats } from './utils'
import type { PricePoint } from './types'

describe('computePriceStats', () => {
  test('возвращает нулевую статистику для пустого массива', () => {
    const result = computePriceStats([])

    expect(result).toEqual({
      currentPrice: 0,
      previousPrice: undefined,
      changeAbs: 0,
      changePercent: 0,
    })
  })

  test('возвращает текущую цену без изменения для одной точки', () => {
    const points: PricePoint[] = [{ timestamp: 1000, price: 100 }]

    const result = computePriceStats(points)

    expect(result).toEqual({
      currentPrice: 100,
      previousPrice: undefined,
      changeAbs: 0,
      changePercent: 0,
    })
  })

  test('корректно рассчитывает положительное изменение', () => {
    const points: PricePoint[] = [
      { timestamp: 1000, price: 100 },
      { timestamp: 2000, price: 110 },
    ]

    const result = computePriceStats(points)

    expect(result.currentPrice).toBe(110)
    expect(result.previousPrice).toBe(100)
    expect(result.changeAbs).toBe(10)
    expect(result.changePercent).toBe(10)
  })

  test('корректно рассчитывает отрицательное изменение', () => {
    const points: PricePoint[] = [
      { timestamp: 1000, price: 100 },
      { timestamp: 2000, price: 90 },
    ]

    const result = computePriceStats(points)

    expect(result.currentPrice).toBe(90)
    expect(result.previousPrice).toBe(100)
    expect(result.changeAbs).toBe(-10)
    expect(result.changePercent).toBe(-10)
  })

  test('использует последние две точки из множества', () => {
    const points: PricePoint[] = [
      { timestamp: 1000, price: 100 },
      { timestamp: 2000, price: 120 },
      { timestamp: 3000, price: 110 },
    ]

    const result = computePriceStats(points)

    expect(result.currentPrice).toBe(110)
    expect(result.previousPrice).toBe(120)
    expect(result.changeAbs).toBeCloseTo(-10)
    expect(result.changePercent).toBeCloseTo(-8.333, 2)
  })

  test('корректно обрабатывает дробные цены', () => {
    const points: PricePoint[] = [
      { timestamp: 1000, price: 45123.56 },
      { timestamp: 2000, price: 45678.9 },
    ]

    const result = computePriceStats(points)

    expect(result.currentPrice).toBe(45678.9)
    expect(result.previousPrice).toBe(45123.56)
    expect(result.changeAbs).toBeCloseTo(555.34, 2)
    expect(result.changePercent).toBeCloseTo(1.231, 2)
  })
})
