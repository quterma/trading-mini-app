export const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`
}

export const formatPercent = (value: number): string => {
  const sign = value >= 0 ? '+' : ''
  return `${sign}${value.toFixed(2)}%`
}

export const formatAddress = (address: string): string => {
  if (address.length < 10) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
