export const FETCHING_COMMENT_LIST = 'FETCHING_COMMENT_LIST'
export const FETCHING_COMMENT_LIST_SUCCESS = 'FETCHING_COMMENT_LIST_SUCCESS'
export const FETCHING_COMMENT_LIST_ERROR = 'FETCHING_COMMENT_LIST_ERROR'

export const CREATING_COMMENT = 'CREATING_COMMENT'
export const CREATING_COMMENT_SUCCESS = 'CREATING_COMMENT_SUCCESS'
export const CREATING_COMMENT_ERROR = 'CREATING_COMMENT_ERROR'

export const OPEN_EDIT_COMMENT = 'OPEN_EDIT_COMMENT'
export const CLOSE_EDIT_COMMENT = 'CLOSE_EDIT_COMMENT'

export const UPDATING_COMMENT = 'UPDATING_COMMENT'
export const UPDATING_COMMENT_SUCCESS = 'UPDATING_COMMENT_SUCCESS'
export const UPDATING_COMMENT_ERROR = 'UPDATING_COMMENT_ERROR'

export const DELETING_COMMENT = 'DELETING_COMMENT'
export const DELETING_COMMENT_SUCCESS = 'DELETING_COMMENT_SUCCESS'
export const DELETING_COMMENT_ERROR = 'DELETING_COMMENT_ERROR'

export const UP_VOTING_COMMENT = 'UP_VOTING_COMMENT'
export const UP_VOTING_COMMENT_SUCCESS = 'UP_VOTING_COMMENT_SUCCESS'
export const UP_VOTING_COMMENT_ERROR = 'UP_VOTING_COMMENT_ERROR'

export const DOWN_VOTING_COMMENT = 'DOWN_VOTING_COMMENT'
export const DOWN_VOTING_COMMENT_SUCCESS = 'DOWN_VOTING_COMMENT_SUCCESS'
export const DOWN_VOTING_COMMENT_ERROR = 'DOWN_VOTING_COMMENT_ERROR'

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

export function creatingComment () {
  return {
    type: CREATING_COMMENT,
  }
}
export function creatingCommentSuccess (comment) {
  return {
    type: CREATING_COMMENT_SUCCESS,
    comment,
  }
}
export function creatingCommentError (error) {
  console.warn('Creating comment failed!')
  return {
    type: CREATING_COMMENT_ERROR,
    error,
  }
}

export function openEditComment (comment) {
  return {
    type: OPEN_EDIT_COMMENT,
    comment,
  }
}
export function closeEditComment () {
  return {
    type: CLOSE_EDIT_COMMENT,
  }
}

export function updatingComment () {
  return {
    type: UPDATING_COMMENT,
  }
}
export function updatingCommentSuccess (comment) {
  return {
    type: UPDATING_COMMENT_SUCCESS,
    comment,
  }
}
export function updatingCommentError (error) {
  console.warn('Updating comment failed!')
  return {
    type: UPDATING_COMMENT_ERROR,
    error,
  }
}

export function deletingComment () {
  return {
    type: DELETING_COMMENT,
  }
}
export function deletingCommentSuccess (comment) {
  return {
    type: DELETING_COMMENT_SUCCESS,
    comment,
  }
}
export function deletingCommentError (error) {
  console.warn('Deleting comment failed!')
  return {
    type: DELETING_COMMENT_ERROR,
    error,
  }
}

export function upVotingComment () {
  return {
    type: UP_VOTING_COMMENT,
  }
}
export function upVotingCommentSuccess (comment) {
  return {
    type: UP_VOTING_COMMENT_SUCCESS,
    comment,
  }
}
export function upVotingCommentError (error) {
  console.warn('UpVoting comment failed!')
  return {
    type: UP_VOTING_COMMENT_ERROR,
    error,
  }
}

export function downVotingComment () {
  return {
    type: DOWN_VOTING_COMMENT,
  }
}
export function downVotingCommentSuccess (comment) {
  return {
    type: DOWN_VOTING_COMMENT_SUCCESS,
    comment,
  }
}
export function downVotingCommentError (error) {
  console.warn('DownVoting comment failed!')
  return {
    type: DOWN_VOTING_COMMENT_ERROR,
    error,
  }
}
