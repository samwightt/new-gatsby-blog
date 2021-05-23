import React from 'react'
import GlobalWrapper from './src/components/Global'
import { getColorModeInitScriptElement } from '@xstyled/emotion'

export const wrapRootElement = ({ element }) => {
  return <GlobalWrapper>{element}</GlobalWrapper>
}

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([getColorModeInitScriptElement()])
}
