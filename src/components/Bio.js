import React from 'react'

import profilePic from './profile-pic.jpeg'
import typography from '../utils/typography'
const rhythm = typography.rhythm

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(1)
        }}
      >
        <img
          src={profilePic}
          alt={`Ali Talpur`}
          style={{
            marginRight: rhythm(1 / 2),
            marginTop: 'auto',
            marginBottom: 'auto',
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%'
          }}
        />
        <p style={{
          marginBottom: 0
        }}>
          Hi, I'm <strong>Ali Talpur</strong>. I use this site to share and bookmark 
          various things, mostly my work with computers. I work as a SRE @ Coalition Inc. 
          I love solving problems of scale and distributed systems. At night I enjoy 
          working as an indie hacker, creating, building projects and perfecting my craft.
          This site reflects my own opinions and not my employee.
        </p>
      </div>
    )
  }
}

export default Bio
