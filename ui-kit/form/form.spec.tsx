import React from 'react'
import { fireEvent, render, renderHook } from '@testing-library/react'
import { Form } from './form'
import { useForm } from 'react-hook-form'

describe('Form', () => {
  it('should called a submit function on button click', () => {
    const { result } = renderHook(() => useForm())

    const simulateSubmit = jest.fn(() => {
      console.log
    })

    const { getByRole } = render(
      <Form methods={result.current} onSubmit={simulateSubmit}>
        <button onClick={simulateSubmit} type="submit">
          submit
        </button>
      </Form>
    )

    fireEvent.click(getByRole('button'))
    expect(simulateSubmit).toHaveBeenCalled()
  })
})
