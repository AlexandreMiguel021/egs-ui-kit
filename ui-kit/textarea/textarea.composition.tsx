import React from 'react'

import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import { ThemeProvider } from 'styled-components'
import { TextArea } from './textarea'

export const BasicTextarea = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TextArea />
    </ThemeProvider>
  )
}
