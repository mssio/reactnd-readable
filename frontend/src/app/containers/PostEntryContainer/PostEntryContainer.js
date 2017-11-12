import React, { Component } from 'react'
import { PostEntry } from 'app/components'

class PostEntryContainer extends Component {
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
