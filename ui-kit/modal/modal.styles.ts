import * as D from '@radix-ui/react-dialog'
import styled, { css, DefaultTheme, keyframes } from 'styled-components'
import media from 'styled-media-query'
import { ModalProps } from './modal.types'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`

const modalSizeModifier = {
  sm: () => css`
    max-width: 50rem;
  `,
  md: () => css`
    max-width: 70rem;
  `,
  lg: () => css`
    max-width: 90rem;
  `
}

const modalLayerModifier = (layer: number) => css`
  transform: ${`translate(calc(-50% + ${layer}rem), calc(-50% + ${layer}rem))`};
`

export const Overlay = styled(D.Overlay)(
  () => css`
    width: 100%;
    background-color: #00000020;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;

    &[data-state='open'] {
      animation: ${fadeIn} 220ms ease-out;
    }

    &[data-state='closed'] {
      animation: ${fadeOut} 220ms ease-out;
    }
  `
)

type ContentProps = {
  theme: DefaultTheme
} & Omit<ModalProps, 'children'>

export const Content = styled(D.Content)(
  ({ theme, size, layer }: ContentProps) => css`
    width: max-content;
    z-index: 5;
    position: fixed;
    background-color: ${theme.colors.background};
    border-radius: ${theme.borderRadius.small};
    max-height: 80%;
    max-width: 80rem;
    box-shadow: ${theme.shadow.shadowDark3};
    display: flex;
    flex-direction: column;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 150ms ease-out;

    &[data-state='open'] {
      animation: ${fadeIn} 220ms ease-out;
    }

    &[data-state='closed'] {
      animation: ${fadeOut} 220ms ease-out;
    }

    ${media.lessThan('medium')`
      max-width: 90%;
    `}

    ${size && modalSizeModifier[size]()}
    ${layer && modalLayerModifier(layer)}
  `
)

export const Wrapper = styled.div(
  ({ theme }) => css`
    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #dcdcdc;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${theme.colors.gray300};
      border-radius: 20px;
    }

    &::-webkit-scrollbar-track {
      border-bottom-right-radius: ${theme.borderRadius.small};
    }

    overflow-y: auto;
    padding: ${theme.spacings.sm};
  `
)

export const Close = styled(D.Close)(
  ({ theme }) => css`
    border: none;
    background-color: transparent;
    position: absolute;
    width: 4rem;
    height: 4rem;
    right: -1rem;
    top: -1rem;
    color: ${theme.colors.title};
    cursor: pointer;
    transition: 200ms ease-out;
    border-radius: 100%;
    box-shadow: ${theme.shadow.shadowDark3};

    :hover {
      transform: scale(1.1);
      transition: 200ms ease-out;
    }

    :focus {
      outline: none;
      transform: scale(1.1);
    }

    svg {
      width: 100%;
      background-color: white;
      border-radius: 100%;
      height: 100%;
    }
  `
)

export const Root = styled(D.Root)``

export const Portal = styled(D.Portal)``

export const Trigger = styled(D.Trigger)`
  all: unset;
  cursor: pointer;
`
