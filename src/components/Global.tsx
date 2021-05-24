import React from 'react'
import { defaultTheme, ThemeProvider, Preflight, Theme } from '@xstyled/emotion'
import { MdxWrapper } from './Mdx'

const theme: Theme = {
  ...defaultTheme,
  fonts: {
    text: 'neue-haas-grotesk-text, sans-serif',
    display: 'neue-haas-grotesk-display, sans-serif'
  }
}

const GlobalWrapper: React.FC = props => {
  return (
    <MdxWrapper>
      <ThemeProvider theme={theme}>
        <Preflight />
        {props.children}
      </ThemeProvider>
    </MdxWrapper>
  )
}

export default GlobalWrapper
