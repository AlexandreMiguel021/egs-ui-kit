import React from 'react'

import { RadioGroup as Group } from '@headlessui/react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Option, OptionWrapper, Radio, Wrapper } from './radiogroup.styles'
import { InputError } from '@egssistemas/ui-kit.inputerror'
import { Label } from '@egssistemas/ui-kit.label'
import { RadioGroupProps } from './radiogroup.types'

export function RadioGroup<T>({ name, values, ...props }: RadioGroupProps<T>) {
  const [selected, setSelected] = useState<T>(null as T)
  const { setValue, watch, formState } = useFormContext()
  const error = formState.errors[name]?.message
  const selectedWatch = watch(name)

  function handleChange(option: T) {
    setSelected(option)
    setValue(name, option, {
      shouldValidate: true
    })
  }

  return (
    <Group value={selected} onChange={handleChange}>
      <Label>{props.label}</Label>
      <Wrapper data-testid="radio-wrapper" data-wrap={props.wrap ?? false}>
        {values.map(({ text, value }) => (
          <Option key={text}>
            <Group.Option value={value}>
              <OptionWrapper
                data-testid="radio"
                data-checked={value == selectedWatch}
              >
                <Radio data-checked={value == selectedWatch} />
                {text}
              </OptionWrapper>
            </Group.Option>
          </Option>
        ))}
      </Wrapper>
      <InputError error={!!error}>{error && String(error)}</InputError>
    </Group>
  )
}
