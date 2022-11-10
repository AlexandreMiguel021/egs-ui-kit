import { TextareaHTMLAttributes } from 'react'
import { DefaultTheme } from 'styled-components'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  theme: DefaultTheme
}
