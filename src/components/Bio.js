import React from 'react'

import profilePic from '../assets/avatar.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
        }}
      >
        <img
          src={profilePic}
          alt={`Cedric Amaya`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
          }}
        />
        <p>
          Written by <strong>Cedric Amaya</strong>, a software engineering
          intern who enjoys writing about what is on his mind. You should{' '}
          <a
            href="https://twitter.com/cedricamaya"
            target="_blank"
            rel="noopener noreferrer"
          >
            follow him on Twitter
          </a>
          .
        </p>
      </div>
    )
  }
}

export default Bio
