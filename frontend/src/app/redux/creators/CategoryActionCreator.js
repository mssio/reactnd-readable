import {
  fetchingCategoryList,
  fetchingCategoryListSuccess,
  fetchingCategoryListError,
} from '../actions/CategoryActions'
import { svcFetchCategoryList } from '../services/CategoryService'

export function handleFetchCategoryList () {
  return async function (dispatch) {
    dispatch(fetchingCategoryList())

    try {
      const categoryList = await svcFetchCategoryList()
      dispatch(fetchingCategoryListSuccess(categoryList))
    } catch (err) {
      dispatch(fetchingCategoryListError(err))
    }
  }
}
