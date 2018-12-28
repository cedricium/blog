import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Footer from '../components/Footer'

class AboutMe extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location}>
        <h3>
          <Link style={{ boxShadow: 'none' }} to='/'>
            {siteTitle}
          </Link>
        </h3>
        <p>
          Hi, I'm Cedric, a 20-something year old indie maker, coffee consumer,
          and coder. I was born and raised in Washington state and currently
          reside in California where I go to college to study Computer
          Science.
        </p>
        <p>
          I love working day-to-day on projects that require multidisciplinary
          skillsets solving complex issues that make the lives of others
          easier.  When I'm not in front of a computer screen, I'm most likely
          writing blog posts, playing football with friends, or binge-watching
          some comedy show on Netflix with my significant other.
        </p>
        <p>
          I love meeting new people and making connections, so feel free to
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
