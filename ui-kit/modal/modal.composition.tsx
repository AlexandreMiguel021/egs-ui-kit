import React, { CSSProperties } from 'react'
import { ThemeProvider } from 'styled-components'
import { Modal } from './modal'
import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'

const Btn = {
  padding: 8,
  border: 0,
  backgroundColor: '#2F9C95',
  color: 'white',
  cursor: 'pointer',
  borderRadius: 4
} as CSSProperties

export const BasicModal = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal.Root>
      <Modal.Content>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Modal.Content>
      <Modal.Trigger>
        <button style={Btn}>Open Default Modal</button>
      </Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)

export const SmallModal = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal.Root>
      <Modal.Content size="sm">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Modal.Content>
      <Modal.Trigger>
        <button style={Btn}>Open Small Modal</button>
      </Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)

export const MediumModal = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal.Root>
      <Modal.Content size="md">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Modal.Content>
      <Modal.Trigger>
        <button style={Btn}>Open Medium Modal</button>
      </Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)

export const LargeModal = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal.Root>
      <Modal.Content size="lg">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </Modal.Content>
      <Modal.Trigger>
        <button style={Btn}>Open Large Modal</button>
      </Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)

export const ModalWithLayer = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Modal.Root>
      <Modal.Content size="sm">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <Modal.Root>
          <Modal.Content size="sm" layer={1}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
            <button
              style={{
                ...Btn,
                opacity: 0
              }}
            >
              Open Modal with Layer
            </button>
          </Modal.Content>
          <Modal.Trigger>
            <button style={Btn}>Open Modal with Layer</button>
          </Modal.Trigger>
        </Modal.Root>
      </Modal.Content>
      <Modal.Trigger>
        <button style={Btn}>Open Modal with Layer</button>
      </Modal.Trigger>
    </Modal.Root>
  </ThemeProvider>
)
