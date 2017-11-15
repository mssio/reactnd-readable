import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { openEditComment } from 'app/redux/actions/CommentActions'
import {
  handleDeleteComment,
  handleUpVoteComment,
  handleDownVoteComment,
} from 'app/redux/creators/CommentActionCreator'
import { handleShowPost } from 'app/redux/creators/PostActionCreator'
import { CommentEntry } from 'app/components'

const { object } = PropTypes

class CommentEntryContainer extends Component {
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
    this.props.handleUpVoteComment(this.props.entry.get('id'))
  }
  handleDownvote = () => {
    // not working anymore
    // this.setState({
    //   isUpvoteDisabled: false,
    //   isDownvoteDisabled: true,
    // })
    this.props.handleDownVoteComment(this.props.entry.get('id'))
  }

  handleOpenEditComment = () => {
    this.props.openEditComment(this.props.entry)
  }

  handleDeleteComment = async () => {
    await this.props.handleDeleteComment(this.props.entry)
    await this.props.handleShowPost(this.props.entry.get('parentId'))
  }

  render () {
    const isEditable = this.props.username === this.props.entry.get('author')

    return (
      <CommentEntry
        entry={this.props.entry}
        isUpvoteDisabled={this.state.isUpvoteDisabled}
        isDownvoteDisabled={this.state.isDownvoteDisabled}
        onUpvote={this.handleUpvote}
        onDownvote={this.handleDownvote}
        isEditable={isEditable}
        onEdit={this.handleOpenEditComment}
        onDelete={this.handleDeleteComment} />
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
    openEditComment: (comment) => dispatch(openEditComment(comment)),
    handleDeleteComment: (comment) => dispatch(handleDeleteComment(comment)),
    handleUpVoteComment: (commentId) => dispatch(handleUpVoteComment(commentId)),
    handleDownVoteComment: (commentId) => dispatch(handleDownVoteComment(commentId)),
    handleShowPost: (postId) => dispatch(handleShowPost(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentEntryContainer)
