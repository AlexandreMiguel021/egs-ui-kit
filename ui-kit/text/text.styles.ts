import styled, { css, DefaultTheme } from 'styled-components'
import { TextProps } from '.'

const textModifier = {
  titleTheme: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 10%;
    font-weight: 600;
  `
}

const withIconModifier = (theme: DefaultTheme) => css`
  display: flex;
  gap: ${theme.spacings.xxs};
  align-items: center;
  width: 100%;
`

export const Text = styled.div.attrs<TextProps>(({ component = 'p' }) => ({
  as: component
}))<TextProps>`
  ${({ theme, size = 'md', color = 'text', ...props }) => css`
    font-weight: ${props.weigth ? theme.font[props.weigth!] : '500'};
    font-size: ${theme.font.sizes[size!]};
    text-transform: ${props.transform ? props.transform : 'none'};
    text-align: ${props.align};
    color: ${theme.colors[color!]};

    svg {
      width: ${`calc(${theme.font.sizes[size]} * 1.4)`};
      height: ${`calc(${theme.font.sizes[size]} * 1.4)`};
      width: ${`calc(${theme.font.sizes[size]} * 1.4)`};
      height: ${`calc(${theme.font.sizes[size]} * 1.4)`};
    }

    ${props.flex && withIconModifier(theme)}
    ${props.titleTheme && textModifier.titleTheme(theme)};
  `}
`
