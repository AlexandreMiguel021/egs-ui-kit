import { InputHTMLAttributes } from 'react'

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  mask?: string | string[]
  name: string
  component?: 'INPUT' | 'TEXTAREA'
}
