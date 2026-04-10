import ToggleButton from './ToggleButton'
import type { openBoxProps } from '../types/box.ts'
import type { ReactNode } from 'react'

type BoxProps = openBoxProps & {
  children: ReactNode
}

const Box = ({ children, openBox, setOpenBox }: BoxProps) => {
  return (
    <div className="box no-scrollbar">
      <ToggleButton isOpen={openBox} setIsOpen={setOpenBox} />
      {openBox && children}
    </div>
  )
}

export default Box
