import React from 'react'
import { ThemeProvider } from 'styled-components'
import { TextField } from './textfield'
import { theme, GlobalStyles } from '@egssistemas/ui-kit.theme'
import { useForm } from 'react-hook-form'
import { Form } from '@egssistemas/ui-kit.form'

export const BasicTextField = () => {
  const methods = useForm()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form methods={methods} onSubmit={console.log}>
        <div style={{ width: 200 }}>
          <TextField data-testid="textfield" name="name" label="nome:*" />
        </div>
      </Form>
    </ThemeProvider>
  )
}

export const TextFieldWithMask = () => {
  const methods = useForm()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Form methods={methods} onSubmit={console.log}>
        <div style={{ width: 200 }}>
          <TextField
            data-testid="textfield"
            name="phone"
            label="telefone:*"
            type="tel"
            mask={['(99) 99999-9999', '(99) 9999-9999']}
          />
        </div>
      </Form>
    </ThemeProvider>
  )
}
