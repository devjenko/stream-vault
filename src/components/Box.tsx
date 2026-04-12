import ToggleButton from './ToggleButton'
import type { openBoxProps } from '../types/box.ts'
import type { ReactNode } from 'react'

type BoxProps = openBoxProps & {
  children: ReactNode
  className?: string
}

const Box = ({ children, openBox, setOpenBox, className }: BoxProps) => {
  return (
    <div className={`box no-scrollbar ${className}`}>
      <ToggleButton isOpen={openBox} setIsOpen={setOpenBox} />
      {openBox && children}
    </div>
  )
}

export default Box
