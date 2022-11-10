import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Text } from './text'

export const BasicText = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Text>hello world!</Text>
  </ThemeProvider>
)
