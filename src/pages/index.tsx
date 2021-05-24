import React from 'react'
import { graphql, Link } from 'gatsby'
import styled, { x } from '@xstyled/emotion'
import { makeUnderline, H2, P, HomeLayout } from '../components'

interface QueryResults {
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

const DefaultLink = styled(
  makeUnderline(Link, {
    color: 'purple-500',
    bottomOffset: 1.5,
    size: 'large'
  })
)`
  outline: none;
  color: gray-800;
`

const IndexPage: React.FC<{ data: QueryResults }> = ({ data }) => {
  const { allMdx } = data
  const { nodes: posts } = allMdx

  return (
    <HomeLayout>
      <x.div spaceY={10} pb={32}>
        {posts.map(({ frontmatter, excerpt }) => {
          return (
            <div>
              <H2 fontSize='4xl'>
                <DefaultLink to={`/blog/${frontmatter.slug}`}>
                  {frontmatter.title}
                </DefaultLink>
              </H2>
              <P marginTop='4' fontSize='xl' aria-label='Published at'>
                {frontmatter.date}
              </P>
              {/* <P marginTop='6'>{excerpt}</P> */}
            </div>
          )
        })}
      </x.div>
    </HomeLayout>
  )
}

export default IndexPage
