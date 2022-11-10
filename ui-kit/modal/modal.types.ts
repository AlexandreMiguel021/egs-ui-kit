import { ReactNode } from 'react'

export type ModalProps = {
  size?: 'sm' | 'md' | 'lg'
  layer?: number
  children: ReactNode
}
