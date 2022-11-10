import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLElement> {
  error: boolean
  isValid?: {
    id: string
    hasValue: boolean
  }
}
