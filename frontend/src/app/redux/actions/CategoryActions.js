import {
  FETCHING_CATEGORY_LIST,
  FETCHING_CATEGORY_LIST_SUCCESS,
  FETCHING_CATEGORY_LIST_ERROR,
  SET_SELECTED_CATEGORY,
  UNSET_SELECTED_CATEGORY,
} from '../types/CategoryActionTypes'

export function fetchingCategoryList () {
  return {
    type: FETCHING_CATEGORY_LIST,
  }
}
export function fetchingCategoryListSuccess (categoryList) {
  return {
    type: FETCHING_CATEGORY_LIST_SUCCESS,
    categoryList,
  }
}
export function fetchingCategoryListError (error) {
  console.warn('Fetching category list failed!')
  return {
    type: FETCHING_CATEGORY_LIST_ERROR,
    error,
  }
}

export function setSelectedCategory (selectedCategory) {
  return {
    type: SET_SELECTED_CATEGORY,
    selectedCategory,
  }
}
export function unsetSelectedCategory () {
  return {
    type: UNSET_SELECTED_CATEGORY,
  }
}
