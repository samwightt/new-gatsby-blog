import React from 'react'
import GlobalWrapper from './src/components/Global'

export const wrapRootElement = ({ element }) => {
  return <GlobalWrapper>{element}</GlobalWrapper>
}
