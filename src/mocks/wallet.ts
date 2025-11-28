export const MOCK_WALLET = {
  address: '0xABCD...1234',
  balance: 1234.56,
}

export const generateRandomBalance = () => {
  return Math.random() * 10000 + 100
}
