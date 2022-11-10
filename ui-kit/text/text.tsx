import React from 'react'
import { TextProps } from './text.types'
import * as S from './text.styles'

export const Text = ({ children, ...props }: TextProps) => {
  const hasIcon = children?.length === 2

  return (
    <S.Text flex={hasIcon} {...props}>
      {children}
    </S.Text>
  )
}
