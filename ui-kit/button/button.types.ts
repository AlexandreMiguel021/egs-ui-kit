import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  fullWidth?: boolean
  children?: ReactNode
  primary?: boolean
  secondary?: boolean
  outline?: boolean
  gradient?: boolean
  loading?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>

export type ButtonRef = HTMLAnchorElement & HTMLButtonElement
