import { FormHTMLAttributes, ReactElement } from 'react'
import { FieldValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

export interface FormProps<T extends FieldValues>
  extends Omit<FormHTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  shadow?: boolean
  methods: UseFormReturn<any, T>
  children: ReactElement | ReactElement[]
  onSubmit: SubmitHandler<T>
}
