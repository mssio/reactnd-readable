import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Map } from 'immutable'
import { handleFetchCommentList } from 'app/redux/creators/CommentActionCreator'
import { Loading, CommentList } from 'app/components'

const { string } = PropTypes

class CommentListContainer extends Component {
  static propTypes = {
    postId: string.isRequired,
  }

  componentDidMount () {
    this.props.handleFetchCommentList(this.props.postId)
  }

  render () {
    const comments = this.props.comments.has(this.props.postId)
      ? this.props.comments.get(this.props.postId)
      : Map({})

    return this.props.isLoading
      ? <Loading />
      : <CommentList comments={comments.valueSeq()}/>
  }
}

function mapStateToProps ({ CommentReducer }) {
  return {
    isLoading: CommentReducer.get('isLoading') || !CommentReducer.get('isFetched'),
    comments: CommentReducer.get('commentList'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    handleFetchCommentList: (postId) => dispatch(handleFetchCommentList(postId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentListContainer)
