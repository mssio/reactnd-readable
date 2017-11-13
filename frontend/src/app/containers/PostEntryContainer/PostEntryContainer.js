import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { PostEntry } from 'app/components'

const { object } = PropTypes

class PostEntryContainer extends Component {
  static propTypes = {
    entry: object.isRequired,
  }

  state = {
    isUpvoteDisabled: false,
    isDownvoteDisabled: false,
  }

  handleUpvote = () => {
    this.setState({
      isUpvoteDisabled: true,
      isDownvoteDisabled: false,
    })
  }
  handleDownvote = () => {
    this.setState({
      isUpvoteDisabled: false,
      isDownvoteDisabled: true,
    })
  }

  render () {
    return (
      <PostEntry
        entry={this.props.entry}
        isUpvoteDisabled={this.state.isUpvoteDisabled}
        isDownvoteDisabled={this.state.isDownvoteDisabled}
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote} />
    )
  }
}

export default PostEntryContainer
