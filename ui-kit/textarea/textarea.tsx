import styled, { css } from 'styled-components'
import { TextAreaProps } from './textarea.types'

export const TextArea = styled.textarea<any>(
  ({ theme, error }: TextAreaProps) => css`
    max-width: 100%;
    max-height: 30rem;
    border-radius: 0.9rem;
    padding: ${theme.input.padding.md};
    font-size: ${theme.font.sizes.md};
    font-family: ${theme.font.family};
    color: ${theme.colors.text};
    resize: vertical;
    min-height: 8rem;
    border: 1px solid ${theme.colors.gray300};
    border-color: ${error && theme.colors.danger};

    :focus {
      outline: none;
    }
  `
)
