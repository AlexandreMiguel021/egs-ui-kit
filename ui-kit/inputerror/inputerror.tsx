import styled, { css } from 'styled-components'
import { InputErrorProps } from './inputerror.types'

const errorModifier = () => css`
  opacity: 1;
`

export const InputError = styled.span(
  ({ theme, error }: InputErrorProps) => css`
    display: block;
    color: ${theme.colors.danger};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xs};
    padding: 0 0.5rem;
    opacity: 0;
    transition: 250ms ease-out;
    ${error && errorModifier()}
  `
)
