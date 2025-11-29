interface WidgetCloseButtonProps {
  onClick: () => void
}

export function WidgetCloseButton({ onClick }: WidgetCloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-[20px] h-[20px] cursor-pointer outline-none focus:outline-none border-none bg-transparent group p-[0]"
      aria-label="Close widget"
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 group-hover:rotate-90 w-[12px] h-[12px]"
      >
        <path d="M16 4L4 16" stroke="white" strokeOpacity="0.5" />
        <path d="M4 4L16 16" stroke="white" strokeOpacity="0.5" />
      </svg>
    </button>
  )
}
