import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from './input.types'

type InputContainerProps = {
  error: boolean
}

const inputErrorModifier = (theme: DefaultTheme) => css`
  border-color: ${theme.colors.danger};

  svg {
    color: ${theme.colors.danger};
  }
`

export const InputContainer = styled.div<InputContainerProps>(
  ({ theme, error }) => css`
    border: 1px solid ${theme.colors.gray300};
    display: flex;
    border-radius: 0.9rem;
    align-items: center;
    transition: 250ms ease-out;
    background-color: ${theme.colors.white};

    svg {
      min-width: 2rem;
      min-height: 2rem;
      color: ${theme.colors.primary};
      margin-right: ${theme.spacings.xs};
    }

    ${error && inputErrorModifier(theme)}
  `
)

export const Input = styled.input<InputProps>`
  ${({ theme }) => css`
    all: unset;
    width: 100%;
    font-family: ${theme.font.family};
    border-radius: 0.9rem;
    border: none;
    padding: ${theme.input.padding.md};
    outline: none;
    font-size: ${theme.font.sizes.md};
    color: ${theme.colors.text};
    background-color: ${theme.colors.white};

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }

    &:-webkit-autofill {
      -webkit-text-fill-color: ${theme.colors.text} !important;
    }
  `}
`

export const InputIcon = styled.div(
  () => css`
    opacity: 0;
    transition: 250ms ease-out;
    transform: scale(0);
    display: flex;
    visibility: hidden;
    left: -9999px;
    position: absolute;

    &[data-show='true'] {
      opacity: 1;
      position: initial;
      visibility: visible;
      transform: scale(1);
      transition: 250ms ease-out;
    }
  `
)
