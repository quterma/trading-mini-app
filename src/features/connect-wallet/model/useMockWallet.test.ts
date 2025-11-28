import { renderHook, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { useMockWallet } from './useMockWallet'
import { MOCK_WALLET } from '@/mocks'

describe('useMockWallet', () => {
  test('должен начинать с неподключённым состоянием', () => {
    const { result } = renderHook(() => useMockWallet())
    expect(result.current.wallet.isConnected).toBe(false)
    expect(result.current.wallet.address).toBeUndefined()
    expect(result.current.wallet.balance).toBeUndefined()
  })

  test('должен подключать кошелёк с данными из MOCK_WALLET', () => {
    const { result } = renderHook(() => useMockWallet())
    act(() => {
      result.current.connect()
    })
    expect(result.current.wallet.isConnected).toBe(true)
    expect(result.current.wallet.address).toBe(MOCK_WALLET.address)
    expect(result.current.wallet.balance).toBe(MOCK_WALLET.balance)
  })

  test('должен отключать кошелёк и сбрасывать данные', () => {
    const { result } = renderHook(() => useMockWallet())
    act(() => {
      result.current.connect()
    })
    act(() => {
      result.current.disconnect()
    })
    expect(result.current.wallet.isConnected).toBe(false)
    expect(result.current.wallet.address).toBeUndefined()
    expect(result.current.wallet.balance).toBeUndefined()
  })
})
