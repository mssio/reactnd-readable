import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeEditComment } from 'app/redux/actions/CommentActions'
import { handleUpdateComment } from 'app/redux/creators/CommentActionCreator'
import { EditCommentDialog } from 'app/components'

class EditCommentContainer extends Component {
  handleSubmit = async (payload) => {
    await this.props.handleUpdateComment(this.props.comment.get('id'), payload)
    this.props.onClose()
  }

  render () {
    return (
      <EditCommentDialog
        isOpen={this.props.isOpen}
        onClose={this.props.onClose}
        onSubmit={this.handleSubmit}
        comment={this.props.comment} />
    )
  }
}

function mapStateToProps ({ CommentReducer }) {
  return {
    isOpen: CommentReducer.get('commentDialog').get('isOpen'),
    comment: CommentReducer.get('commentDialog').get('comment'),
  }
}

function mapDispatchToProps (dispatch) {
  return {
    onClose: () => dispatch(closeEditComment()),
    handleUpdateComment: (commentId, commentData) => dispatch(handleUpdateComment(commentId, commentData)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCommentContainer)
