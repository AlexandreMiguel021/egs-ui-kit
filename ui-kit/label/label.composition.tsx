import React from 'react'

import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import { ThemeProvider } from 'styled-components'
import { Label } from './label'

export const BasicLabel = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Label>hello world!</Label>
    </ThemeProvider>
  )
}
