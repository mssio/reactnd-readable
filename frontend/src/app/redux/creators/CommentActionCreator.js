import { normalize, schema } from 'normalizr'
import {
  fetchingCommentList,
  fetchingCommentListSuccess,
  fetchingCommentListError,
  creatingComment,
  creatingCommentSuccess,
  creatingCommentError,
  updatingComment,
  updatingCommentSuccess,
  updatingCommentError,
  deletingComment,
  deletingCommentSuccess,
  deletingCommentError,
  upVotingComment,
  upVotingCommentSuccess,
  upVotingCommentError,
  downVotingComment,
  downVotingCommentSuccess,
  downVotingCommentError,
} from '../actions/CommentActions'
import {
  svcFetchPostComments,
  svcCreateComment,
  svcUpdateComment,
  svcDeleteComment,
  svcUpVoteComment,
  svcDownVoteComment,
} from '../services/CommentService'

export function handleFetchCommentList (postId) {
  return async function (dispatch) {
    dispatch(fetchingCommentList())

    try {
      const comments = await svcFetchPostComments(postId)
      const commentSchema = new schema.Entity('comments', {}, {
        idAttribute: 'id'
      })
      const commentListSchema = new schema.Array(commentSchema)
      const normalizrComments = normalize(comments, commentListSchema)
      const normalizedComments = normalizrComments.entities.hasOwnProperty('comments') ? normalizrComments.entities.comments : {}

      dispatch(fetchingCommentListSuccess(postId, normalizedComments))
    } catch (err) {
      dispatch(fetchingCommentListError(err))
    }
  }
}

export function handleCreateComment (commentData) {
  return async function (dispatch) {
    dispatch(creatingComment())

    try {
      const comment = await svcCreateComment(commentData)
      dispatch(creatingCommentSuccess(comment))
    } catch (err) {
      dispatch(creatingCommentError(err))
    }
  }
}

export function handleUpdateComment (commentId, commentData) {
  return async function (dispatch) {
    dispatch(updatingComment())

    try {
      const updatedComment = await svcUpdateComment(commentId, commentData)
      dispatch(updatingCommentSuccess(updatedComment))
    } catch (err) {
      dispatch(updatingCommentError(err))
    }
  }
}

export function handleDeleteComment (comment) {
  return async function (dispatch) {
    dispatch(deletingComment())

    try {
      await svcDeleteComment(comment.get('id'))
      dispatch(deletingCommentSuccess(comment.toJS()))
    } catch (err) {
      dispatch(deletingCommentError(err))
    }
  }
}

export function handleUpVoteComment (commentId) {
  return async function (dispatch) {
    dispatch(upVotingComment())

    try {
      const updatedComment = await svcUpVoteComment(commentId)
      dispatch(upVotingCommentSuccess(updatedComment))
    } catch (err) {
      dispatch(upVotingCommentError(err))
    }
  }
}

export function handleDownVoteComment (commentId) {
  return async function (dispatch) {
    dispatch(downVotingComment())

    try {
      const updatedComment = await svcDownVoteComment(commentId)
      dispatch(downVotingCommentSuccess(updatedComment))
    } catch(err) {
      dispatch(downVotingCommentError(err))
    }
  }
}
