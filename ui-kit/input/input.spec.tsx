import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'
import { Input } from './input'

describe('Input', () => {
  it('deve renderizar input padrão', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input error={false} />
      </ThemeProvider>
    )
    const icons = getAllByTestId('icon')

    icons.forEach((icon) => {
      expect(icon).not.toBeVisible()
    })
  })

  it('deve renderizar input com erro', () => {
    const { getAllByTestId, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input error={true} />
      </ThemeProvider>
    )
    const iconError = getAllByTestId('icon')[0]
    const iconSuccess = getAllByTestId('icon')[1]
    const inputContainer = getByTestId('input-container')

    expect(iconError).toBeVisible()
    expect(iconSuccess).not.toBeVisible()
    expect(inputContainer).toHaveStyle(`border-color: ${theme.colors.danger}`)
  })

  it('deve renderizar input com sucesso', () => {
    const { getAllByTestId } = render(
      <ThemeProvider theme={theme}>
        <Input error={false} isValid={{ id: 'teste', hasValue: true }} />
      </ThemeProvider>
    )
    const iconError = getAllByTestId('icon')[0]
    const iconSuccess = getAllByTestId('icon')[1]

    expect(iconError).not.toBeVisible()
    expect(iconSuccess).toBeVisible()
  })
})
