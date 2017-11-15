import {
  FETCHING_POST_LIST,
  FETCHING_POST_LIST_SUCCESS,
  FETCHING_POST_LIST_ERROR,
  SET_FILTERED_POST_CATEGORY,
  UNSET_FILTERED_POST_CATEGORY,
  SORT_POST_BY_DATE,
  SORT_POST_BY_SCORE,
  SORT_POST_BY_COMMENTS,
  OPEN_NEW_POST,
  OPEN_EDIT_POST,
  CLOSE_SET_POST,
  CREATING_POST,
  CREATING_POST_SUCCESS,
  CREATING_POST_ERROR,
  FETCHING_SINGLE_POST,
  FETCHING_SINGLE_POST_SUCCESS,
  FETCHING_SINGLE_POST_ERROR,
  UPDATING_POST,
  UPDATING_POST_SUCCESS,
  UPDATING_POST_ERROR,
  DELETING_POST,
  DELETING_POST_SUCCESS,
  DELETING_POST_ERROR,
  VOTING_UP_POST,
  VOTING_UP_POST_SUCCESS,
  VOTING_UP_POST_ERROR,
  VOTING_DOWN_POST,
  VOTING_DOWN_POST_SUCCESS,
  VOTING_DOWN_POST_ERROR,
} from '../types/PostActionTypes'

export function fetchingPostList () {
  return {
    type: FETCHING_POST_LIST,
  }
}
export function fetchingPostListSuccess (postList) {
  return {
    type: FETCHING_POST_LIST_SUCCESS,
    postList,
  }
}
export function fetchingPostListError (error) {
  console.warn('Fetching post list failed!')
  return {
    type: FETCHING_POST_LIST_ERROR,
    error,
  }
}

export function setFilteredPostCategory (categoryId) {
  return {
    type: SET_FILTERED_POST_CATEGORY,
    categoryId,
  }
}
export function unsetFilteredPostCategory () {
  return {
    type: UNSET_FILTERED_POST_CATEGORY,
  }
}

export function sortPostByDate () {
  return {
    type: SORT_POST_BY_DATE,
  }
}
export function sortPostByScore () {
  return {
    type: SORT_POST_BY_SCORE,
  }
}
export function sortPostByComments () {
  return {
    type: SORT_POST_BY_COMMENTS,
  }
}

export function openNewPost () {
  return {
    type: OPEN_NEW_POST,
  }
}
export function openEditPost (post) {
  return {
    type: OPEN_EDIT_POST,
    post,
  }
}
export function closeSetPost () {
  return {
    type: CLOSE_SET_POST,
  }
}

export function creatingPost () {
  return {
    type: CREATING_POST,
  }
}
export function creatingPostSuccess (post) {
  return {
    type: CREATING_POST_SUCCESS,
    post,
  }
}
export function creatingPostError (error) {
  console.warn('Creating post failed!')
  return {
    type: CREATING_POST_ERROR,
    error,
  }
}

export function fetchingSinglePost () {
  return {
    type: FETCHING_SINGLE_POST,
  }
}
export function fetchingSinglePostSuccess (post) {
  return {
    type: FETCHING_SINGLE_POST_SUCCESS,
    post,
  }
}
export function fetchingSinglePostError (error) {
  console.warn('Fetching a post failed!')
  return {
    type: FETCHING_SINGLE_POST_ERROR,
    error,
  }
}

export function updatingPost () {
  return {
    type: UPDATING_POST,
  }
}
export function updatingPostSuccess (post) {
  return {
    type: UPDATING_POST_SUCCESS,
    post,
  }
}
export function updatingPostError (error) {
  console.warn('Updating post failed!')
  return {
    type: UPDATING_POST_ERROR,
    error,
  }
}

export function deletingPost () {
  return {
    type: DELETING_POST,
  }
}
export function deletingPostSuccess (postId) {
  return {
    type: DELETING_POST_SUCCESS,
    postId,
  }
}
export function deletingPostError (error) {
  console.warn('Deleting post failed!')
  return {
    type: DELETING_POST_ERROR,
    error,
  }
}

export function votingUpPost () {
  return {
    type: VOTING_UP_POST,
  }
}
export function votingUpPostSuccess (post) {
  return {
    type: VOTING_UP_POST_SUCCESS,
    post
  }
}
export function votingUpPostError (error) {
  console.warn('Voting up post failed!')
  return {
    type: VOTING_UP_POST_ERROR,
    error,
  }
}

export function votingDownPost () {
  return {
    type: VOTING_DOWN_POST,
  }
}
export function votingDownPostSuccess (post) {
  return {
    type: VOTING_DOWN_POST_SUCCESS,
    post,
  }
}
export function votingDownPostError (error) {
  console.warn('Voting down post failed!')
  return {
    type: VOTING_DOWN_POST_ERROR,
    error,
  }
}
