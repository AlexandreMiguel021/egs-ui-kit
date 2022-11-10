import React from 'react'

import { FieldValues, FormProvider } from 'react-hook-form'
import { FormProps } from './form.types'
import * as S from './form.styles'

export function Form<T extends FieldValues>({
  children,
  onSubmit,
  methods,
  ...rest
}: FormProps<T>) {
  return (
    <FormProvider {...methods}>
      <S.Form
        data-testid="form"
        onSubmit={methods.handleSubmit(onSubmit)}
        {...rest}
      >
        {children}
      </S.Form>
    </FormProvider>
  )
}
