import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@egssistemas/ui-kit.theme'
import { TextArea } from './textarea'
import { theme } from '@egssistemas/ui-kit.theme'

it('deve renderizar textarea', () => {
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <TextArea data-testid="textarea" />
    </ThemeProvider>
  )
  const rendered = getByTestId('textarea')
  expect(rendered).toBeTruthy()
})
