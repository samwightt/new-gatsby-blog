import React from 'react'
import { Helmet } from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
  }
`

interface QueryResults {
  site: {
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
      siteUrl: string
      twitterUsername: string
    }
  }
}

export interface SEOProps {
  title?: string
  description?: string
  image?: string
  article?: boolean
}

const SEO: React.FC<SEOProps> = ({ title, description, image, article }) => {
  const { pathname } = useLocation()
  const { site }: QueryResults = useStaticQuery(query)

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    twitterUsername
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={title && `%s | ${defaultTitle}`}>
      <meta name='description' content={seo.description} />
      {seo.url && <meta property='og:url' content={seo.url} />}

      {(article ? true : null) && <meta property='og:type' content='article' />}
      {seo.title && <meta property='og:title' content={seo.title} />}
      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      <meta name='twitter:card' content='summary_large_image' />
      {twitterUsername && (
        <meta name='twitter:creator' content={twitterUsername} />
      )}
      {seo.title && <meta name='twitter:title' content={seo.title} />}
      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}
    </Helmet>
  )
}

export default SEO
