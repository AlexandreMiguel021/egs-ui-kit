import React from 'react'

import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import { ThemeProvider } from 'styled-components'

import { InputError } from './inputerror'

export const BasicInputError = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <InputError error={true}>mensagem de erro</InputError>
    </ThemeProvider>
  )
}
