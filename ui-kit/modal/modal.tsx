import React from 'react'
import * as S from './modal.styles'
import { ModalProps } from './modal.types'

const ModalContent = ({ children, ...props }: ModalProps) => (
  <S.Portal>
    <S.Overlay />
    <S.Content {...props}>
      <S.Wrapper>{children}</S.Wrapper>
      <S.Close aria-label="fechar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="192"
          height="192"
          viewBox="0 0 256 256"
        >
          <path fill="none" d="M0 0h256v256H0z" />
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
            d="M200 56 56 200m144 0L56 56"
          />
        </svg>
      </S.Close>
    </S.Content>
  </S.Portal>
)

export const Modal = {
  Root: S.Root,
  Trigger: S.Trigger,
  Content: ModalContent
}
