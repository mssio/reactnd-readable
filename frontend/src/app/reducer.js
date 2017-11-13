import { combineReducers } from 'redux'
import { CategoryReducer, PostReducer, CommentReducer } from 'app/redux/reducers'

export default combineReducers({
  CategoryReducer,
  PostReducer,
  CommentReducer,
})
