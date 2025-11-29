import { WidgetSettingsButton, WidgetCloseButton } from './components'

interface WidgetHeaderProps {
  onClose: () => void
}

export function WidgetHeader({ onClose }: WidgetHeaderProps) {
  return (
    <div className="relative flex items-center justify-between px-[12px] py-[8px] bg-[#222222] select-none">
      <WidgetSettingsButton />

      <h2 className="text-[14px] font-[500] text-[#FFFFFF] absolute left-1/2 -translate-x-1/2">
        Mini App
      </h2>

      <WidgetCloseButton onClick={onClose} />
    </div>
  )
}
