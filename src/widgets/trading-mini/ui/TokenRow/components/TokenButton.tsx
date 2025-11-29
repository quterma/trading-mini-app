import { useState } from 'react'
import { clsx } from 'clsx'

interface TokenButtonProps {
  tokenIcon: string
  tokenSymbol: string
}

export function TokenButton({ tokenIcon, tokenSymbol }: TokenButtonProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="flex items-center px-[8px] h-[36px] bg-[#222222] rounded-[12px] border-[0] cursor-pointer outline-none focus:outline-none"
    >
      <div className="flex items-center gap-[8px] pr-[8px]">
        <img src={tokenIcon} alt={tokenSymbol} className="w-[24px] h-[24px] rounded-full" />
        <span className="font-medium text-[12px] text-[#ffffff] font-[geist]">{tokenSymbol}</span>
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
      </div>
    </button>
  )
}
