export const FETCHING_POST_LIST = 'FETCHING_POST_LIST'
export const FETCHING_POST_LIST_SUCCESS = 'FETCHING_POST_LIST_SUCCESS'
export const FETCHING_POST_LIST_ERROR = 'FETCHING_POST_LIST_ERROR'

export const SET_FILTERED_POST_CATEGORY = 'SET_FILTERED_POST_CATEGORY'
export const UNSET_FILTERED_POST_CATEGORY = 'UNSET_FILTERED_POST_CATEGORY'

export const OPEN_NEW_POST = 'OPEN_NEW_POST'
export const OPEN_EDIT_POST = 'OPEN_EDIT_POST'
export const CLOSE_SET_POST = 'CLOSE_SET_POST'

export const CREATING_POST = 'CREATING_POST'
export const CREATING_POST_SUCCESS = 'CREATING_POST_SUCCESS'
export const CREATING_POST_ERROR = 'CREATING_POST_ERROR'

export const UPDATING_POST = 'UPDATING_POST'
export const UPDATING_POST_SUCCESS = 'UPDATING_POST_SUCCESS'
export const UPDATING_POST_ERROR = 'UPDATING_POST_ERROR'

export const DELETING_POST = 'DELETING_POST'
export const DELETING_POST_SUCCESS = 'DELETING_POST_SUCCESS'
export const DELETING_POST_ERROR = 'DELETING_POST_ERROR'

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
