import { SET_USERNAME } from '../types/UserActionTypes'

export function setUsername (username) {
  return {
    type: SET_USERNAME,
    username,
  }
}
