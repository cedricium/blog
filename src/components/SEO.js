import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

function SEO({ title, description, lang, meta }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = 
          description || data.site.siteMetadata.description
        const metaTitle = title || data.site.siteMetadata.title
        return (
          <Helmet
            htmlAttributes={{ lang: 'en' }}
            meta={[{ name: 'description', content: metaDescription }]}
            title={metaTitle}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
              },
              {
                property: `og:description`,
                content: metaDescription,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                property: `og:url`,
                content: `https://cedric.tech/blog`
              },
              {
                property: `og:image`,
                content: `https://cedric.tech/blog/og-image.png`
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:creator`,
                content: `@CedricAmaya`,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: `https://cedric.tech/blog/og-image.png`
              }
            ]}
          />
        )
      }}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: [],
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`