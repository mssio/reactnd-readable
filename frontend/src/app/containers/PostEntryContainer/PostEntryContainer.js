import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { openEditPost } from 'app/redux/actions/PostActions'
import {
  handleDeletePost,
  handleVoteUpPost,
  handleVoteDownPost,
} from 'app/redux/creators/PostActionCreator'
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
    // not working anymore
    // this.setState({
    //   isUpvoteDisabled: true,
    //   isDownvoteDisabled: false,
    // })
    this.props.handleVoteUpPost(this.props.entry.get('id'))
  }
  handleDownvote = () => {
    // not working anymore
    // this.setState({
    //   isUpvoteDisabled: false,
    //   isDownvoteDisabled: true,
    // })
    this.props.handleVoteDownPost(this.props.entry.get('id'))
  }

  handleOpenEditPost = () => {
    this.props.onOpenEditPost(this.props.entry)
  }

  handleDeletePost = () => {
    this.props.handleDeletePost(this.props.entry.get('id'))
  }

  render () {
    const isEditable = this.props.username === this.props.entry.get('author')

    return (
      <div>
        <PostEntry
          entry={this.props.entry}
          isUpvoteDisabled={this.state.isUpvoteDisabled}
          isDownvoteDisabled={this.state.isDownvoteDisabled}
          onUpvote={this.handleUpvote}
          onDownvote={this.handleDownvote}
          isEditable={isEditable}
          onEdit={this.handleOpenEditPost}
          onDelete={this.handleDeletePost} />
      </div>
    )
  }
}

function mapStateToProps ({ UserReducer }) {
  return {
    username: UserReducer.get('username'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onOpenEditPost: (post) => dispatch(openEditPost(post)),
    handleDeletePost: (postId) => dispatch(handleDeletePost(postId)),
    handleVoteUpPost: (postId) => dispatch(handleVoteUpPost(postId)),
    handleVoteDownPost: (postId) => dispatch(handleVoteDownPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEntryContainer)
