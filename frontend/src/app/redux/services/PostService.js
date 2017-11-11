import axios from 'axios'
import { readableApiUrl } from 'app/config/api'

export function svcFetchAllPosts () {
  return axios.get(`${readableApiUrl}/posts`, {
    headers: {
      Authorization: 'Hello world!'
    }
  }).then(res => res.data)
}

export function svcFetchPostsByCategory (categoryId) {
  return axios.get(`${readableApiUrl}/${categoryId}/posts`, {
    headers: {
      Authorization: 'Hello world!'
    }
  }).then(res => res.data)
}

export function svcFetchPost (postId) {
  return axios.get(`${readableApiUrl}/posts/${postId}`, {
    headers: {
      Authorization: 'Hello world!'
    }
  }).then(res => res.data)
}
