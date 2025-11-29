import { useState } from 'react'

export const useWallet = () => {
  const [connected, setConnected] = useState(false)

  const connect = () => setConnected(true)
  const disconnect = () => setConnected(false)

  return { connected, connect, disconnect }
}
