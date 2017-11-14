export const FETCHING_POST_LIST = 'FETCHING_POST_LIST'
export const FETCHING_POST_LIST_SUCCESS = 'FETCHING_POST_LIST_SUCCESS'
export const FETCHING_POST_LIST_ERROR = 'FETCHING_POST_LIST_ERROR'

export const SET_FILTERED_POST_CATEGORY = 'SET_FILTERED_POST_CATEGORY'
export const UNSET_FILTERED_POST_CATEGORY = 'UNSET_FILTERED_POST_CATEGORY'

export const OPEN_SET_POST = 'OPEN_SET_POST'
export const CLOSE_SET_POST = 'CLOSE_SET_POST'

export const CREATING_POST = 'CREATING_POST'
export const CREATING_POST_SUCCESS = 'CREATING_POST_SUCCESS'
export const CREATING_POST_ERROR = 'CREATING_POST_ERROR'

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

export function openSetPost (postId = '') {
  return {
    type: OPEN_SET_POST,
    postId,
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
