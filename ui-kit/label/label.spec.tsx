import React from 'react'
import { render } from '@testing-library/react'
import { Label } from './label'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'

describe('Label', () => {
  it('deve renderizar o conteudo de texto em Label', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Label data-testid="label">Telefone*</Label>
      </ThemeProvider>
    )

    expect(getByTestId('label')).toHaveTextContent('Telefone*')
  })
})
