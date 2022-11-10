import React from 'react'

import { act, fireEvent, render } from '@testing-library/react'
import { TextFieldWithMask } from './textfield.composition'

describe('TextField', () => {
  it('deve renderizar o valor digitado do TextField com mask', async () => {
    const { getByTestId } = render(<TextFieldWithMask />)

    const textfield: any = getByTestId('textfield')

    await act(async () => {
      fireEvent.change(textfield, { target: { value: '41988998899' } })
    })

    expect(textfield.value).toBe('(41) 98899-8899')
  })
})
