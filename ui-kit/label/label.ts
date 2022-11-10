import styled, { css } from 'styled-components'

export const Label = styled.label(
  ({ theme }) => css`
    display: block;
    color: ${theme.colors.text};
    font-weight: 500;
    font-size: ${theme.font.sizes.sm};
    padding: 0 0.5rem;
  `
)
