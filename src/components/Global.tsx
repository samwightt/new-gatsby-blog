import React from 'react'
import { defaultTheme, ThemeProvider, Preflight, Theme } from '@xstyled/emotion'

const theme: Theme = {
  ...defaultTheme,
  fonts: {
    text: 'neue-haas-grotesk-text, sans-serif',
    display: 'neue-haas-grotesk-display, sans-serif'
  }
}

const GlobalWrapper: React.FC = props => {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {props.children}
    </ThemeProvider>
  )
}

export default GlobalWrapper
