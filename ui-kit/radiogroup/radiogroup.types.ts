export interface RadioGroupProps<T> {
  values: Array<{
    text: string
    value: T
  }>
  wrap?: boolean
  name: string
  label: string
}
