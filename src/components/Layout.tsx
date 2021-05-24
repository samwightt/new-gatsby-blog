import React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { x } from '@xstyled/emotion'
import { makeUnderline } from './Underline'
import SEO, { SEOProps } from './Seo'

export const Container = styled.div`
  max-width: 3xl;
  padding: 0 4;
  margin: 0 auto;

  @media (min-width: md) {
    padding: 0 2;
  }
  @media (min-width: lg) {
    max-width: 4xl;
    padding: 0;
  }
  @media (min-width: xl) {
    max-width: 4xl;
    padding: 0;
  }
`

export const Row = styled.divBox`
  display: flex;
  justify-items: center;
  align-items: center;
`

interface HomeQueryResult {
  site: {
    siteMetadata: {
      title: string
      tagline: string
    }
  }
}

const LargeHeading = styled.h1`
  font-size: 9xl;
  line-height: 1;
  font-weight: bold;
  font-family: display;
  width: 100%;
`

const Tagline = styled.p`
  font-family: text;
  font-size: xl;
  color: gray-700;
  line-height: relaxed;
  margin-top: 8;
`

const HeaderLink = styled.a`
  font-family: text;
  font-weight: bold;
  font-size: lg;
  color: gray-700;
  outline: none;
`

const createLink = (color: string) => {
  const newLink = makeUnderline(HeaderLink, {
    color,
    size: 'small',
    underlineSize: 0.14,
    bottomOffset: 1
  })

  return newLink
}

const TwitterLink = createLink('blue-400')
const GithubLink = createLink('gray-800')
const LinkedinLink = createLink('blue-700')
const InstagramLink = createLink('red-500')

export const HomeLayout: React.FC = props => {
  const {
    site: {
      siteMetadata: { title, tagline }
    }
  }: HomeQueryResult = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

  return (
    <Container>
      <SEO />
      <x.header my={32}>
        <LargeHeading>{title}</LargeHeading>
        <Tagline>{tagline}</Tagline>
        <Row mt='6' spaceX='3'>
          <TwitterLink href='https://twitter.com/samwightt'>
            Twitter
          </TwitterLink>
          <GithubLink href='https://github.com/samwightt'>GitHub</GithubLink>
          <LinkedinLink href='https://linkedin.com/in/samwightt'>
            LinkedIn
          </LinkedinLink>
          <InstagramLink href='https://linkedin.com/in/samwightt'>
            Instagram
          </InstagramLink>
        </Row>
      </x.header>
      <x.main>{props.children}</x.main>
    </Container>
  )
}

const NavLink = styled(
  makeUnderline(Link, {
    color: 'purple-500',
    size: 'large'
  })
)`
  font-size: 2xl;
  font-weight: bold;
`

export const MainLayout: React.FC<SEOProps> = ({ children, ...props }) => {
  return (
    <Container>
      <SEO {...props} />
      <x.header mb={6}>
        <x.nav w='full' py={4}>
          <NavLink to='/'>Sam Wight</NavLink>
        </x.nav>
      </x.header>
      <x.main py={10}>{children}</x.main>
    </Container>
  )
}
