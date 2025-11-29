import { useState } from 'react'
import { clsx } from 'clsx'

export function WidgetSettingsButton() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <button
      onClick={() => setIsExpanded(!isExpanded)}
      className="flex items-center px-[4px] h-[30px] bg-[#222222] rounded-[3px] border-[0px] hover:border-[#333333] cursor-pointer transition-colors outline-none focus:outline-none"
      aria-label="Toggle settings"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.16667 8.33334C3.25 8.33334 2.5 9.08334 2.5 10C2.5 10.9167 3.25 11.6667 4.16667 11.6667C5.08333 11.6667 5.83333 10.9167 5.83333 10C5.83333 9.08334 5.08333 8.33334 4.16667 8.33334Z"
          stroke="white"
        />
        <path
          d="M15.8333 8.33334C14.9167 8.33334 14.1667 9.08334 14.1667 10C14.1667 10.9167 14.9167 11.6667 15.8333 11.6667C16.75 11.6667 17.5 10.9167 17.5 10C17.5 9.08334 16.75 8.33334 15.8333 8.33334Z"
          stroke="white"
        />
        <path
          d="M9.99999 8.33334C9.08333 8.33334 8.33333 9.08334 8.33333 10C8.33333 10.9167 9.08333 11.6667 9.99999 11.6667C10.9167 11.6667 11.6667 10.9167 11.6667 10C11.6667 9.08334 10.9167 8.33334 9.99999 8.33334Z"
          stroke="white"
        />
      </svg>
      <div className="w-[20px]" />
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
  )
}
