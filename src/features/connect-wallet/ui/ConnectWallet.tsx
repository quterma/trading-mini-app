import type { FC } from 'react'
import { Card, Button } from '@/shared/ui'
import { useMockWallet } from '../model/useMockWallet'

export const ConnectWallet: FC = () => {
  const { wallet, connect, disconnect } = useMockWallet()

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Wallet</h2>
      {!wallet.isConnected ? (
        <>
          <p className="text-gray-600 mb-4">Wallet not connected</p>
          <Button onClick={connect}>Connect Wallet</Button>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-600 mb-2">Address: {wallet.address}</p>
          <p className="text-lg font-semibold mb-4">Balance: {wallet.balance}</p>
          <Button onClick={disconnect} variant="secondary">
            Disconnect
          </Button>
        </>
      )}
    </Card>
  )
}
