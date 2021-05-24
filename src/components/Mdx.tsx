import React from 'react'
import { MDXProvider, MDXProviderComponentsProp } from '@mdx-js/react'
import styled from '@xstyled/emotion'
import { H2, P, H3, H4, H5, H6, A } from './Typography'

const components: MDXProviderComponentsProp = {
  h1: styled(H2)`
    margin-top: 7;
    margin-bottom: 4;
  `,
  h2: styled(H3)`
    margin-top: 6;
    margin-bottom: 4;
  `,
  h3: styled(H4)`
    margin-top: 6;
    margin-bottom: 4;
  `,
  p: styled(P)`
    margin: 6 0;
    line-height: 2.2rem;
    font-size: 1.25rem;
  `,
  strong: styled.strong`
    font-family: text;
    font-weight: bold;
    color: black;
  `,
  a: A,
  h4: styled(H5)`
    margin: 4 0;
  `,
  h5: styled(H6)`
    margin: 4 0;
  `
}

export const MdxWrapper: React.FC = props => {
  return <MDXProvider components={components}>{props.children}</MDXProvider>
}
