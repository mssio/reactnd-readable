export const FETCHING_COMMENT_LIST = 'FETCHING_COMMENT_LIST'
export const FETCHING_COMMENT_LIST_SUCCESS = 'FETCHING_COMMENT_LIST_SUCCESS'
export const FETCHING_COMMENT_LIST_ERROR = 'FETCHING_COMMENT_LIST_ERROR'

export function fetchingCommentList () {
  return {
    type: FETCHING_COMMENT_LIST,
  }
}
export function fetchingCommentListSuccess (postId, commentList) {
  return {
    type: FETCHING_COMMENT_LIST_SUCCESS,
    postId,
    commentList,
  }
}
export function fetchingCommentListError (error) {
  console.warn('Fetching comment list failed')
  return {
    type: FETCHING_COMMENT_LIST_ERROR,
    error,
  }
}
