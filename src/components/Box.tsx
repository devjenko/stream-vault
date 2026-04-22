import type { openBoxProps } from '../types/box.ts'
import type { ReactNode } from 'react'

type BoxProps = openBoxProps & {
  children: ReactNode
  className?: string
}

const Box = ({ children, openBox, className }: BoxProps) => {
  return (
    <div className={`box no-scrollbar ${className}`}>{openBox && children}</div>
  )
}

export default Box
