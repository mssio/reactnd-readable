import { normalize, schema } from 'normalizr'
import {
  fetchingCommentList,
  fetchingCommentListSuccess,
  fetchingCommentListError,
} from '../actions/CommentActions'
import { svcFetchPostComments } from '../services/PostService'

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
      console.log(err)
      dispatch(fetchingCommentListError(err))
    }
  }
}
