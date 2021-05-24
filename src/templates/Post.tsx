import React from 'react'
import { graphql } from 'gatsby'
import { MainLayout, H1, P } from '../components'
import { MDXRenderer } from 'gatsby-plugin-mdx'

export const pageQuery = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
    }
  }
`

interface QueryResults {
  mdx: {
    frontmatter: {
      title: string
      date: string
    }
    body: string
  }
}

export default function Post ({ data }: { data: QueryResults }) {
  const {
    frontmatter: { title, date },
    body
  } = data.mdx

  return (
    <MainLayout>
      <H1>{title}</H1>
      <P mt={4} fontSize='xl' ml={2} aria-label='Publish date'>
        {date}
      </P>
      <MDXRenderer>{body}</MDXRenderer>
    </MainLayout>
  )
}
