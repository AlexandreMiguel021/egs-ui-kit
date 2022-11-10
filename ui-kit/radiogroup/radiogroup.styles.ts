import styled, { css, DefaultTheme } from 'styled-components'
import { Check } from '@egssistemas/icons.icons'
import media from 'styled-media-query'

export const Radio = styled(Check)(
  ({ theme }) => css`
    background-color: transparent;
    display: flex;
    border-radius: 100%;
    border: 0.1rem solid ${theme.colors.text};
    width: 2rem;
    height: 2rem;
    transition: all 0.3s;
    color: transparent;
    border: 1px solid ${theme.colors.gray300};

    &[data-checked='true'] {
      border: 1px solid ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `
)

export const Wrapper = styled.div(
  ({ theme }) => css`
    gap: ${theme.spacings.xxs};
    padding-top: ${theme.spacings.xxs};
    display: flex;
    width: 100%;
    padding-bottom: 0.4rem;

    &[data-wrap='true'] {
      flex-wrap: wrap;
    }

    ${media.lessThan('medium')`
      flex-wrap: wrap;
   `}
  `
)

export const Option = styled.div`
  width: 100%;
`

export const OptionWrapper = styled.div(
  ({ theme }) => css`
    padding: ${theme.input.padding.sm};
    border: 1px solid ${theme.colors.gray300};
    gap: ${theme.spacings.xxs};
    font-size: ${theme.font.sizes.sm};
    color: ${theme.colors.text};
    width: 100%;
    display: flex;
    line-height: 130%;
    justify-content: center;
    border-radius: 0.9rem;
    outline: none;
    cursor: pointer;
    align-items: center;
    min-width: 9rem;

    &[data-checked='true'] {
      background: ${theme.colors.primary}10;
      border: 1px solid ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
  `
)
