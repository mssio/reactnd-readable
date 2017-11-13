import axios from 'axios'
import { readableApiUrl } from 'app/config/api'

export function svcFetchAllPosts () {
  return axios.get(`${readableApiUrl}/posts`, {
    headers: {
      Authorization: 'Hello world!'
    }
  }).then(res => res.data)
}

export function svcFetchPostComments (postId) {
  return axios.get(`${readableApiUrl}/posts/${postId}/comments`, {
    headers: {
      Authorization: 'Hello world!'
    }
  }).then(res => res.data)
}
