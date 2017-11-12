import { Map } from 'immutable'
import {
  FETCHING_POST_LIST,
  FETCHING_POST_LIST_SUCCESS,
  FETCHING_POST_LIST_ERROR,
  SET_FILTERED_POST_CATEGORY,
  UNSET_FILTERED_POST_CATEGORY,
} from '../actions/PostActions'

const initialState = Map({
  isLoading: true,
  listError: '',
  postList: Map({}),
  filteredPostList: Map({}),
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
        filteredPostList: Map(filteredPostList)
      })
    case UNSET_FILTERED_POST_CATEGORY:
      return state.merge({
        filteredPostList: Map({})
      })
    default:
      return state
  }
}
