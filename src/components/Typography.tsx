import React from 'react'
import { Link } from 'gatsby'
import styled from '@xstyled/emotion'
import { makeUnderline } from './Underline'

export const H1 = styled.h1Box`
  font-family: display;
  font-size: 6xl;
  font-weight: bold;
  color: gray-900;
`

export const H2 = styled.h2Box`
  font-family: display;
  font-size: 5xl;
  font-weight: bold;
  color: gray-900;
`

export const H3 = styled.h3Box`
  font-family: display;
  font-size: 4xl;
  font-weight: bold;
  color: gray-900;
`

export const H4 = styled.h4Box`
  font-family: display;
  font-size: 3xl;
  font-weight: bold;
  color: gray-800;
`

export const H5 = styled.h5Box`
  font-family: display;
  font-size: 2xl;
  font-weight: bold;
  color: gray-800;
`

export const H6 = styled.h6Box`
  font-family: display;
  font-size: xl;
  font-weight: bold;
  color: gray-700;
`

const StyledLink = styled(
  makeUnderline(Link, {
    color: 'purple-700',
    size: 'small'
  })
)`
  font-family: text;
  color: gray-800;
  font-weight: bold;
`

const StyledA = makeUnderline(
  styled.a`
    font-weight: bold;
    color: gray-700;
    font-family: text;
  `,
  {
    color: 'purple-700',
    size: 'small'
  }
)

export const A = (props: React.HTMLProps<HTMLAnchorElement>) => {
  if (
    props.className?.match('gatsby-resp-image-link') ||
    props.href?.match(/^\/static/)
  )
    return <a {...props} />
  else if (props.href && props.href.match(/^\//)) {
    return <StyledLink to={props.href} {...props} />
  } else return <StyledA {...(props as any)} />
}

export const P = styled.pBox`
  font-size: lg;
  line-height: relaxed;
  font-family: text;
  color: gray-800;
`
