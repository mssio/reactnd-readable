import { Map } from 'immutable'
import {
  FETCHING_POST_LIST,
  FETCHING_POST_LIST_SUCCESS,
  FETCHING_POST_LIST_ERROR,
  SET_FILTERED_POST_CATEGORY,
  UNSET_FILTERED_POST_CATEGORY,
  OPEN_SET_POST,
  CLOSE_SET_POST,
  CREATING_POST,
  CREATING_POST_SUCCESS,
  CREATING_POST_ERROR,
} from '../actions/PostActions'

const initialState = Map({
  isLoading: true,
  isFetched: false,
  listError: '',
  createError: '',
  postList: Map({}),
  filteredPostCategory: '',
  filteredPostList: Map({}),
  isOpenSetPost: false,
  setPostId: '',
})

export default function post (state = initialState, action) {
  switch (action.type) {
    case FETCHING_POST_LIST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_POST_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        isFetched: true,
        listError: '',
        postList: action.postList,
      })
    case FETCHING_POST_LIST_ERROR:
      return state.merge({
        isLoading: false,
        listError: action.error,
      })
    case SET_FILTERED_POST_CATEGORY:
      const filteredPostList = state.get('postList')
        .reduce(function (filtered, entry) {
          if (entry.get('category') === action.categoryId) {
            filtered[entry.get('id')] = entry
          }
          return filtered
        }, {})
      return state.merge({
        filteredPostList: Map(filteredPostList),
        filteredPostCategory: action.categoryId,
      })
    case UNSET_FILTERED_POST_CATEGORY:
      return state.merge({
        filteredPostList: Map({})
      })
    case OPEN_SET_POST:
      return state.merge({
        isOpenSetPost: true,
        setPostId: action.postId,
      })
    case CLOSE_SET_POST:
      return state.merge({
        isOpenSetPost: false,
      })
    case CREATING_POST:
      return state.merge({
        isLoading: true,
      })
    case CREATING_POST_SUCCESS:
      const newPostList = state.get('postList').set(action.post.id, Map(action.post))

      let newFilteredPostList = Map({})
      if (action.post.category === state.get('filteredPostCategory')) {
        newFilteredPostList = state.get('filteredPostList').set(action.post.id, Map(action.post))
      } else {
        newFilteredPostList = state.get('filteredPostList')
      }
      
      return state.merge({
        isLoading: false,
        createError: '',
        postList: newPostList,
        filteredPostList: newFilteredPostList,
      })
    case CREATING_POST_ERROR:
      return state.merge({
        isLoading: false,
        createError: action.error,
      })
    default:
      return state
  }
}
