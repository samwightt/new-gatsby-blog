import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { x, th, useColor } from '@xstyled/emotion'
import tinycolor from 'tinycolor2'

interface QueryResults {
  site: {
    siteMetadata: {
      title: string
      tagline: string
    }
  }
  allMdx: {
    nodes: {
      frontmatter: {
        title: string
        slug: string
        date: string
      }
      excerpt: string
    }[]
  }
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tagline
      }
    }
    allMdx(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM DD, YYYY")
        }
        excerpt(pruneLength: 500)
      }
    }
  }
`

const Container = styled.div`
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
    max-width: 5xl;
    padding: 0;
  }
`

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

const Row = styled.divBox`
  display: flex;
  justify-items: center;
  align-items: center;
`

interface CreateUnderlineProps {
  color: string
  bottomOffset?: number
  underlineSize?: number
  lineHeight?: number
}

const getReadableColor = (
  color: string,
  backgroundColor: string,
  size: 'small' | 'large'
) => {
  const background = tinycolor(backgroundColor)
  let currentColor = tinycolor(color)
  while (
    !(tinycolor as any).isReadable(currentColor, background, {
      level: 'AA',
      size
    })
  ) {
    currentColor = currentColor.darken()
  }

  return currentColor.toString()
}

function createUnderline<T = unknown> (
  component: React.ComponentType<T>,
  props?: CreateUnderlineProps
) {
  return (x: T) => {
    const baseColor = th.color('gray-200')
    const themeColor = useColor(props?.color || 'gray-800')

    const fixedColor = getReadableColor(themeColor, 'white', 'small')

    const underlineSize = props?.underlineSize
      ? th.size(props.underlineSize)
      : th.size(0.12)
    const lineHeight = props?.lineHeight
      ? th.lineHeight(props.lineHeight)
      : th.lineHeight(1.5)
    const paddingBottom = props?.bottomOffset
      ? th.space(props.bottomOffset)
      : th.space(1)

    const Main = styled(component)`
      text-decoration: none;
      padding-bottom: ${paddingBottom};
      background: linear-gradient(to right, ${baseColor}, ${baseColor}),
        linear-gradient(to right, ${fixedColor}, ${fixedColor});
      background-size: 100% ${underlineSize}, 0 ${underlineSize};
      line-height: ${lineHeight};
      background-position: 100% 100%, 0 100%;
      background-repeat: no-repeat;
      transition-property: background-size color;
      transition-duration: 300ms;
      transition-timing-function: ease-in-out;

      &:hover,
      &:focus {
        color: ${fixedColor};
        background-size: 0 ${underlineSize}, 100% ${underlineSize};
      }
    `

    return <Main {...x} />
  }
}

const HeaderLink = styled.a`
  font-family: text;
  font-weight: 600;
  font-size: lg;
  color: gray-700;
  outline: none;
`

const spacing = {
  underlineSize: 0.14,
  bottomOffset: 1
}

const createLink = (color: string) => {
  const newLink = createUnderline(HeaderLink, {
    color,
    ...spacing
  })

  return newLink
}

const TwitterLink = createLink('blue-400')
const GithubLink = createLink('gray-800')
const LinkedinLink = createLink('blue-700')
const InstagramLink = createLink('red-500')

const DefaultLink = styled(
  createUnderline(Link, {
    color: 'purple-500',
    bottomOffset: 1.5
  })
)`
  outline: none;
  color: gray-800;
`

const IndexPage: React.FC<{ data: QueryResults }> = ({ data }) => {
  const { site, allMdx } = data
  const { nodes: posts } = allMdx
  const { title, tagline } = site.siteMetadata

  return (
    <Container>
      <x.div my={32}>
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
      </x.div>
      <x.main>
        {posts.map(({ frontmatter, excerpt }) => {
          return (
            <div>
              <x.h2 fontFamily='display' fontWeight='bold' fontSize='5xl'>
                <DefaultLink to={`/blog/${frontmatter.slug}`}>
                  {frontmatter.title}
                </DefaultLink>
              </x.h2>
              <x.p
                fontFamily='text'
                marginTop='4'
                fontSize='xl'
                aria-label='Published at'
              >
                {frontmatter.date}
              </x.p>
              <x.p
                fontSize='lg'
                lineHeight='relaxed'
                fontFamily='text'
                marginTop='6'
              >
                {excerpt}
              </x.p>
            </div>
          )
        })}
      </x.main>
    </Container>
  )
}

export default IndexPage
