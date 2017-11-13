import { Map, fromJS } from 'immutable'
import {
  FETCHING_COMMENT_LIST,
  FETCHING_COMMENT_LIST_SUCCESS,
  FETCHING_COMMENT_LIST_ERROR,
} from '../actions/CommentActions'

const initialState = Map({
  isLoading: true,
  isFetched: false,
  listError: '',
  commentList: Map({}),
})

export default function comment (state = initialState, action) {
  switch (action.type) {
    case FETCHING_COMMENT_LIST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_COMMENT_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        isFetched: true,
        listError: '',
        commentList: state.get('commentList').set(action.postId, fromJS(action.commentList)),
      })
    case FETCHING_COMMENT_LIST_ERROR:
      return state.merge({
        isLoading: false,
        listError: action.error,
      })
    default:
      return state
  }
}
