export const FETCHING_POST_LIST = 'FETCHING_POST_LIST'
export const FETCHING_POST_LIST_SUCCESS = 'FETCHING_POST_LIST_SUCCESS'
export const FETCHING_POST_LIST_ERROR = 'FETCHING_POST_LIST_ERROR'

export const SET_FILTERED_POST_CATEGORY = 'SET_FILTERED_POST_CATEGORY'
export const UNSET_FILTERED_POST_CATEGORY = 'UNSET_FILTERED_POST_CATEGORY'

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
