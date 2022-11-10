import React from 'react'

import { render } from '@testing-library/react'
import { Text } from './text'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'
import { CheckMarkFilled } from '@egssistemas/icons.icons'

describe('Text', () => {
  it('deve rendezirar um componente P por padrão caso não seja passado um componente.', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Text data-testid="text">hello world!</Text>
      </ThemeProvider>
    )
    const text = getByTestId('text')

    const component = text.tagName

    expect(component).toBe('P')
  })

  it('deve renderizar um componente de titulo h4', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Text component="h4" data-testid="text">
          hello world!
        </Text>
      </ThemeProvider>
    )
    const text = getByTestId('text')

    const component = text.tagName

    expect(component).toBe('H4')
  })

  it('deve renderizar um span com ícone e texto juntos', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Text component="span" data-testid="text">
          <CheckMarkFilled />
          hello world!
        </Text>
      </ThemeProvider>
    )
    const text = getByTestId('text')

    const component = text.childNodes

    expect(component[0].nodeName).toBe('svg')
    expect(text.tagName).toBe('SPAN')
    expect(text.textContent).toBe('hello world!')
  })
})
