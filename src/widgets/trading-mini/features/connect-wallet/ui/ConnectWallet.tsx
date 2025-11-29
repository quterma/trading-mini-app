import type { FC } from 'react'
import { useState } from 'react'
import { clsx } from 'clsx'
import { useMockWallet } from '../model/useMockWallet'
import tokenIcon from '@/assets/token-small-icon.png'
import walletIcon from '@/assets/wallet-icon.png'

export const ConnectWallet: FC = () => {
  const { wallet, connect, disconnect } = useMockWallet()
  const [isExpanded, setIsExpanded] = useState(false)

  if (!wallet.isConnected) {
    return (
      <button
        onClick={connect}
        style={{
          background:
            'linear-gradient(161.2deg, rgba(151, 252, 166, 0.1) -3.56%, rgba(246, 201, 15, 0.1) 107.13%)',
        }}
        className="box-border flex items-center px-[12px] py-[0] h-[36px] border border-transparent hover:border-[#333333] outline-none focus:outline-none cursor-pointer rounded-[12px]"
      >
        <span
          style={{
            background: 'linear-gradient(161.2deg, #97FCA6 -3.56%, #F6C90F 107.13%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Connect Wallet
        </span>
      </button>
    )
  }

  return (
    <div className="flex items-center h-[34px] border border-[rgba(255,255,255,0.1)] rounded-[12px] overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-[4px] px-[12px] h-full bg-transparent border-[0] cursor-pointer outline-none focus:outline-none"
      >
        <img src={tokenIcon} alt="" className="w-[16px] h-[16px] rounded-full" />
        <span className="text-[#ffffff] font-[geist] text-[12px] font-medium font-[500]">
          {wallet.balance}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={clsx('transition-transform duration-200', {
            'rotate-180': isExpanded,
          })}
        >
          <path
            d="M2.03997 4.45504L5.29998 7.71504C5.68498 8.10004 6.31498 8.10004 6.69998 7.71504L9.95998 4.45504"
            stroke="white"
            strokeOpacity="0.7"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        onClick={disconnect}
        className="flex justify-center items-center w-[34px] h-full bg-[linear-gradient(161.2deg,#97FCA6_-3.56%,#F6C90F_107.13%)] border-[0] cursor-pointer outline-none focus:outline-none"
      >
        <img src={walletIcon} alt={'disconnect'} className="w-[15px] h-[15px]" />
      </button>
    </div>
  )
}
