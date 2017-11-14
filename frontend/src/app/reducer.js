import { combineReducers } from 'redux'
import {
  UserReducer,
  CategoryReducer,
  PostReducer,
  CommentReducer
} from 'app/redux/reducers'

export default combineReducers({
  UserReducer,
  CategoryReducer,
  PostReducer,
  CommentReducer,
})
