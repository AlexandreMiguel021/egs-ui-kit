import React from 'react'

import { CheckCircle, WarningCircle } from '@egssistemas/icons.icons'
import { forwardRef } from 'react'
import * as S from './Input.styles'
import { InputProps } from './input.types'

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const hasError = props.error
  const isValid = !props.error && props.isValid?.hasValue

  return (
    <S.InputContainer data-testid="input-container" error={!!props.error}>
      <S.Input {...props} ref={ref} />
      <S.InputIcon data-show={hasError}>
        <WarningCircle data-testid="icon" />
      </S.InputIcon>
      <S.InputIcon data-show={isValid}>
        <CheckCircle data-testid="icon" />
      </S.InputIcon>
    </S.InputContainer>
  )
})

Input.displayName = 'Input'
