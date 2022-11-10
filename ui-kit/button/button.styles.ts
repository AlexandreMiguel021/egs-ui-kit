import styled, { css, DefaultTheme } from 'styled-components'
import { keyframes } from 'styled-components'
import media from 'styled-media-query'
import { ButtonProps } from './button.types'

const loadingAnim = keyframes`
  from {
    opacity: .6;
  }

  to {
    opacity: 1;
  }

`

const sizeModifier = {
  small: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.sm};
    padding: ${theme.spacings.xxs} ${theme.spacings.xs};
    border-radius: ${theme.borderRadius.small};

    svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  `,

  medium: (theme: DefaultTheme) => css`
    height: 6rem;
    font-size: ${theme.font.sizes.md};
    padding: ${theme.spacings.xxs} ${theme.spacings.xl};

    svg {
      width: 2.2rem;
      height: 2.2rem;
    }
  `,

  large: (theme: DefaultTheme) => css`
    height: 7rem;
    font-size: ${theme.font.sizes.lg};
    padding: ${theme.spacings.xxs} ${theme.spacings.xxl};

    svg {
      width: 2.6rem;
      height: 2.6rem;
    }
  `
}

const BackgroundModifier = {
  primary: (theme: DefaultTheme) => css`
    background: ${theme.colors.primary};
    color: ${theme.colors.white};
    border: 3px solid ${theme.colors.primary};
    box-shadow: 0px 4px 4px ${theme.colors.title}30;
  `,

  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.secondary50};
    color: ${theme.colors.secondary};
    border: 3px solid ${theme.colors.secondary50};
    box-shadow: 0px 4px 4px ${theme.colors.title}10;
  `,

  outline: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.secondary};
    border: 3px solid ${theme.colors.secondary};
  `,

  gradient: (theme: DefaultTheme) => css`
    background: ${theme.colors.gradient};
    color: ${theme.colors.white};
    border: 3px solid transparent;
  `
}

const disableModifier = () => css`
  cursor: initial;
  opacity: 0.9;

  &:active {
    transform: scale(1);
  }
`

const loadingModifier = () => css`
  animation: ${loadingAnim} 1.1s ease-out infinite alternate;
`

const wrapperModifiers = {
  fullWidth: () => css`
    width: 100%;
  `
}

export const Button = styled.button<ButtonProps>`
  ${({ theme, fullWidth, ...props }) => css`
    text-decoration: none;
    border: 0;
    transition: 200ms ease-out;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    font-weight: 500;
    letter-spacing: 0.1rem;
    outline: none;
    cursor: pointer;
    gap: ${theme.spacings.xxs};
    font-family: ${theme.font.family};
    border-radius: ${theme.borderRadius.medium};

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.95);
    }

    ${props.sm && sizeModifier.small(theme)};
    ${props.md && sizeModifier.medium(theme)};
    ${props.lg && sizeModifier.large(theme)};

    ${props.primary && BackgroundModifier.primary(theme)};
    ${props.secondary && BackgroundModifier.secondary(theme)};
    ${props.outline && BackgroundModifier.outline(theme)};
    ${props.gradient && BackgroundModifier.gradient(theme)};

    ${fullWidth && wrapperModifiers.fullWidth()};

    ${props.disabled && disableModifier()}
    ${props.loading && loadingModifier()}

    ${media.lessThan('medium')`
      ${sizeModifier['small'](theme)};
    `}
  `}
`

export const ButtonLink = styled.a`
  button {
    width: 100%;
  }
`
