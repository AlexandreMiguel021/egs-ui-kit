export type Theme = {
  grid: {
    container: string
    gutter: string
  }
  borderRadius: {
    medium: string
    small: string
  }
  font: {
    family: string
    light: number
    normal: number
    bold: number
    sizes: {
      xxs: string
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
      xxl: string
      '2xl': string
    }
    weight: {
      light: number
      normal: number
      bold: number
      extraBold: number
    }
  }
  colors: {
    title: string
    text: string
    white: string
    black: string
    gradient: string
    primary: string
    primary500: string
    primary200: string
    primary100: string
    primary50: string
    secondary: string
    secondary300: string
    secondary200: string
    secondary100: string
    secondary50: string
    gray300: string
    gray200: string
    gray150: string
    gray100: string
    gray50: string
    success500: string
    success100: string
    danger: string
    background: string
  }
  spacings: {
    xxs: string
    xs: string
    sm: string
    md: string
    lg: string
    xl: string
    xxl: string
  }
  shadow: {
    shadowDark1: string
    shadowDark2: string
    shadowDark3: string
    shadowDark4: string
    shadowLight1: string
    shadowLight2: string
  }
  zindex: {
    levelZero: number
    levelOne: number
    levelTwo: number
    levelThee: number
    levelFour: number
    levelFive: number
  }
  input: {
    padding: {
      sm: string
      md: string
      lg: string
    }
    sizes: {
      xs: string
      sm: string
      md: string
      lg: string
    }
  }
}
