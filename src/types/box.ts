import type { SetStateAction } from 'react'

export  type openBoxProps = {
  openBox: boolean
  setOpenBox: React.Dispatch<SetStateAction<boolean>>
}
