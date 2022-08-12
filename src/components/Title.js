import React from 'react'

class Bio extends React.Component {
  render() {
    return (
        <div>
            <a href={this.props.slug}>
                    {this.props.title}
                </a>

        </div>
    )
  }
}

export default Bio
