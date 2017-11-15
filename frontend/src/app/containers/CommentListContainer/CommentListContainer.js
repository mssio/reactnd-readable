import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import uuidv4 from 'uuid/v4'
import { getUnixTimestamp } from 'app/utils/common'
import {
  handleFetchCommentList,
  handleCreateComment,
} from 'app/redux/creators/CommentActionCreator'
import { handleShowPost } from 'app/redux/creators/PostActionCreator'
import { Loading, CommentList } from 'app/components'

const { string } = PropTypes

class CommentListContainer extends Component {
  static propTypes = {
    postId: string.isRequired,
  }

  componentDidMount () {
    this.props.handleFetchCommentList(this.props.postId)
  }

  handleAddComment = async (payload) => {

    const newComment = {
      ...payload,
      author: this.props.username,
      timestamp: getUnixTimestamp(),
      parentId: this.props.postId,
      id: uuidv4(),
    }

    await this.props.handleCreateComment(newComment)
    await this.props.handleShowPost(this.props.postId)
  }

  commentSorter (a, b) {
    if (a.get('timestamp') < b.get('timestamp')) return 1
    else return -1
  }

  render () {
    const comments = this.props.comments.has(this.props.postId)
      ? this.props.comments.get(this.props.postId).sort(this.commentSorter)
      : Map({})

    return this.props.isLoading
      ? <Loading />
      : <CommentList
          comments={comments.valueSeq()}
          onAddComment={this.handleAddComment} />
  }
}

function mapStateToProps ({ CommentReducer, UserReducer }) {
  return {
    isLoading: CommentReducer.get('isLoading') || !CommentReducer.get('isFetched'),
    comments: CommentReducer.get('commentList'),
    username: UserReducer.get('username'),
  }
}

const actions = {
  handleFetchCommentList,
  handleCreateComment,
  handleShowPost,
}

export default connect(mapStateToProps, actions)(CommentListContainer)
