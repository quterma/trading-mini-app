import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { ConnectWallet } from './ConnectWallet'

describe('ConnectWallet', () => {
  test('должен отображать кнопку "Connect Wallet" когда кошелёк не подключён', () => {
    render(<ConnectWallet />)
    expect(screen.getByText('Wallet not connected')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument()
  })

  test('должен показывать адрес и баланс после подключения', async () => {
    const user = userEvent.setup()
    render(<ConnectWallet />)

    const connectButton = screen.getByRole('button', { name: /connect wallet/i })
    await user.click(connectButton)

    expect(screen.getByText(/address:/i)).toBeInTheDocument()
    expect(screen.getByText(/balance:/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /disconnect/i })).toBeInTheDocument()
  })

  test('должен вернуться к неподключённому состоянию после отключения', async () => {
    const user = userEvent.setup()
    render(<ConnectWallet />)

    const connectButton = screen.getByRole('button', { name: /connect wallet/i })
    await user.click(connectButton)

    const disconnectButton = screen.getByRole('button', { name: /disconnect/i })
    await user.click(disconnectButton)

    expect(screen.getByText('Wallet not connected')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument()
  })
})
