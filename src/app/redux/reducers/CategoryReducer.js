import { Map, List } from 'immutable'
import {
  FETCHING_CATEGORY_LIST,
  FETCHING_CATEGORY_LIST_SUCCESS,
  FETCHING_CATEGORY_LIST_ERROR,
  SET_SELECTED_CATEGORY,
  UNSET_SELECTED_CATEGORY,
} from '../actions/CategoryActions'

const initialState = Map({
  isLoading: false,
  listError: '',
  categoryList: List([]),
  selectedCategory: '',
})

export default function category (state = initialState, action) {
  switch (action.type) {
    case FETCHING_CATEGORY_LIST:
      return state.merge({
        isLoading: true,
      })
    case FETCHING_CATEGORY_LIST_SUCCESS:
      return state.merge({
        isLoading: false,
        categoryList: List(action.categoryList),
      })
    case FETCHING_CATEGORY_LIST_ERROR:
      return state.merge({
        isLoading: false,
        listError: action.error,
      })
    case SET_SELECTED_CATEGORY:
      return state.merge({
        selectedCategory: action.selectedCategory,
      })
    case UNSET_SELECTED_CATEGORY:
      return state.merge({
        selectedCategory: initialState.get('selectedCategory')
      })
    default:
      return state
  }
}
