import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from './modal'
import { ThemeProvider } from 'styled-components'
import { theme } from '@egssistemas/ui-kit.theme'

const ModalComponent = (
  <ThemeProvider theme={theme}>
    <Modal.Root>
      <Modal.Content data-testid="modal-content">text content</Modal.Content>
      <Modal.Trigger>open modal</Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)

describe('Modal', () => {
  it('deve renderizar um modal aberto e mostrar o conteúdo', () => {
    render(ModalComponent)

    fireEvent.click(screen.getByText('open modal'))

    expect(screen.getByTestId('modal-content')).toHaveTextContent(
      'text content'
    )
  })

  it('deve fechar o modal ao clicar no botao de close e não mostrar o conteudo', () => {
    render(ModalComponent)

    fireEvent.click(screen.getByText('open modal'))

    fireEvent.click(screen.getByLabelText('fechar'))

    expect(screen.getByText('open modal')).toHaveAttribute(
      'data-state',
      'closed'
    )
  })

  it('deve renderizar um modal do tamanho "small" ', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal.Root>
          <Modal.Content size="sm" data-testid="content">
            text content
          </Modal.Content>
          <Modal.Trigger>open modal</Modal.Trigger>
        </Modal.Root>
      </ThemeProvider>
    )

    fireEvent.click(getByText('open modal'))

    const modalContent = getByTestId('content')

    expect(modalContent).toHaveStyle('max-width: 50rem;')
  })

  it('deve renderizar um modal do tamanho "medium" ', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal.Root>
          <Modal.Content size="md" data-testid="content">
            text content
          </Modal.Content>
          <Modal.Trigger>open modal</Modal.Trigger>
        </Modal.Root>
      </ThemeProvider>
    )

    fireEvent.click(getByText('open modal'))

    const modalContent = getByTestId('content')

    expect(modalContent).toHaveStyle('max-width: 70rem;')
  })

  it('deve renderizar um modal do tamanho "large" ', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal.Root>
          <Modal.Content size="lg" data-testid="content">
            text content
          </Modal.Content>
          <Modal.Trigger>open modal</Modal.Trigger>
        </Modal.Root>
      </ThemeProvider>
    )

    fireEvent.click(getByText('open modal'))

    const modalContent = getByTestId('content')

    expect(modalContent).toHaveStyle('max-width: 90rem;')
  })

  it('deve rendezirar um modal com o layer e calc translate de acordo com o layer props', () => {
    const { getByText, getByTestId } = render(
      <ThemeProvider theme={theme}>
        <Modal.Root>
          <Modal.Content layer={2} data-testid="content">
            text content
          </Modal.Content>
          <Modal.Trigger>open modal</Modal.Trigger>
        </Modal.Root>
      </ThemeProvider>
    )

    fireEvent.click(getByText('open modal'))

    const modalContent = getByTestId('content')

    expect(modalContent).toHaveStyle(
      `transform: translate(calc(-50% + 2rem),calc(-50% + 2rem));`
    )
  })
})
