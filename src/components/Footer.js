import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    const NODE_ENV = process.env.NODE_ENV || 'development'
    const rootPath = (NODE_ENV === 'production')
      ? 'https://cedric.tech/blog'
      : 'localhost:8000'

    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a
            href={`${rootPath}/rss.xml`}
            target="_blank"
            rel="noopener noreferrer"
          >rss</a>
        </div>
        <a
          href="https://twitter.com/cedricamaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </a> &bull;{' '}
        <a
          href="https://github.com/cedricium"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a> &bull;{' '}
        <a
          href="https://linkedin.com/in/cedricamaya"
          target="_blank"
          rel="noopener noreferrer">
          linkedin
        </a>
        {
          !this.props.location.pathname.includes('/about') &&
          <span>
            {' '}&bull;{' '}
            <Link
              to="/about">
              about me
            </Link>
          </span>
        }
      </footer>
    )
  }
}

export default Footer
