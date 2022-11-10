import React from 'react'

import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import { ThemeProvider } from 'styled-components'
import { Input } from './input'

export const BasicInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input error={false} />
    </ThemeProvider>
  )
}

export const InputWithError = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input error={true} />
    </ThemeProvider>
  )
}

export const InputSuccess = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Input error={false} isValid={{ id: 'teste', hasValue: true }} />
    </ThemeProvider>
  )
}
