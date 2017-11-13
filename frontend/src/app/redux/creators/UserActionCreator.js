import store from 'store'
import { isEmpty } from 'app/utils/common'
import { setUsername } from '../actions/UserActions'

export function handleGetUsername () {
  return function (dispatch) {
    const username = store.get('username')
    if (!isEmpty(username)) {
      setTimeout(function () {
        dispatch(setUsername(username))
      }, 1)
    }
  }
}

export function handleSetUsername (username) {
  return function (dispatch) {
    dispatch(setUsername(username))
    store.set('username', username)
  }
}
