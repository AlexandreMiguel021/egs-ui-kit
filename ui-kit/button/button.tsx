import React from 'react'

import { ButtonProps, ButtonRef } from './button.types'
import * as S from './button.styles'
import { forwardRef } from 'react'
import { Loading } from '@egssistemas/icons.icons'

export const Button = forwardRef<ButtonRef, ButtonProps>((props, ref) => {
  const { children, fullWidth } = props
  const isAnchor = props.href
  const defaultSize = !props.lg && !props.sm

  return (
    <S.Button
      ref={ref}
      as={isAnchor && 'a'}
      md={defaultSize}
      fullWidth={fullWidth}
      data-testid="button"
      disabled={props.loading}
      loading={props.loading}
      {...props}
    >
      {props.loading ? <Loading /> : !!children && children}
    </S.Button>
  )
})
