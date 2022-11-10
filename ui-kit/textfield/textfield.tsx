import React from 'react'

import { ChangeEvent } from 'react'
import { useFormContext } from 'react-hook-form'
import { TextFieldContainer } from './textfield.styles'
import { InputError } from '@egssistemas/ui-kit.inputerror'
import { Label } from '@egssistemas/ui-kit.label'
import { Input } from '@egssistemas/ui-kit.input'
import { TextArea } from '@egssistemas/ui-kit.textarea'
import { mask } from '@egssistemas/utils.mask'
import { TextFieldProps } from './textfield.types'

const components = {
  INPUT: Input,
  TEXTAREA: TextArea
}

export function TextField(props: TextFieldProps) {
  const { mask: maskPattern, label, name, component = 'INPUT', ...rest } = props
  const { formState, setValue, watch, register } = useFormContext()
  const error = formState.errors[name]?.message
  const Component = components[component]

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(name, mask(e.target.value, maskPattern!), {
      shouldValidate: true
    })
  }

  return (
    <TextFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Component
        {...rest}
        {...register(name)}
        id={name}
        error={!!error}
        isValid={{
          id: name,
          hasValue: !!watch(name)?.length ?? false
        }}
        onChange={handleChange}
      />
      <InputError error={!!error}>{error && String(error)}</InputError>
    </TextFieldContainer>
  )
}
