import React from 'react'

import { act, cleanup, fireEvent, render } from '@testing-library/react'
import { BasicRadioGroup, RadioGroupWithWrap } from './radiogroup.composition'
import { theme } from '@egssistemas/ui-kit.theme'

describe('RadioGroup', () => {
  it('deve renderizar apenas um radio com check caso seja clicado', async () => {
    const { getAllByTestId } = render(<BasicRadioGroup />)

    const radios = getAllByTestId('radio')

    radios.forEach((radio) => {
      expect(radio).toHaveAttribute('data-checked', 'false')
    })

    const clickedRadio = radios[0]

    await act(async () => {
      fireEvent.click(clickedRadio)
    })

    expect(clickedRadio).toHaveAttribute('data-checked', 'true')
    expect(clickedRadio).toHaveStyle(`background: ${theme.colors.primary}10`)
    expect(radios[1]).toHaveAttribute('data-checked', 'false')
  })

  it('deve renderizar radiogroup na versão wrap', () => {
    const { getByTestId } = render(<RadioGroupWithWrap />)

    const radioWrapper = getByTestId('radio-wrapper')

    expect(radioWrapper).toHaveStyle('flex-wrap: wrap')
  })
})
