import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/Footer'

class AboutMe extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <h3>
          <Link style={{ boxShadow: 'none' }} to="/">
            {siteTitle}
          </Link>
        </h3>
        <p>
          Hi, I'm Cedric, a 20-something year old indie maker, coffee consumer,
          and coder. Born in Washington state, I currently live in California
          where I work as a software engineering intern at Moogsoft.
        </p>
        <p>
          I love building technically-challenging products that are intuitive
          and impactful. When I'm not in front of a computer screen, I'm most
          likely reading, playing football, or watching Netflix with my
          significant other.
        </p>
        <p>
          I love meeting people and making new connections, so feel free to
          reach out to me on any of the sites listed below. Cheers!
        </p>
        <Footer location={this.props.location} />
      </Layout>
    )
  }
}

export default AboutMe

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
