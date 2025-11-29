import type { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface CardProps {
  children: ReactNode
  className?: string
}

export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={clsx('bg-white rounded-lg shadow-md p-4', className)}>{children}</div>
}
