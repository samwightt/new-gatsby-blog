import { Theme } from 'theme-ui'
import { toTheme } from '@theme-ui/typography'

const typographyTheme = toTheme({
  scaleRatio: 3,
  headerFontFamily: ['neue-haas-grotesk-display', 'sans-serif'],
  bodyFontFamily: ['neue-haas-grotesk-text', 'sans-serif'],
  baseFontSize: '22px',
  baseLineHeight: 1.9,
  blockMarginBottom: 1,
  headerWeight: 'bold'
})

const theme: Theme = {
  ...typographyTheme,
  colors: {
    text: '#1F2937',
    background: '#fff'
  }
}

console.log(theme)

export default theme
