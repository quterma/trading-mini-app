import type { PricePoint, PriceStats } from './types'

export const computePriceStats = (points: PricePoint[]): PriceStats => {
  if (points.length === 0) {
    return {
      currentPrice: 0,
      previousPrice: undefined,
      changeAbs: 0,
      changePercent: 0,
    }
  }

  const currentPrice = points[points.length - 1].price
  const previousPrice = points.length > 1 ? points[points.length - 2].price : undefined

  const changeAbs = previousPrice !== undefined ? currentPrice - previousPrice : 0
  const changePercent =
    previousPrice !== undefined && previousPrice !== 0
      ? (changeAbs / previousPrice) * 100
      : 0

  return {
    currentPrice,
    previousPrice,
    changeAbs,
    changePercent,
  }
}
