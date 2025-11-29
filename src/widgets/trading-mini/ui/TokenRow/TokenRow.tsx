import { ConnectWallet } from '../../features/connect-wallet'
import { TokenButton } from './components'
import tokenIcon from '@/assets/token-icon.png'

export function TokenRow() {
  return (
    <div className="flex items-center justify-between p-[12px]">
      <TokenButton tokenIcon={tokenIcon} tokenSymbol="BTCDEGEN/USDC" />
      <ConnectWallet />
    </div>
  )
}
