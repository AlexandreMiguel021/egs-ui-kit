import React from 'react'

import { Form } from '@egssistemas/ui-kit.form'
import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'

import { RadioGroup } from './radiogroup'

export const BasicRadioGroup = () => {
  const methods = useForm()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form methods={methods} onSubmit={console.log}>
        <div style={{ width: 200 }}>
          <RadioGroup
            name="values"
            wrap={false}
            label="Valores:*"
            values={[
              { text: 'value 1', value: 1 },
              { text: 'value 2', value: 2 }
            ]}
          />
        </div>
      </Form>
    </ThemeProvider>
  )
}

export const RadioGroupWithWrap = () => {
  const methods = useForm()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form methods={methods} onSubmit={console.log}>
        <div style={{ width: 200 }}>
          <RadioGroup
            wrap
            name="values"
            label="Valores:*"
            values={[
              { text: 'value 1', value: 1 },
              { text: 'value 2', value: 2 }
            ]}
          />
        </div>
      </Form>
    </ThemeProvider>
  )
}
