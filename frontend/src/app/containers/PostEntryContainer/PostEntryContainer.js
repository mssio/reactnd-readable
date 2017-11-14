import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
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
    const isEditable = this.props.username === this.props.entry.get('author')

    return (
      <PostEntry
        entry={this.props.entry}
        isUpvoteDisabled={this.state.isUpvoteDisabled}
        isDownvoteDisabled={this.state.isDownvoteDisabled}
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote}
        isEditable={isEditable} />
    )
  }
}

function mapStateToProps ({ UserReducer }) {
  return {
    username: UserReducer.get('username'),
  }
}

export default connect(mapStateToProps)(PostEntryContainer)
