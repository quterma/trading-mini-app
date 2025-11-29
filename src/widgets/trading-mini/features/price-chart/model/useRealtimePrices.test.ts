import { renderHook, act } from '@testing-library/react'
import { describe, test, expect, vi, beforeEach, afterEach } from 'vitest'
import { useRealtimePrices } from './useRealtimePrices'
import { mockPrices } from '@/mocks'

describe('useRealtimePrices', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('должен инициализироваться с mockPrices и isLive=false', () => {
    const { result } = renderHook(() => useRealtimePrices())
    expect(result.current.points).toEqual(mockPrices)
    expect(result.current.isLive).toBe(false)
    expect(result.current.stats.currentPrice).toBe(
      mockPrices[mockPrices.length - 1].price,
    )
  })

  test('live off → нет обновлений', () => {
    const { result } = renderHook(() => useRealtimePrices())
    const initialLength = result.current.points.length

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.points.length).toBe(initialLength)
  })

  test('live on → точки растут', () => {
    const { result } = renderHook(() => useRealtimePrices())
    const initialLength = result.current.points.length

    act(() => {
      result.current.toggleLive()
    })

    expect(result.current.isLive).toBe(true)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(result.current.points.length).toBe(initialLength + 1)

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(result.current.points.length).toBe(initialLength + 2)
  })

  test('live toggled off → stop updating', () => {
    const { result } = renderHook(() => useRealtimePrices())

    act(() => {
      result.current.toggleLive()
    })

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    const lengthAfterOneUpdate = result.current.points.length

    act(() => {
      result.current.toggleLive()
    })

    expect(result.current.isLive).toBe(false)

    act(() => {
      vi.advanceTimersByTime(5000)
    })

    expect(result.current.points.length).toBe(lengthAfterOneUpdate)
  })

  test('stats отражают последнюю точку', () => {
    const { result } = renderHook(() => useRealtimePrices())

    act(() => {
      result.current.toggleLive()
    })

    const priceBeforeUpdate = result.current.stats.currentPrice

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    const priceAfterUpdate = result.current.stats.currentPrice

    expect(priceAfterUpdate).not.toBe(priceBeforeUpdate)
    expect(result.current.stats.currentPrice).toBe(
      result.current.points[result.current.points.length - 1].price,
    )
  })

  test('reset должен сбрасывать точки и останавливать live', () => {
    const { result } = renderHook(() => useRealtimePrices())

    act(() => {
      result.current.toggleLive()
    })

    act(() => {
      vi.advanceTimersByTime(4000)
    })

    expect(result.current.points.length).toBeGreaterThan(mockPrices.length)
    expect(result.current.isLive).toBe(true)

    act(() => {
      result.current.reset()
    })

    expect(result.current.points).toEqual(mockPrices)
    expect(result.current.isLive).toBe(false)
  })

  test('должен очищать интервал при размонтировании', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval')
    const { result, unmount } = renderHook(() => useRealtimePrices())

    act(() => {
      result.current.toggleLive()
    })

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()
  })
})
