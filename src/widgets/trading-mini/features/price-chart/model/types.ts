export type PricePoint = {
  timestamp: number
  price: number
}

export type PriceStats = {
  currentPrice: number
  previousPrice?: number
  changeAbs: number
  changePercent: number
}
