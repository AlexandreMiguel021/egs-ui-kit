import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'sans-serif';
    font-size: 1.6rem;
    font-feature-settings: 'pnum' on, 'lnum' on;
  }

  button {
    -webkit-tap-highlight-color: transparent;
  }

  a {
    text-decoration: none;
  }

  P {
    line-height: 180%;
    letter-spacing: 2%;
  }

  img {
    user-select: none;
  }

  h1 {
    line-height: 120%;
    letter-spacing: -1%;
  }

  h2 {
    line-height: 150%;
    letter-spacing: -0.01em;
  }

 li {
    list-style: none;
  }
`
