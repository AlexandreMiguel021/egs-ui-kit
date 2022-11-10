import { HTMLAttributes } from 'react'

export type TextProps = {
  children?: any
  flex?: boolean
  align?: 'center' | 'left' | 'right' | 'justify'
  weigth?: 'light' | 'normal' | 'bold'
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | '2xl'
  color?: 'title' | 'text' | 'primary' | 'secondary' | 'white' | 'black'
  component?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  transform?: 'capitalize' | 'lowercase' | 'uppercase'
  titleTheme?: boolean
} & HTMLAttributes<HTMLDivElement>
