import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, test, expect } from 'vitest'
import { ConnectWallet } from './ConnectWallet'

describe('ConnectWallet', () => {
  test('должен отображать кнопку "Connect Wallet" когда кошелёк не подключён', () => {
    render(<ConnectWallet />)
    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument()
  })

  test('должен показывать адрес и баланс после подключения', async () => {
    const user = userEvent.setup()
    render(<ConnectWallet />)

    const connectButton = screen.getByRole('button', { name: /connect wallet/i })
    await user.click(connectButton)

    // После подключения должен показывать баланс
    expect(screen.getByText('1234.56')).toBeInTheDocument()
    // И кнопку отключения с иконкой
    expect(screen.getByAltText('disconnect')).toBeInTheDocument()
  })

  test('должен вернуться к неподключённому состоянию после отключения', async () => {
    const user = userEvent.setup()
    render(<ConnectWallet />)

    const connectButton = screen.getByRole('button', { name: /connect wallet/i })
    await user.click(connectButton)

    const disconnectButton = screen.getByAltText('disconnect').closest('button')
    if (disconnectButton) {
      await user.click(disconnectButton)
    }

    expect(screen.getByRole('button', { name: /connect wallet/i })).toBeInTheDocument()
  })
})
