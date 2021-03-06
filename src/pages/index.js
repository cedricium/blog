import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import SEO from '../components/SEO'
import { rhythm } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const siteDescription = data.site.siteMetadata.description
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3 style={{ marginBottom: rhythm(1 / 4) }}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small style={{ fontWeight: 500 }}>
                {node.frontmatter.date} &middot; {node.timeToRead} min read
              </small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.excerpt || node.excerpt,
                }}
              />
            </div>
          )
        })}
        <Footer location={this.props.location} />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { draft: { ne: true } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            draft
            date(formatString: "MMMM DD, YYYY")
            title
            excerpt
          }
        }
      }
    }
  }
`
