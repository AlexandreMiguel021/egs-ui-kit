import { GlobalStyles, theme } from '@egssistemas/ui-kit.theme'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './button'

export const PrimaryButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary>hello world!</Button>
    </ThemeProvider>
  )
}
export const SecondaryButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button secondary>hello world!</Button>
    </ThemeProvider>
  )
}
export const OutlineButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button outline>hello world!</Button>
    </ThemeProvider>
  )
}
export const GradientButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button gradient>hello world!</Button>
    </ThemeProvider>
  )
}

export const SmallButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary sm>
        hello world!
      </Button>
    </ThemeProvider>
  )
}

export const MediumButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary md>
        hello world!
      </Button>
    </ThemeProvider>
  )
}

export const LargeButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary lg>
        hello world!
      </Button>
    </ThemeProvider>
  )
}

export const LoadingButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary loading={true}>
        button loading
      </Button>
    </ThemeProvider>
  )
}

export const disabledButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button primary disabled>
        button loading
      </Button>
    </ThemeProvider>
  )
}
