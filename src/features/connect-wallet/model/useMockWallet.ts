import { useState } from 'react'
import { MOCK_WALLET } from '@/mocks'
import type { WalletState } from './types'

export const useMockWallet = () => {
  const [wallet, setWallet] = useState<WalletState>({
    isConnected: false,
  })

  const connect = () => {
    setWallet({
      isConnected: true,
      address: MOCK_WALLET.address,
      balance: MOCK_WALLET.balance,
    })
  }

  const disconnect = () => {
    setWallet({
      isConnected: false,
    })
  }

  return { wallet, connect, disconnect }
}
