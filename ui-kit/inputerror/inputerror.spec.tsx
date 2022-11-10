import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'
import { GlobalStyles } from '@egssistemas/ui-kit.theme'
import { InputError } from './inputerror'

describe('InputError', () => {
  it('deve renderizar mensagem de erro caso haja um erro', () => {
    const error = 'error message'

    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InputError error={!!true}>{error}</InputError>
      </ThemeProvider>
    )

    const inputError = getByText('error message')

    expect(inputError).toBeVisible()
  })

  it('deve esconder a mensagem de erro caso não haja um erro', () => {
    const error = ''

    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InputError data-testid="input-error" error={!!error}>
          {error}
        </InputError>
      </ThemeProvider>
    )

    const inputError = getByTestId('input-error')

    expect(inputError).not.toBeVisible()
  })
})
