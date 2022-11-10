import React from 'react'

import { render } from '@testing-library/react'
import { Button } from './button'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'
import 'jest-styled-components'

describe('Button', () => {
  it('deve renderizar o botão com o estilo padrão', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyleRule('opacity', '0.9', {
      modifier: ':hover'
    })

    expect(button).toHaveStyleRule('transform', 'scale(0.95)', {
      modifier: ':active'
    })
  })

  it('deve renderizar um componente de áncora no lugar do botão caso href seja passado', () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Button href="/teste" primary>
          click
        </Button>
      </ThemeProvider>
    )
    const button = getByText('click')
    const component = button.tagName

    expect(component).toBe('A')
  })

  it('deve renderizar um botão primário', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button primary>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`background: ${theme.colors.primary}`)
  })

  it('deve renderizar um botão secundário', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button secondary>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`background: ${theme.colors.secondary50}`)
  })

  it('deve renderizar um botão na versão outline', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button outline>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`background: ${theme.colors.white}`)
  })

  it('deve renderizar um botão gradient', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button gradient>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`background: ${theme.colors.gradient}`)
  })

  it('deve renderizar um botão desabilitado.', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button disabled>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`cursor: initial`)
  })

  it('deve renderizar um botão do tamanho "small" ', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button sm>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`height: 5rem`)
  })

  it('deve renderizar um botão do tamanho "large" ', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button lg>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`height: 7rem`)
  })

  it('deve renderizar um botão com 100%', () => {
    const { getByRole } = render(
      <ThemeProvider theme={theme}>
        <Button fullWidth>click</Button>
      </ThemeProvider>
    )
    const button = getByRole('button')

    expect(button).toHaveStyle(`width: 100%`)
  })
})
